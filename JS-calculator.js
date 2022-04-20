let a = '';
let b = '';
let sign = '';
let End = false;


const number = [ '0','1','2','3','4','5','6','7','8','9','.'];
const act = [ '*','/','+','-',];

var screen = document.getElementById('screen');


function clearscreen(){
    var screen = document.getElementById('screen');
    screen.value = "";
    a = '';
    b = '';
    sign = '';
    End = false;
}
module.exports = { clearscreen }

function btn(mark){
    var screen = document.getElementById('screen');
if (number.includes(mark)) {
    if(b === "" && sign ===""){
        a+=mark;

        screen.value = a;
    }
    else if (a!== "" && b!=="" && End === true){
        b = mark;
        End = false;
        screen.value = b;
    }
    else{
        b+= mark;
        screen.value = b;
    }
    return
 }
if(act.includes(mark)){
    sign = mark;
    screen.value = sign;
    return;
}
if(mark === '='){
    switch (sign) {
        case "*":
            a = +a * +b;
            break;
        case "/":
            if(b === "0"){
                screen.value = "error";
                a = '';
                b = '';
                sign = '';
                return;
            }
            a = +a / +b;
            break;
        case "+":
            a = (+a) + (+b);
            break;
        case "-":
            a = +a - +b;
            break;
    }
    End = true;
    screen.value = a;
  }
}
function square(){
b = '';
a = a*a;
screen.value = a;
}


