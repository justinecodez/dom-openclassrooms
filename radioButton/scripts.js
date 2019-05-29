// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

/*
 * CHECKBOX LISTENERS
 */
document.getElementById('sports-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[0].classList.remove('text-secondary');
  }
  else {
    hobbiesResult.children[0].classList.add('text-secondary');
  }
});

document.getElementById('games-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[1].classList.remove('text-secondary');
  }
  else {
    hobbiesResult.children[1].classList.add('text-secondary');
  }
});

document.getElementById('music-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[2].classList.remove('text-secondary');
  }
  else {
    hobbiesResult.children[2].classList.add('text-secondary');
  }
});

const radioButtons = document.getElementsByName('transport-method');
;
for (let i = 0; i < radioButtons.length; i++) {
   radioButtons[i].addEventListener('change',($event)=>{
     transportResult.textContent = $event.target.value;
   });
}

//var x = document.getElementById("mySelect").options[0].text;
 // document.getElementById("demo").innerHTML = x;
 document.getElementById('music-result').textContent = document.getElementById('music-preference').value;

document.getElementById('music-preference').addEventListener('change',($event)=>{
    document.getElementById('music-result').textContent = $event.target.value;
})
