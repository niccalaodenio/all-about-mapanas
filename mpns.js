var bckdrop = document.querySelector('.backdrop');
var mobile_nav = document.querySelector('.mobile_nav')
var hambtn = document.querySelector('.hamburger_container')
var close = document.querySelector('.x');
var ul_items = document.querySelector('.ul-itms');

hambtn.addEventListener('click', () => {
        // mobile_nav.style.display = "block";
        bckdrop.style.display ='block';
        mobile_nav.style.width = '17rem';
        ul_items.style.marginLeft = '2rem';
        
        } );
mobile_nav.addEventListener('click', function(){
        mobile_nav.style.width = '0';
        bckdrop.style.display = 'none';
        ul_items.style.marginLeft = '-30rem'
});

bckdrop.addEventListener('click', x);
    function x(){
        mobile_nav.style.width = '0';
        bckdrop.style.display = 'none';
        ul_items.style.marginLeft = '-30rem'
    }

close.addEventListener('click', ()=>{
    mobile_nav.style.width = '0';
    bckdrop.style.display = 'none';
    ul_items.style.marginLeft = '-30rem'
}
);   
close.style.cursor = 'pointer'; 