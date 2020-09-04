// request modal
var open = document.querySelector('#modal_request')
var modal = document.querySelector('.modal') 
var overlay = document.querySelector('.modal_overlay')
var close = document.querySelector('.closeButton')

open.addEventListener('click', function() {
    modal.classList.remove('hidden');
})

close.addEventListener('click', function(){
    modal.classList.add('hidden');
})
document.addEventListener('click', function(e){
    if(e.target == overlay){
        modal.classList.add('hidden');
    }
})

//modal_folder
var open2 = document.querySelector('#modal_folder')
var modal2 = document.querySelector('.modal_folder')
var overlay2 = document.querySelector('.modal_overlay_folder')
var close2 = document.querySelector('.closeButton_folder')
open2.addEventListener('click', function(){
    modal2.classList.remove('hidden2');
})
close2.addEventListener('click', function(){
    modal2.classList.add('hidden2');
})
document.addEventListener('click', function(e){
    if(e.target == overlay2){
        modal2.classList.add('hidden2');
    }
})

//modal_file
var open3 = document.querySelector('#modal_file');
var modal3 = document.querySelector('.modal_file')
var overlay3 = document.querySelector('.modal_overlay_file')
var close3 = document.querySelector('.closeButton_file')

open3.addEventListener('click', function(){
    modal3.classList.remove('hidden3');
})
close3.addEventListener('click', function(){
    modal3.classList.add('hidden3')
})
document.addEventListener('click', function(e){
    if(e.target == overlay3){
        modal3.classList.add('hidden3');
    }
})
