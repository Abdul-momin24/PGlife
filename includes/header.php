<div class="header sticky-top">
        <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="index.php">
                <img src="img/logo.png" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-navbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="my-navbar">
                <ul class="navbar-nav">
                <?php
                // checking wether the user is logged or not
                    if(!isset($_SESSION['user_id'])){
                        ?>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#signup-modal">
                            <i class="fas fa-user"></i>Signup
                        </a>
                    </li>
                    <div class="nav-vl"></div>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#login-modal">
                            <i class="fas fa-sign-in-alt"></i>Login
                        </a>
                    </li>
                    <?php
                    } else{
                        ?>
                        <div class ="nav_name">
                            Hi, <a href = dashboard.php> <?php
                                echo $_SESSION["full_name"]?> </a>
                                </div>
                                <li class ="nav_item">
                                    <a class ="nav-link" href ="api/logout.php">
                                        <i class ="fas fa_sign-out-alt"></i>logout
                                    </a>
                                </li>
                     <?php
                    }
                    ?>           
                </ul>
            </div>
        </nav>
    </div>

    <div id="loading">
    </div>