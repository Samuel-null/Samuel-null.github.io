
const email = document.getElementById("1");
const ierr = document.getElementById("2");
const merror = document.getElementById("3");



//Escucho al input 
email.addEventListener("input",function(){
    //comprueba la validacion que hace html del input en type email
    //con typeMismatch que si la validacion es correcta devuelve false y si
    //no es correcta devuelve true
    if(email.validity.typeMismatch){
        //quito al icono de error su clase y le añado la nueva clase
        ierr.classList.remove('error'); 
        ierr.classList.add('error2');
        //quito al mensaje de error su clase y le añado la nueva
        merror.classList.remove('menerr');
        merror.classList.add('menerr2');
        //quito la clase del input email y le añado la nueva
        email.classList.remove('email');
        email.classList.add('email2');
    }
    else{
        //quito al icono de error la claseque le he dado antes y le añado su anterior clase
        ierr.classList.remove('error2'); 
        ierr.classList.add('error'); 
        //quito al mensaje la clase que le he dado antes y le añado su anterior clase
        merror.classList.add('menerr');
        merror.classList.remove('menerr2');
        //quito al input la clase que le he dado antes y le añado su anterior clase
        email.classList.add('email');
        email.classList.remove('email2');

    }
});