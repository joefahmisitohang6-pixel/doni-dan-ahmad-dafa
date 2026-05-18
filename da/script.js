const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(e){

  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // LOGIN ADMIN

  if(
    username === "admin" &&
    password === "admin123" &&
    role === "admin"
  ){

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("adminDashboard").style.display = "block";

  }

  // LOGIN USER

  else if(
    username === "user" &&
    password === "user123" &&
    role === "user"
  ){

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("userDashboard").style.display = "block";

  }

  else{

    message.style.color = "red";
    message.innerHTML = "Username atau Password Salah ❌";

  }

});

function toggleDetail(id){

  const box = document.getElementById(id);

  if(box.style.display === "block"){
    box.style.display = "none";
  }

  else{
    box.style.display = "block";
  }

}

function logout(){

  location.reload();

}