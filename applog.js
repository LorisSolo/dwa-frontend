
/*fake login*/
document.getElementById("submit-button").onclick = function (){
    if (document.getElementById("exampleInputEmail1").value != "loris_solo@hotmail.com" && document.getElementById("exampleInputEmail2").value != 123456789){
        document.getElementById("email-lable").innerHTML = "Krivo korisničko ili lozinka"
        
    }
    else{
        window.location = "index.html";
    }

}


