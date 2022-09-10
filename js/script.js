console.log('JS OK!');


/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari. Inoltre emette un messaggio in console con il numero della cella cliccata.
Bonus:
Potete sbizzarrirvi : Ad esempio mettendo i numeri da 1 a 100 in ordine random nelle celle, ma avete massima libertà!
Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

const button = document.getElementById('create-grid-btn');
const grid = document.querySelector('#grid')

button.addEventListener('click', myFunction);

function myFunction() {
    console.log(this);

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.innerHTML += '<div class="cell">' + i + '</div>'
        // return cell;
    }

    let cellsAll = document.querySelectorAll('.cell');

    for (let i = 0; i < cellsAll.length; i++) {
        let cellNumber = parseInt(cellsAll[i]).innerHTML;

        console.log(cellNumber);

        if (cellNumber % 2 === 0) {
            cell.classList.add('even');
        } else {
            cell.classList.add('odd');
        }

    }





}

// function myFunction2() {
// }


//     const gridElement = createGrid();

//     const cellValues = getRandomNumbersArray();

//     //creare celle da 1 a 100
//     for (let index = 0; index < cellValues.length; index++) {
//         const numberToDisplay = cellValues[index];
//         const cellElement = createCell(numberToDisplay);

//         //aggiungo l'elemento alla grid
//         gridElement.append(cellElement);
//     }
// }
// )

// function getRandomNumbersArrayAlternative() {
//     const array = [];
//     for (let index = 1; index <= 100; index++) {
//         array.push[index];

//     }

//     array.sort(function () {
//         const random = Math.round(Math.random());
//         return random === 1 ? 1 : -1
//     })
//     console.log(array);

//     return (array);

// }

// const createGrid = () => {
//     const element = document.getElementById('grid');
//     element.innerHTML = '';
//     return element;
// }

// function isEven(number) {
//     return number % 2 === 0;
// }

// function isOdd(number) {
//     return number % 2 !== 0;
// }