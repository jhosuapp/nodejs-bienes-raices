const ResendCode = (()=>{
    //CONFIG
    const configRecoverPass = ()=>{
        const getEmailForm = document.querySelector('#form-resend-code #email');
        const getFormResendCode = document.querySelector('#form-resend-code');
        getEmailForm && (getEmailForm.value = localStorage.getItem('emailUser'));

        getFormResendCode && getFormResendCode.addEventListener('submit', ()=>{
            localStorage.removeItem('emailUser');
        });
    }

    //VALIDATE EMAIL IN LOCALSTORAGE
    const redirectRecoverPass = ()=>{
        if(!localStorage.getItem('emailUser')){
            window.location.href = '/auth/login';
        }
    }
    
    //RETURN FUNCTIONS GLOBAL SCOPE
    return {
        setHandleEvent : function(){
            try{
                configRecoverPass();
            }catch(err){  }
            try{
                redirectRecoverPass();
            }catch(err){  }
        }
    }
})();

//EXCEUTE GLOBAL FUNCTIONS
window.addEventListener('load', ()=>{
    ResendCode.setHandleEvent();
});