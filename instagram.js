'use strict';

let btn = document.getElementById("botaoLogin");

let checkPassword = (e) => {
    if(e.value.length>=6){
       btn.style.backgroundColor = "rgba(0, 149, 246, 1)";
    }else{
        btn.style.backgroundColor = "rgba(0, 149, 246, 0.4)";
    }

}   