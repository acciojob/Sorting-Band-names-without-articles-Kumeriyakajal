//your code here

let band=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']

band=band.sort();

console.log(band)
let ui=document.getElementById('band');
ui.innerHtml=`
 {
 ${band}.map((each)=>{
 <li>${each}</li>
 })
 }
`