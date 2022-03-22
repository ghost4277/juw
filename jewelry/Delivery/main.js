const but = document.querySelector('#app')
const menu = document.querySelector('.menu__box')
const menu2 = document.querySelector('.menu__box2')
const but2 = document.querySelector('#hi')
var f = false
but2.addEventListener('mousedown',() => getColor( ))
but.addEventListener('mousedown',() => setColor( ))
function setColor(){

if (f==false){

    menu.style.display='block'
    
    f=true
}
else
{
    menu.style.display='none' 
    f=false
}  
console.log(f)
}

function getColor(){

    if (f==false){
    
        menu2.style.display='block'
        
        f=true
    }
    else
    {
        menu2.style.display='none' 
        f=false
    }  
    console.log(f)
    }


    
    