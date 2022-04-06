
function take_input(){// take input from user
    const input = prompt('whats your guess? ');
    return input;
}
function lstUpdate(){//update list with for loop
    for(let i=0; i< word.length; i++){
        if(word[i]==userGuess){
            skeleton[i]=userGuess;
            console.log(`Char ${userGuess} in position ${i}`);
        }
    }
}
function consLst(){//construct list of blanks
    for(let i=0; i<word.length; i++){
        skeleton.push("_");
    }

}
function turn(){//log function to console
    //userGuess = take_input();
    updGuess()
    console.log(`You'r guess: ${userGuess}`);
    lstUpdate();
    console.log(`The character set: ${skeleton}`);
    updDom()
    turns--;
}
/*------------html functions--------------- */
function updGuess(){
    userGuess = document.getElementById('guess').value;
    if ( word.includes(userGuess)){
        console.log(`${userGuess} in word`);
        log = document.getElementById('log');
        log.innerHTML += (`${userGuess} in ${word}`);
    }
}

/* -----------------vars---------------- */
const skeleton = [];//blank word chars list
const word = 'salsa';//word to guess
let turns = 10;//turns left
let userGuess = ""//letter user guess

/* ---------DOM manipulations--------------- */

function updDom(){
    target = document.getElementById('skeleton');
    target.innerHTML = skeleton;
    DomLog();//show logs in DOM
}

function DomLog(){
    let logTar = document.getElementById('log');
    logTar.innerHTML += (`The word was: ${word}`);
}


/* ---------main loop --------- */

consLst();//construct the bare list//wait for btn press to continue
console.log(`turns left: ${turns}`);//end game log
updDom();//update & wait for btn press to continue

//show turns left
//take from words list

/* =======code vault that is not used====== */

// hangman draw
//create new div element 
/* const body = document.body;
const div = document.createElement('div');// in js script but not html
body.appendChild(div);//only now it will go to the html body
div.textContent = "div.textContent; in here!";

const qDiv = document.querySelector("div");

console.log("brought with text content:"+qDiv.textContent);//includes the literal
console.log("brought with innerText: \n"+qDiv.innerText);//only what is seen in the
//--------------------------------------------------------------


/* paragraph = document.createElement("p");
paragraph.innerHTML = "Hello, world";
document.body.append(paragraph);
paragraph.className = "paragraph";

h1Divide = document.createElement("h1");
h1Divide.innerHTML = 'style';
h1Divide.style.color = 'red';
document.body.append(h1Divide);

horizonLine = document.createElement('hr');
document.body.append(horizonLine);
horizonLine.style.color = 'yellow'; */


/* qDiv.innerHTML = "<h2>This was changed innerHTML</h2>";
body.append(div);
body.append(div);
const strong =  document.createElement("strong");
strong.innerText = "hello strong";// more secure
body.append(strong)
strong.id = "strong";
 */ 
// adding the element and content into the DOM

/* // check if char is in word 
function check(){
    const turn_count = False;
    for(let i = 0; i < word.length; i++);{
    //put here a check loop
        if (word[i] == input){
            let turn_count = True;
            skeleton[i]==input;
        }else{
            console.log;
        }
    }
    if (turn_count == True){
        turns--;
    }
} */
/* function lstUpdate(){//update the possible character list
    const char_index = word.indexOf(userGuess);
    if(char_index !== -1){
        skeleton[char_index]=userGuess;
        console.log(`char index is: ${char_index}
and word_index is: ${(word[char_index])}`);
    };
} */

/* const send = function(){
    ev.preventDefault();
    let ret = validate();//validation 
    if(ret){
        document.getElementById('form-user').submit();
    }
    const nameValue = document.getElementById('guess').value;
    console.log(nameValue);
    return(nameValue);
}
 */

/* const init =function(){
    //listen to the submit button
    document.getElementById('button-send').addEventListener('click', send);
} */
