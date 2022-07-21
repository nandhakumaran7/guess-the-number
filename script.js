const submitbutton = document.getElementById("checkButton")
console.log(submitbutton);
let randomNumber =Math.round(Math.random() * 100);
console.log(randomNumber);
const life= document.getElementById("attemptCount");
const message = document.getElementById("message");
var live=10;
function fun(){
    document.getElementById("myForm").reset();
  } 

submitbutton.onclick = () =>{
    var inputvalue =document.getElementById("textBox").value;
    console.log(inputvalue);
    live--;
    //winning condition
    if(inputvalue==randomNumber){
        location.href = './win.html'
    }
    else if(live === 0){
        location.href = './lose.html'
    }
    else if(inputvalue>randomNumber){
        text = `your guess in too high.${live} lives remaining`;
    }
    else if(inputvalue<randomNumber){
        text = `your guess in too low.${live} lives remaining`;
    }
// console.log(live);
// console.log(Text);
//  message.style.display = "inherit";
message.innerHTML = text;
life.innerHTML = live;

}
