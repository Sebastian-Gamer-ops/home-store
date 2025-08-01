document.getElementById("cambioForm").addEventListener("click", function() {
    document.querySelector(".contenedor").style.display = "none"; 
    document.getElementById("inicioSesionForm").style.display = "flex"; 
    document.getElementById("formTitle").textContent = "INICIO DE SESIÓN";
    document.getElementById("cambioForm").style.display = "none"; 
    document.getElementById("cambioFormLogin").style.display = "block"; 
  });
  
  document.getElementById("cambioFormLogin").addEventListener("click", function() {
    document.querySelector(".contenedor").style.display = "flex";
    document.getElementById("inicioSesionForm").style.display = "none"; 
    document.getElementById("formTitle").textContent = "REGISTRO";
    document.getElementById("cambioForm").style.display = "block";
    document.getElementById("cambioFormLogin").style.display = "none";
  });
  