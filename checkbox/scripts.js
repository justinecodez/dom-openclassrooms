// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

document.getElementById("sports-checkbox").addEventListener("change", ($event)=>{
  if($event.target.checked){
    hobbiesResult.children[0].classList.remove('text-secondary')
  }else{
    hobbiesResult.children[0].classList.add('text-secondary')
  }
});

document.getElementById("games-checkbox").addEventListener("change", ($event)=>{
    if($event.target.checked){
      hobbiesResult.children[1].classList.remove('text-secondary')
    }else{
      hobbiesResult.children[1].classList.add('text-secondary')
    }
  });


  document.getElementById("music-checkbox").addEventListener("change", ($event)=>{
    if($event.target.checked){
      hobbiesResult.children[2].classList.remove('text-secondary')
    }else{
      hobbiesResult.children[2].classList.add('text-secondary')
    }
  });



