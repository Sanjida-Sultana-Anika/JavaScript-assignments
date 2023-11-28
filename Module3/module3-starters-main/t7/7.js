function changeImage(newSrc){
    document.getElementById('target').src = newSrc;
}

let trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', function(){
    changeImage('img/picB.jpg')
});

trigger.addEventListener('mouseout', function(){
    changeImage('img/picA.jpg')
});