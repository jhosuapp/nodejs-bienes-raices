const dropZone = (()=>{

    //CONFIG
    const configDropZone = ()=>{
        const getMsgErrorGeneral = document.querySelector('.msg-error');
        const getDropZone = document.querySelector('#drop-zone input');
        const allowExtensions = ['jpg', 'png', 'webp', 'jpeg'];
        const allowSize = 1000000;
        const getMsgError = document.querySelector('#render-error p');
        const image = document.querySelector('#render-image');
        const getRemoveImage = document.querySelector('#remove-image');

        const reUseError = (msg)=>{
            getMsgError.classList.add('active');
            getMsgError.textContent = msg;
            getDropZone.value = '';
        }
        
        getDropZone.addEventListener('change', function(){
            //Get file
            const getFile = getDropZone.files[0];
            //Reset src image
            image.src = '';
            
            //Validate extensiones asset
            const splitExtension = getFile?.name.split('.');
            const getExtension =  splitExtension?.pop();
            if(allowExtensions.includes(getExtension)){
                //Validate size asset
                if(getFile.size >= allowSize){
                    reUseError(`El peso no puede ser mayor a ${allowSize / allowSize}MB`);
                }else{
                    //Render preview asset
                    image.src = URL.createObjectURL(getFile);
                    getMsgError.classList.remove('active');
                    getRemoveImage.classList.add('active');
                    getMsgErrorGeneral.classList.add('hidden');
                }
            }else{
                reUseError('Las extensiones permitidas son: jpg, png, webp y jpeg');
            }
        });

        //Remove image
        getRemoveImage.addEventListener('click', ()=>{
            image.src = '';
            dropZone.value = '';
            getRemoveImage.classList.remove('active');
        });
    }

    //VALIDATE FORM
    const validateFormDropZone = ()=>{
        const getForm = document.querySelector('form');
        const getMsgError = document.querySelector('.msg-error');
        const getInputFile = document.querySelector('#drop-zone input');
        getForm.addEventListener('submit', (e)=>{
            if(!getInputFile.value.length){
                e.preventDefault();
                getMsgError.classList.remove('hidden');
            }
        });
    }

    
    //RETURN FUNCIONTS WITH GLOBAL SCOPE
    return {
        setHandleEvent : function(){
            try{
                configDropZone();
                validateFormDropZone();
            }catch(err){ console.log(err) }
        }
    }
})();

//EXECUTE GLOBAL FUNCTIONS
window.addEventListener('load', ()=>{
    dropZone.setHandleEvent();
});



