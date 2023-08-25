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

    //LIST CATEGORIES IN MBOILE
    const headerListMobile = ()=>{
        const getList = document.querySelector('.header__categories');
        getList.addEventListener('click', ()=>{
            getList.classList.toggle('active');
        });
    }
    
    //RETURN FUNCIONTS WITH GLOBAL SCOPE
    return {
        setHandleEvent : function(){
            try{
                headerHamburger();
            }catch(err){  }
            try{
                headerListMobile();
            }catch(err){  }
        }
    }
})();

//SAVE GLOBAL FUNCTIONS
const loadHeaderHandlers = ()=>{
    header.setHandleEvent();
}

export { loadHeaderHandlers }