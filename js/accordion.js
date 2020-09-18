function checkAll(source){
    checkboxes = document.getElementsByName('cb');
    for(var i=0, n=checkboxes.length;i<n;i++){
        checkboxes[i].checked = source.checked;
    }
}

//    function accordionEffect(){
     var acc = document.getElementsByClassName('accordion_btn');
     for(var i = 0; i<acc.length; i++){
         acc[i].onclick= function(){
             this.classList.toggle('accordion_btn--active');
             var content = this.nextSibling;
             if(content.style.display === "block"){
                 content.style.display = "none";
             }else{
                 content.style.display = "block";
             }
         }
     }
     this.classList.toggle('accordion_content--active');
//    }