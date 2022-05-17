let nome = prompt('Inserisci il tuo Nome')
let cognome = prompt('Inserisci il tuo Cognome')
let colore = prompt('Inserisci il tuo colore preferito')
const numero = 22
let password = nome + cognome + colore + numero;
console.log(password);


document.getElementById("display").innerHTML = 
`
<h1> La tua password generata è: ${password} </h1>

`;
