function updateText(p1){
    console.log("Mon premier paragraphe !" + p1);
    return "Mon premier paragraphe";
}

let para1 = document.getElementById('p1')
let changeText = updateText();
para1.innerText = changeText;

function updateText2(p2){
    console.log("Mon premier paragraphe !" + p2);
    return "Mon deuxiéme paragraphe";
}

let para2 = document.getElementById('p2')
let changeText2 = updateText2();
para2.innerText = changeText2;

function updateText3(p3){
    console.log("Mon premier paragraphe !" + p3);
    return "Mon troisième paragraphe";
}

let para3 = document.getElementById('p3')
let changeText3 = updateText3();
para3.innerText = changeText3;

function updateText4(p4){
    console.log("Mon premier paragraphe !" + p4);
    return "Mon quatrième paragraphe";
}

let para4 = document.getElementById('p4')
let changeText4 = updateText4();
para4.innerText = changeText4;

function updateText5(p5){
    console.log("Mon premier paragraphe !" + p5);
    return "Mon cinquième paragraphe";
}

let para5 = document.getElementById('p5')
let changeText5 = updateText5();
para5.innerText = changeText5;
