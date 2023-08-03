const ResendCode = (()=>{
    //CONFIG
    const configRecoverPass = ()=>{
        const getEmailForm = document.querySelector('#form-resend-code #email');
        const getFormResendCode = document.querySelector('#form-resend-code');
        getEmailForm && (getEmailForm.value = localStorage.getItem('emailUser'));

        getFormResendCode && getFormResendCode.addEventListener('submit', ()=>{
            // localStorage.removeItem('emailUser');
        });
    }

    //VALIDAMOS QUE EXISTA EL EMAIL EN LOCALSTORAGE
    const redirectRecoverPass = ()=>{
        if(!localStorage.getItem('emailUser')){
            window.location.href = '/auth/';
        }
    }
    
    //RETORNAMOS FUNCIONES CON SCOPE GLOBAL
    return {
        getChildsResendCode : function(){
            try{
                configRecoverPass();
            }catch(err){  }
            try{
                redirectRecoverPass();
            }catch(err){  }
        }
    }
})();

//EJECUTAMOS LAS FUNCIONES GLOBALES
window.addEventListener('load', ()=>{
    ResendCode.getChildsResendCode();
});