
import{adicionarFilme} from './adcfilme.js';
var cont = document.querySelector('div.conteiner');
var movendo = false, posX;
var scro,pulo = 0;
var bt1 = document.getElementById('bt1');
var bt2 = document.getElementById('bt2');
var bt3 = document.getElementById('bt11');
var bt4 = document.getElementById('bt22');
bt1.style.display = 'none';
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
        cont.scrollLeft = scro - x;
        pulo = cont.scrollLeft;
        if(cont.scrollLeft <= 1){
            bt1.style.display = 'none';
    
        }
        if(cont.scrollLeft >= 2){
            bt1.style.display = 'inline-block';
    
        }
        let l = cont.scrollWidth - cont.clientWidth;
        if (cont.scrollLeft == l){
            let adc = new adicionarFilme();
        }


    }
});

function frentee(){
    pulo = pulo + 519;
    bt1.style.display = 'inline-block';

    cont.scroll({
        top:0,
        left:pulo,
        behavior:"smooth"
    })
    let l = cont.scrollWidth - cont.clientWidth;
    if (pulo >= l){
        pulo = l;
        let adc = new adicionarFilme();
    }
}
function atrazz(){
    pulo = pulo - 519;
    if(cont.scrollLeft <= 0){
        bt1.style.display = 'none';
        pulo = 0;

    }
    cont.scroll({
        top:0,
        left:pulo,
        behavior:"smooth"
    })
};

bt1.addEventListener('click', atrazz);
bt2.addEventListener('click', frentee);
bt11.addEventListener('click', frentee);
bt22.addEventListener('click', atrazz);


