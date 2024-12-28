


let username = document.getElementById("username")
let username1 = document.getElementById("username1")
let getname  = prompt('Enter Name')
    username.innerHTML = getname
    username1.innerHTML = getname

let userscore = document.getElementById('userscore')
let comscore = document.getElementById('comscore')
let drawscore = document.getElementById('drawscore')

let usercounter = 0
let comcounter = 0
let draw=0

let userpopupwin = document.getElementById('userpopupwin')
let userpopuplose = document.getElementById('userpopuplose')
let userpopupdraw = document.getElementById('userpopupdraw')
let backgame = document.getElementById('backtogame')

function userans(useranswer){

    let option = Math.round(Math.random()*2)
    console.log(option);

    let com_ans = ['rock','paper','scissors'][option]
    console.log(com_ans);

    let userchoose = document.getElementById('userchoose')
    let comchoose = document.getElementById('comchoose')

    console.log(useranswer);
    userchoose.innerHTML = useranswer
    console.log(userchoose.innerHTML);

    comchoose.innerHTML= com_ans    
    setTimeout(()=>{
        if(useranswer==com_ans){
            backgame.style.display= "none"
            userpopupdraw.style.display= 'block'
            draw++
        }else if(useranswer=='rock' && com_ans=='scissors'){
            backgame.style.display= "none"
            userpopupwin.style.display= 'block'
            usercounter++
        }else if(useranswer=='scissors' && com_ans=='paper'){
            backgame.style.display= "none"
            userpopupwin.style.display= 'block'
            usercounter++
        }else if(useranswer=='paper' && com_ans=='rock'){
            backgame.style.display= "none"
            userpopupwin.style.display= 'block'
            usercounter++
        }else if(com_ans=='rock' && useranswer=='scissors'){
            backgame.style.display= "none"
            userpopuplose.style.display= 'block'
            comcounter++
        }else if(com_ans=='scissors' && useranswer=='paper'){
            backgame.style.display= "none"
            userpopuplose.style.display= 'block'
            comcounter++
        }else if(com_ans=='paper' && useranswer=='rock'){
            backgame.style.display= "none"
            userpopuplose.style.display= 'block'
            comcounter++
        }
        userscore.innerHTML=usercounter
        comscore.innerHTML=comcounter
        drawscore.innerHTML=draw
        userscore.style.color = 'green'
        comscore.style.color = 'red'
        drawscore.style.color = 'blue'
    },2000)
userpopupwin.style.display= 'none'
userpopuplose.style.display= 'none'
userpopupdraw.style.display= 'none'
}

function playagain(){
    
    userpopupwin.style.display= 'none'
    userpopuplose.style.display= 'none'
    userpopupdraw.style.display= 'none'
    backgame.style.display= "block"
    return
}

