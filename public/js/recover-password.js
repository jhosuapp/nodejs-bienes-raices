const recoverPassword = (()=>{
    //CONFIG
    const configRecoverPass = ()=>{
        const getFormRecoverPass = document.querySelector('#form-recover-password');
        const getEmail = document.querySelector('#form-recover-password #email');

        getFormRecoverPass && getFormRecoverPass.addEventListener('submit', (e)=>{
            if(getEmail.value != ''){
                localStorage.setItem('emailUser', getEmail.value);
            }
        });
    }
    
    //RETORNAMOS FUNCIONES CON SCOPE GLOBAL
    return {
        getChildsRecoverPassword : function(){
            try{
                configRecoverPass();
            }catch(err){  }
        }
    }
})();

//EJECUTAMOS LAS FUNCIONES GLOBALES
window.addEventListener('load', ()=>{
    recoverPassword.getChildsRecoverPassword();
});






