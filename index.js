let display = document.getElementById('display');

// this returns what looks like an Array, we have to make it into an array
// let buttons = document.getElementsByClassName('button');

let buttons = Array.from(document.getElementsByClassName('button'));

// now thats it an array  we can map through it

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                // this makes so that the C clears inputs
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = 'Error!';
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
                // this will add numbers to the display
        }
    });
});
