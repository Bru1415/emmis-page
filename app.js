
const jumpButton = document.querySelector('#jump');

const handleJump = (e) =>{

    e.preventDefault;
    console.log('clicked');
    const movingHamster = document.querySelector('#small-hamster');
    
    movingHamster.classList.remove('just-move');
    movingHamster.classList.add('jump');
    setTimeout(()=>{
        movingHamster.classList.remove('jump');
        movingHamster.classList.add('just-move');

    }, 1000);

    movingHamster.classList.add('just-move');
    
        //add animation class to jump
        //maybe wait animation time 
        //remove class to jump
    }


jumpButton.addEventListener('click', handleJump);

