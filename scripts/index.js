import { elements } from"./elements.js"
import { som } from"./sounds.js"
let minuto = '25'
let pauseTimeout;


const {
    minutos,
    segundos,
    
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
    
    btnCard1,
    btnCard2,
    btnCard3,
    btnCard4,

    maisMinutos,
    menosMinutos,

} = elements

const Som = som()



function updateTimer(minuto,segundo){
    minutos.textContent = String(minuto).padStart(2,'0')
    segundos.textContent = String(segundo).padStart(2,'0')
}

function cowntDown(){
    pauseTimeout = setTimeout(function(){
        let segundo = Number(segundos.textContent)
        let minuto = Number(minutos.textContent)

        if(minuto <= 0 && segundo <= 0){
            btnStop.classList.add("hide")
            btnSet.classList.remove("hide")
        
            btnPause.classList.add("hide")
            btnPlay.classList.remove("hide")
            Som.pressKit()

            return
        }

        if(segundo <= 0){
            segundo = 11
            --minuto
            
            minutos.textContent = String(minuto).padStart(2,"0")

        }

        segundos.textContent = String(segundo - 1).padStart(2,"0")        
        cowntDown()
    
    },1000)
}



btnPlay.addEventListener("click",function(){
    console.log('play OK')
    Som.pressButton()

    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')

    btnSet.classList.add("hide")
    btnStop.classList.remove("hide")
    cowntDown()
})

btnPause.addEventListener("click",function(){
    console.log('pause Ok')
    Som.pressButton()

    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
    clearTimeout(pauseTimeout)
})

btnSet.addEventListener("click",function(){
    console.log('set OK')
    Som.pressButton()

    minuto = Number(minutos.textContent)
    minuto = prompt('Quantos minutos') || "25"
    minutos.textContent = String(minuto).padStart(2,'0')

    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
})

btnStop.addEventListener("click",function(){
    console.log('stop OK')
    Som.pressButton()

    btnStop.classList.add("hide")
    btnSet.classList.remove("hide")

    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")

    clearTimeout(pauseTimeout)
    updateTimer(minuto,0)
})




maisMinutos.addEventListener("click",function(){
    Som.pressButton()
    console.log('btnMais OK')

    let acrescentar = function(){
        let segundo = Number(segundos.textContent)
        let minuto = Number(minutos.textContent)
            
        if(segundo <= 0){
            segundo = 60
           minuto += 5
            
            minutos.textContent = String(minuto).padStart(2,"0")

        }

        if(minuto <= 0){
            btnPlay.classList.remove('hide')
            btnPause.classList.add('hide')
            btnStop.classList.add('hide')
            btnSet.classList.remove('hide')

            return
        }

    }
    acrescentar()
   
})

menosMinutos.addEventListener("click",function(){
    Som.pressButton()
    console.log('btnMenos OK')

    let decrementar = function() {
        let segundo = Number(segundos.textContent)
        let minuto = Number(minutos.textContent)
            
        if(segundo <= 0){
            segundo = 60
           minuto -= 5
            
            minutos.textContent = String(minuto).padStart(2,"0")

        }

        if(minuto <= 0){
            btnPlay.classList.remove('hide')
            btnPause.classList.add('hide')
            btnStop.classList.add('hide')
            btnSet.classList.remove('hide')

            return
        }
        
    }
    decrementar()
})


// CARDS

btnCard1.addEventListener("click",function(){
    console.log('btnCard1 OK')
    Som.funSom1()
})

btnCard2.addEventListener("click",function(){
    console.log('btnCard2 OK')
    Som.funSom2()
})

btnCard3.addEventListener("click",function(){
    console.log('btnCard3 OK')
    Som.funSom3()
})

btnCard4.addEventListener("click",function(){
    console.log('btnCard4 OK')
    Som.funSom4()
})









// DARKMODE
const btn = document.getElementById('btn')

btn.addEventListener('change',(e) => {
    document.body.classList.toggle('dark',e.target.checked)
})
