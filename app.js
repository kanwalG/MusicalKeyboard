let mykeys = document.querySelectorAll(".key");
for(let i=0 ; i<mykeys.length ; i++){
    mykeys[i].addEventListener('click', function () {
        playSound(mykeys[i].innerHTML.toLowerCase());
    })
}


document.addEventListener('keydown', function (buttonPressed) {
    playSound(buttonPressed.key.toLowerCase());
    pressed_key= buttonPressed.key.toLowerCase();

    for(let i=0 ; i<mykeys.length ; i++){
        mykeys[i].classList.remove('activated')
    }
    
    for(let i=0 ; i<mykeys.length ; i++){
        if(pressed_key == mykeys[i].innerHTML.toLowerCase()){
            mykeys[i].classList.add('activated')
            setTimeout(function() {
                clearActivatedClass(mykeys[i])}, 200);
        }    
    }
    
})

function clearActivatedClass(oneElement){
    oneElement.classList.remove('activated')

}


function playSound(keyPressed){
    let snd;
    switch(keyPressed) {
        case 'c':
            snd = new Audio('sounds/do.mp3');
            snd.play();          
            break;
            case 'd':
        case 'd':
            snd = new Audio('sounds/re.mp3');
            snd.play();          
            break;
        case 'e':
            snd = new Audio('sounds/mi.mp3');
            snd.play();          
            break;
        case 'f':
            snd = new Audio('sounds/fa.mp3');
            snd.play();          
            break;
        case 'g':
            snd = new Audio('sounds/sol.mp3');
            snd.play();          
            break;
        case 'a':
            snd = new Audio('sounds/la.mp3');
            snd.play();          
            break;
        case 'b':
            snd = new Audio('sounds/ti.mp3');
            snd.play();          
            break;
            case 'k':
            snd = new Audio('sounds/doh.mp3');
            snd.play();          
            break;
        default:
            break;
      }

    }