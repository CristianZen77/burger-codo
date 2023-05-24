
form.addEventListener('submit', e => {
   e.preventDefault();
   const formulario = readforms()
   //pushMail(formulario);
});
//toma de datos
function readforms() {    
   const username = document.getElementById('nombres').value;
   const mail = document.getElementById('email').value;
   const telefono = document.getElementById('telefono').value;
   const texto = document.getElementById('texto').value;

   const htmlMail = {"nombres":username, "email": mail, "telefono": telefono, "texto": texto };
   return htmlMail;

}
//validacion
function validateInputs(formulario){
   const usernameValue = formulario.nombres.trim();
   const emailValue = formulario.email.trim();

   if ((usernameValue != null & usernameValue != undefined & usernameValue != "") & (emailValue != null & emailValue != undefined & emailValue != "")) 
      return true;
      else return false;
}

function pushMail(formulario){
   if (validateInputs(formulario) === true) 
   x = x+1
   //aqui va el push al mail en caso de querer enviar al cliente una notificacion o enviarnos a nosotros mismos
};
   

let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

