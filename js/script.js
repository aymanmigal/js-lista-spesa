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
    //Creo il nuovo elemento da mettere nel dom
    //Recupero l'elemento creato nel file index in javascript
    //Inserisco e concateno il nuovo elemento all'innerHTML di quello recuperato
    let elemento = document.createElement('li');
    elemento.innerText = list[i];
    list_dom.append(elemento);
    i++;
}