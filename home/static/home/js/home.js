function textDown(id){
    const element = document.getElementById(id);
    element.style = "transition-duration:1s;transform: translate(0px, 40px);"
}

function textUp(id){
    const element = document.getElementById(id);
    element.style = "transition-duration:1s;transform: translate(0px, 0px);"
}