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
        getChildsheader : function(){
            try{
                headerHamburger();
            }catch(err){  }
        }
    }
})();

//EXECUTE GLOBAL FUNCTIONS
window.addEventListener('load', ()=>{
    header.getChildsheader();
});