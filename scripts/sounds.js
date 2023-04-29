export function som(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
    
    const somCard1 = new Audio("./complemento/blue-robot-.mp3")
    const somCard2 = new Audio("./complemento/harmony-sounds-.mp3")
    const somCard3 = new Audio("./complemento/intergalactic-oceans-meditation-.mp3")
    const somCard4 = new Audio("./complemento/soft-ambient-.mp3")
    

    function pressKit(){
        kitchenTimer.play()
    }

    function pressButton(){
        buttonPressAudio.play()
    }
    
    function funSom1(){
        somCard1.play()
    }

    function funSom2(){
        somCard2.play()
        
    }

    function funSom3(){
        somCard3.play()
    }

    function funSom4(){
        somCard4.play()
    }

    return{
        pressKit,
        pressButton,
        funSom1,
        funSom2,
        funSom3,
        funSom4,
    }
}