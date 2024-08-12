const dispaly= document.getElementById(cin);
// display.value='';

function appendtodispaly(v) {
    cin.value +=v;
}
function clearDispaly() {
    // display.value='';
    cin.value='';
    
}
function delelast() {
    cin.value=cin.value.slice(0.1);
}function complement() {
    try {
        appendtodispaly('*(-1)');
        cr();
    } catch (error) {
        cin.value='error'
    }
}

function cr() {
    try {
        cin.value=eval(cin.value);
    } catch (error) {
        cin.value='error'
    }
}