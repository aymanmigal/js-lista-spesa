//Array della lista spesa
let list = [
    'Latte',
    'Uova',
    'Farina',
    'Pasta',
    'Verdura',
    'Frutta'

];

// Recupero elemento nel dom che contiene i prodotti
const list_dom = document.getElementById('list');

//Ciclo l'array

let i=0;
while(i<list.length){
    console.log(list[i]);
    i++;
}