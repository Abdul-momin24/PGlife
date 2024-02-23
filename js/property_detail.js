window.addEventListener("load", function() {
    // we are fetching Property_id from the search bar
    const seacrh = window.location.search;
    // COnverting it into object
    const params = new URLSearchParams(search);
    // Returning the id in the variable property_id
    const property_id = params.get('property_id');
    //class condition 
    var is_interested_image = document.getElementsByClassName("is-interested-image")[0];
    is_interested_image.addEventListener("click", function (event){
        var XHR = new XMLHttpRequest();

        //on success

        XHR.addEventListener("load", toggle_interested_successs);

        //on error

        XHR.addEventListener("load", on_error);

        //Set up the request

        XHR.open("GET", "api/toggle_inetrested.php?property_id =" + $property_id);

        //Iniate request

        XHR.send();

        document.getElementById("loading").style.display ="block";
        event.preventDefault();
    });
});

var toggle_interested_successs = function(event){
    //removing the loading part because the page is ready
    document.getElementById("loading").style.display ="none";

    var response = json.parse(event.target.responseText);
    //Checking user logged in or not
    if(response.success){
        //user is logged in 
        //afterlogging in the user hearth get filled and count get increased
        var is_interested_image = document.getElementsByClassName("is-interested-image")[0];
        var interested_user_count =  document.getElementsByClassName("interested_users_count")[0];


        if(response.is_interested){
            is_interested_image.classList.add("fas");
            is_interested_image.classList.remove("far");
            interested_user_count.innerHTML =parseFloat(interested_user_count.innerHTML)+1;
        }else{
            is_interested_image.classList.add("far");
                is_interested_image.classList.remove("fas");
                interested_user_count.innerHTML =parseFloat(interested_user_count.innerHTML) -1;
        }
    //IF user is not logged in
    } else if(!response.success && !response.is_logged_in){
        //Opening login modal
        window.$("#login-modal").modal("show");
    }
};