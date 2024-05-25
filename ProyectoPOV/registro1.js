const registro = () => {
    let listaUsuarios = JSON.parse(localStorage.getItem("lista")) || [];
    let valorUsuario = document.getElementById("NUser").value.trim(); 
    let valorPassword = document.getElementById("Pass").value.trim(); 
    let valorCPassword = document.getElementById("CPass").value.trim(); 
    if (valorPassword === valorCPassword) {
        
        let nuevoUsuario = { usuario: valorUsuario, pass: valorPassword };

        
        listaUsuarios.push(nuevoUsuario);

        
        localStorage.setItem("lista", JSON.stringify(listaUsuarios));

        
        window.location.href = "sesion.html";
        alert("Registro exitoso, ahora puede iniciar sesion")
    } else {
        alert("Las contraseñas no coinciden.");
    }
}
