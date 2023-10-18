// Raccolta di dati

const lastNumber = "21";

const welcome = alert(
  "Ciao utente, benvenuto in 'Password Generator'. clicca su ok per iniziare il processo di generazione della password!"
);
console.log(welcome);

const nome = prompt("Scrivi il tuo nome");
console.log(nome);
const lastName = prompt("Scrivi il tuo cognome");
console.log(lastName);

const color = prompt("Scrivi il tuo colore preferito");
console.log(color);

// Logica del programma
const generatedPassword = nome + lastName + color + lastNumber;
console.log(generatedPassword);

// const message = `La password generata per te è: ${generatedPassword}`;
// console.log(message);

const message = `<h2>Ciao ${nome}!</h2>
<p>Ecco la tua password sicura:
<span>${generatedPassword}</span>
</p>
<p>Usala dappertutto, ${nome}</p>`;

// // Output
document.getElementById("generatedPassword").innerHTML = message;
