const header = (()=>{
    //HAMBURGER IN MOBILE
    const headerHamburger = ()=>{
        const getBtnOpenHeader = document.querySelector('#header-hamburger');
        const getNavHeader = document.querySelector('#nav-mobile');
        getBtnOpenHeader.addEventListener('click', ()=>{
            getBtnOpenHeader.classList.toggle('active');
            getNavHeader.classList.toggle('active');
        });
    }
    
    //RETURN FUNCIONTS WITH GLOBAL SCOPE
    return {
        setHandleEvent : function(){
            try{
                headerHamburger();
            }catch(err){  }
        }
    }
})();

//SAVE GLOBAL FUNCTIONS
const loadHeaderHandlers = ()=>{
    header.setHandleEvent();
}

export { loadHeaderHandlers }