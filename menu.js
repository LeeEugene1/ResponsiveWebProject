var burger = document.querySelector('.burger')
        var nav = document.querySelector('.nav-links')
        // var systemMenu = document.querySelector('.hamberger-System');
        // var systemMenuMouseover = document.querySelector('.hamberger-System-menu');
    
        var b1 = document.querySelector('.line1');
        var b2 = document.querySelector('.line2');
        var b3 = document.querySelector('.line3');

        // systemMenu.addEventListener('mouseover', function(){
        //     systemMenuMouseover.classList.add('mouseover')
        // })

        burger.addEventListener('click',function(){
            nav.classList.toggle('nav-active');
            b1.classList.toggle('active');
            b2.classList.toggle('active');
            b3.classList.toggle('active');
        })

        window.addEventListener('resize', function(){
            nav.classList.remove('nav-active');
            b1.classList.remove('active');
            b2.classList.remove('active');
            b3.classList.remove('active');
        })

        window.addEventListener('scroll', function(){
            nav.classList.remove('nav-active');
            b1.classList.remove('active');
            b2.classList.remove('active');
            b3.classList.remove('active');
        })

var submenu = document.querySelector('.hamberger-System-menu-sub');
var sub_submenu = document.querySelector('.hamberger-System-menu-sub-sub')
submenu.addEventListener('click',function(){
    sub_submenu.classList.toggle('active');
})