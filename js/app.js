let bodyArea=document.querySelector('.box')
let heading=document.querySelector('.box h2')
let button=document.querySelector('.box button')
let sunIcon=document.querySelector('.box button .sun_icon')
let moonIcon=document.querySelector('.box button .moon_icon')
let darkModeValue=false
button.addEventListener('click', modechange)
function modechange(){
    darkModeValue =! darkModeValue
    bodyArea.classList.toggle('darkMode')
    if(darkModeValue == true){
        heading.innerText="Dark Mode"
        sunIcon.style.marginTop='-40px'
    }
    else{
            heading.innerText="Light Mode"
            sunIcon.style.marginTop='0px'
    }

}
