let a;
let b;
let result;
let operation;

function onClickNumber(value) {
    if (operation) {
        if (b) {
            b = b + String(value);
        } else {
            b = String(value);
        }
        let tagB = document.getElementById('b');
        tagB.innerHTML = b;
    } else {
        if (a) {
            a = a + String(value);
        } else {
            a = String(value);
        }
        let tagA = document.getElementById('a');
        tagA.innerHTML = a;
    }
}

function onClickOperation(value) {
    operation = value;
    let tagOperation = document.getElementById('operation');
    tagOperation.innerHTML = operation;
}

function onCalculate() {
    if (operation === '+') {
        result = Number(a) + Number(b);
    } else if (operation === '-') {
        result = Number(a) - Number(b);
    } else if (operation === '*') {
        result = Number(a) * Number(b);
    } else if (operation === '/') {
        if (Number(b) === 0) {
            result = NaN;             // zero
        } else {
            result = Number(a) / Number(b);}
        } else if (operation === "%") {
        result = Number(a) / 100 * Number(b);          // %
    }
    let tagResult = document.getElementById('result');
    tagResult.innerHTML = result;
    onClear();
}

function onClear() {
    a = undefined;
    b = undefined;
    operation = undefined;
    let tagA = document.getElementById('a');
    tagA.innerHTML = '';
    let tagB = document.getElementById('b');
    tagB.innerHTML = '';
    let tagOperation = document.getElementById('operation');
    tagOperation.innerHTML = '';
}

const onClearAll = () => {
    onClear();
    result = undefined;
    let tagResult = document.getElementById('result');
    tagResult.innerHTML = '';
}



    
function onClickBack() {
 
}
