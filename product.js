let cartLogo = document.querySelector('.cart-logo'),
toggle       = document.querySelector('.toggle'),
closeNavbar         = document.querySelector('.closeNavbar'),
Proudct_Img         = document.querySelector('.preview-main img'),
thumbImage          = document.querySelectorAll('.box-image img'),
heading_prodName    = document.querySelector('.heading-prodName'),
prodctrate          = document.querySelector('.rate'),
prodctrate_BeforeDiscount = document.querySelector('.beforeDiscount'),
arrowLeft           = document.querySelector('.arrows .left'),
arrowRight          = document.querySelector('.arrows .right'),

addCartBTN          = document.querySelector('.addCart'),
prodcuts_CartBox    = document.querySelector('.products-container'),
product_count_Minus = document.querySelector('.minus'),
product_count_Display = document.querySelector('.displayCount'),
product_count_plus  = document.querySelector('.plus'),
tabs        = document.querySelector('.tabs');

let counter = 0;
let index = 1;
window.addEventListener('load',function(){
    let maxPageHeight = Math.max(document.body.scrollHeight);
    document.documentElement.style.setProperty('--pageHeight',maxPageHeight+"px")
})

CHECK_CART_IS_EMPTY();

cartLogo.addEventListener('click',function(e){
    document.querySelector('.cart-box').classList.toggle('active');
});

toggle.addEventListener('click',function(){
    tabs.classList.add('active');
});

closeNavbar.addEventListener('click',function(){
    tabs.classList.remove('active');

})

// 
Proudct_Img.addEventListener('click',GALLERY_PREVIEW_OVERLAY);

// 
product_count_Minus.addEventListener('click',function(){
    if (product_count_Display.textContent <= '0') {
        
    }else{
        counter--
    }
    product_count_Display.textContent = counter ;
    ADD_TO_CART_PRODUCT()

})
product_count_plus.addEventListener('click',function(){
    counter++
    product_count_Display.textContent = counter ;
    ADD_TO_CART_PRODUCT()

})

arrowLeft.addEventListener('click',function(){
    if (index <=1) {
        
    }else{
        index --
    }
    Proudct_Img.src = `images/image-product-${index}.jpg`
})

arrowRight.addEventListener('click',function(){
    if (index >= 4) {
        
    }else{
        index ++
    }

    Proudct_Img.src = `images/image-product-${index}.jpg`
})
// 
///
// 

window.addEventListener('click',function(e){
    if (e.target.classList.contains('deleteIcon')) {
        e.target.parentElement.remove();
        CHECK_CART_IS_EMPTY();
    }
})


function CHECK_CART_IS_EMPTY(){
    if (prodcuts_CartBox.childElementCount <= 0 ) {
        const emptyMSG = document.createElement('span');
        const MSG = document.createTextNode('Your Cart is empty');
        emptyMSG.className = 'MSG'
        emptyMSG.appendChild(MSG)
        prodcuts_CartBox.appendChild(emptyMSG);
        prodcuts_CartBox.parentElement.lastElementChild.style.visibility= 'hidden';
        prodcuts_CartBox.parentElement.lastElementChild.style.pointerEvents = 'none';
    }
}


function ADD_TO_CART_PRODUCT(){
    const PRODUCT = `
        <div class="product">
            <div class="product-img">
                <img src="images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail.jpg">
            </div>
            <div class="product-details">
                <h4 class="product-name">${heading_prodName.textContent}</h4>
                <p class="product-rate">$125.00 x <span class='countSelected'>${product_count_Display.textContent}</span> <span class='BeforeDis'>${prodctrate_BeforeDiscount.textContent}</span></p>
            </div>
            <img class="deleteIcon" src="images/icon-delete.svg" alt="icon-delete.svg">
        </div>
    `

    addCartBTN.addEventListener('click',function(e){
        prodcuts_CartBox.innerHTML= PRODUCT ;
        document.querySelector('.cartProuductCount').textContent = counter ;
        CHECK_CART_IS_EMPTY();
        prodcuts_CartBox.parentElement.lastElementChild.style.visibility= 'visible';
        prodcuts_CartBox.parentElement.lastElementChild.style.pointerEvents = 'all';
    })

    // let CartBox_deleteIcon    = document.querySelector('.deleteIcon');

    // CartBox_deleteIcon.addEventListener('click',function(){
    //     CartBox_deleteIcon.parentElement.remove();
    //     CHECK_CART_IS_EMPTY();
    //     console.log('okay');
    // })
}


thumbImage.forEach(img =>{
    img.addEventListener('click',(e)=>{
            thumbImage.forEach(active =>{
                active.classList.remove('active');
            });
        e.target.classList.add('active');
        const imgPath = e.target.getAttribute('data-img-src');
        Proudct_Img.src = imgPath ;
    });
})

// Create Function that will create overlay with photos
// 
function GALLERY_PREVIEW_OVERLAY(){
    const OVERLAY_BASE = document.createElement('section');
    const GALLRY_CONTAINER = document.createElement('div');
    const MAIN_IMAGE_CONTAINER = document.createElement('div');
    const OVERLAY_ClOSE_CONTAINER = document.createElement('div');
    const OVERLAY_ClOSE_IMAGE = document.createElement('img');
    const ARROWS_CONTAINER = document.createElement('dov');
    const ARROWS_LEFT_IMAGE = document.createElement('img');
    const ARROWS_RIGHT_IMAGE = document.createElement('img');
    const MAIN_IMAGE = document.createElement('img');
    const MORE_PRODUCT_PHOTOS_CONTAINER = document.createElement('div');
    const PRODUCT_PHOTO_1 = document.createElement('div');
    const PRODUCT_PHOTO_2 = document.createElement('div');
    const PRODUCT_PHOTO_3 = document.createElement('div');
    const PRODUCT_PHOTO_4 = document.createElement('div');
    const PHOTO_1 = document.createElement('img');
    const PHOTO_2 = document.createElement('img');
    const PHOTO_3 = document.createElement('img');
    const PHOTO_4 = document.createElement('img');
    let index = 1;
    // Appending ELEMENTS

    OVERLAY_BASE.appendChild(GALLRY_CONTAINER);
    GALLRY_CONTAINER.appendChild(MAIN_IMAGE_CONTAINER);
    MAIN_IMAGE_CONTAINER.appendChild(MAIN_IMAGE);
    GALLRY_CONTAINER.appendChild(OVERLAY_ClOSE_CONTAINER);
    OVERLAY_ClOSE_CONTAINER.appendChild(OVERLAY_ClOSE_IMAGE);
    MAIN_IMAGE_CONTAINER.appendChild(ARROWS_CONTAINER);
    ARROWS_CONTAINER.appendChild(ARROWS_LEFT_IMAGE);
    ARROWS_CONTAINER.appendChild(ARROWS_RIGHT_IMAGE);
    GALLRY_CONTAINER.appendChild(MORE_PRODUCT_PHOTOS_CONTAINER);
    MORE_PRODUCT_PHOTOS_CONTAINER.appendChild(PRODUCT_PHOTO_1);
    MORE_PRODUCT_PHOTOS_CONTAINER.appendChild(PRODUCT_PHOTO_2);
    MORE_PRODUCT_PHOTOS_CONTAINER.appendChild(PRODUCT_PHOTO_3);
    MORE_PRODUCT_PHOTOS_CONTAINER.appendChild(PRODUCT_PHOTO_4);
    PRODUCT_PHOTO_1.appendChild(PHOTO_1);
    PRODUCT_PHOTO_2.appendChild(PHOTO_2);
    PRODUCT_PHOTO_3.appendChild(PHOTO_3);
    PRODUCT_PHOTO_4.appendChild(PHOTO_4);
    
    // Diffine classes and attribute's
    OVERLAY_BASE.className = 'OVERLAY_BASE';
    GALLRY_CONTAINER.className = 'GALLRY_CONTAINER';
    MAIN_IMAGE_CONTAINER.className = 'MAIN_IMAGE_CONTAINER';
    PRODUCT_PHOTO_1.className = 'PRODUCT_PHOTO';
    PRODUCT_PHOTO_2.className = 'PRODUCT_PHOTO';
    PRODUCT_PHOTO_3.className = 'PRODUCT_PHOTO';
    PRODUCT_PHOTO_4.className = 'PRODUCT_PHOTO';
    PHOTO_1.className = 'PHOTO active';
    PHOTO_2.className = 'PHOTO';
    PHOTO_3.className = 'PHOTO';
    PHOTO_4.className = 'PHOTO';
    MAIN_IMAGE.className = 'MAIN_IMAGE'
    OVERLAY_ClOSE_CONTAINER.className = 'OVERLAY_ClOSE_CONTAINER';
    ARROWS_CONTAINER.className = 'ARROWS_CONTAINER';
    OVERLAY_ClOSE_IMAGE.src = 'images/icon-plus.svg';
    OVERLAY_ClOSE_IMAGE.className = 'OVERLAY_ClOSE_IMAGE';
    ARROWS_LEFT_IMAGE.src = 'images/icon-previous.svg';
    ARROWS_LEFT_IMAGE.className = 'ARROW_IMAGE';
    ARROWS_RIGHT_IMAGE.src = 'images/icon-next.svg';
    ARROWS_RIGHT_IMAGE.className = 'ARROW_IMAGE';
    MAIN_IMAGE.src = 'images/image-product-1.jpg';
    MORE_PRODUCT_PHOTOS_CONTAINER.className = 'MORE_PRODUCT_PHOTOS_CONTAINER'
    PHOTO_1.src = 'images/image-product-1-thumbnail.jpg'
    PHOTO_1.setAttribute('data-img-src','images/image-product-1.jpg')
    PHOTO_2.src = 'images/image-product-2-thumbnail.jpg'
    PHOTO_2.setAttribute('data-img-src','images/image-product-2.jpg')
    PHOTO_3.src = 'images/image-product-3-thumbnail.jpg'
    PHOTO_3.setAttribute('data-img-src','images/image-product-3.jpg')
    PHOTO_4.src = 'images/image-product-4-thumbnail.jpg'
    PHOTO_4.setAttribute('data-img-src','images/image-product-4.jpg')

    document.body.appendChild(OVERLAY_BASE);
    // event Lisiner's
    // 
    OVERLAY_ClOSE_IMAGE.addEventListener('click',()=>{
        OVERLAY_BASE.remove();
    })

    ARROWS_LEFT_IMAGE.addEventListener('click',()=>{
        MAIN_IMAGE.src = `images/image-product-${index}.jpg`
        if (index <= 1) {
            // Nothing
        }else{
            index--
        }
        
    })
    ARROWS_RIGHT_IMAGE.addEventListener('click',()=>{
        MAIN_IMAGE.src = `images/image-product-${index}.jpg`
        if (index >= 4 ) {
            // Nothing
        }else{
            index++

        }
        
    })

    const PRODUCT_IMGS = Array.from(document.querySelectorAll('.PHOTO'));
    PRODUCT_IMGS.forEach(prodIMG =>{
        prodIMG.addEventListener('click',function(e){
                PRODUCT_IMGS.forEach(eleClass =>{
                    eleClass.classList.remove('active')
                });
            const IMG_PATH = e.target.getAttribute('data-img-src');
            e.target.classList.add('active');
            MAIN_IMAGE.src =  IMG_PATH;

        })
    })

}

// call functions

ADD_TO_CART_PRODUCT();

