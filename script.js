//your code here


let band=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
console.log(band,"1st band")

  const newband= band.sort();

console.log(newband,"band")
let ui=document.getElementById('band');
newband.forEach(bandName => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ui.appendChild(liElement);
});




