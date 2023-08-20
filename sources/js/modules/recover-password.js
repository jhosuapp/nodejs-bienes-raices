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
    
    //RETURN FUNCIONTS WITH GLOBAL SCOPE
    return {
        setHandleEvent : function(){
            try{
                configRecoverPass();
            }catch(err){  }
        }
    }
})();

//EXECUTE GLOBAL FUNCTIONS
window.addEventListener('load', ()=>{
    recoverPassword.setHandleEvent();
});






