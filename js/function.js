
var tempo = 5000;
var lugar = 0;
var cont = document.querySelector('div.conteiner');
var movendo = false, posX;
var scro,pulo = 0;
cont.addEventListener('mousedown',(e)=>{
    movendo = true;
    posX = e.screenX;
    scro = cont.scrollLeft;
});
cont.addEventListener('mouseup',()=>{
    movendo = false; 
});
cont.addEventListener('mouseleave',()=>{
    movendo = false; 
});
cont.addEventListener('mousemove',(e)=>{
    if(movendo == true){
        var x = e.screenX - posX;
        document.getElementById('resul').innerHTML = x;
        cont.scrollLeft = scro - x;
        pulo = cont.scrollLeft;

    }
});
function frente(){
    pulo = pulo + 519;
    
    cont.scroll({
        top:0,
        left:pulo,
        behavior:"smooth"
    })
}
function atraz(){
    pulo = pulo - 519;
    if(cont.scrollLeft <= 0){
        pulo = 0;
    }
    cont.scroll({
        top:0,
        left:pulo,
        behavior:"smooth"
    })
};



