// assets/js/main.js
$(document).ready(function() {
    // Código común para todas las páginas
    });

    function saveToken(token) {
        localStorage.setItem("token", token);
    }
    
    function getToken() {
        return localStorage.getItem("token");
    }
    
    function isLoggedIn() {
        return !!getToken();
    }
    
    function logout() {
        localStorage.removeItem("token");
        window.location.href = "login.html";
    }
    
    $(document).ready(function () {
        if (isLoggedIn()) {
            $(".navbar-nav").html(`
                <li class="nav-item">
                    <a class="nav-link" href="cliente/perfil.html">Mi Perfil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="logout" href="#">Cerrar Sesión</a>
                </li>
            `);
    
            $("#logout").on("click", logout);
        }
    });
    
