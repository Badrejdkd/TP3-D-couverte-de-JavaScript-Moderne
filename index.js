// ==========================
// TP3 : JavaScript Moderne (ES6+)
// ==========================

// ===== IMPORT MODULE =====
import message, { PI, carre } from "./mathUtils.js";

// ==========================
// Exercice 1 : Variables
// ==========================
var x = 5;
let y = 10;
const z = 15;

x = 20;        // OK
y = 30;        // OK
// z = 40;     // ❌ Erreur : const ne peut pas être réassigné

console.log(x, y, z);

// ==========================
// Exercice 2 : Portée
// ==========================
function testScope() {
  if (true) {
    var a = "var visible partout";
    let b = "let visible seulement ici";
  }
  console.log(a); // OK
  // console.log(b); // ❌ Erreur : b est limité au bloc
}
testScope();

// ==========================
// Exercice 3 : Fonctions
// ==========================
function sayHello(name) {
  return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello("Ali"));
console.log(sayHelloArrow("Sara"));

// ==========================
// Exercice 4 : this
// ==========================
const person = {
  name: "Sara",
  sayHello: function () {
    console.log("Bonjour " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Bonjour " + this.name); // this ≠ objet
  },
};

person.sayHello();       // OK
person.sayHelloArrow(); // undefined

// ==========================
// Import / Export
// ==========================
message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));

// ==========================
// Exercice 5 : Tableaux
// ==========================
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);

// ==========================
// Exercice 6 : map / filter / reduce
// ==========================
const nums = [1, 2, 3, 4, 5];

console.log(nums.map(n => n * 2));              // map
console.log(nums.filter(n => n % 2 === 0));     // filter
console.log(nums.reduce((s, n) => s + n, 0));   // reduce

// ==========================
// Exercice 7 : find / some / every
// ==========================
console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));

// ==========================
// Exercice 8 : Objets & déstructuration
// ==========================
const user = { id: 1, name: "Ali", city: "Rabat" };

const { name, city } = user;
console.log(`${name} habite à ${city}`);

const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);

// ==========================
// Exercice 9 : Promise
// ==========================
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});

p.then(result => console.log(result));

// ==========================
// Exercice 10 : async / await
// ==========================
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}
getUsers();

// ==========================
// Exercice 11 : Template literals
// ==========================
const userName = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${userName}, il est ${hour}h`);

// ==========================
// Exercice 12 : Spread / Rest
// ==========================
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// ==========================
// Exercice 13 : Optional chaining / Nullish
// ==========================
const settings = { theme: null };
console.log(settings.theme ?? "light");

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email);
console.log(user2.address?.city);

// ==========================
// Gestion des produits
// ==========================
const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

const aujourdHui = new Date();

const valides = produits.filter(
  p => new Date(p.expireLe) > aujourdHui
);

const total = valides.reduce((s, p) => s + p.prix, 0);

console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
