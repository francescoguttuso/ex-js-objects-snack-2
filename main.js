// Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); //  'Double Cheese Burger'
console.log(secondBurger.name); // 'Double Cheese Burger'

/*
Domande:

1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Risposte:

1 Viene stampato in entrambi i casi Double Cheese Burger
2 Abbiamo creato in memoria 1 solo oggetto con due riferimenti che lo puntano

*/

// Code Question 2

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); //'Salad'
console.log(secondBurger.ingredients[0]); //'Salad'

/*
Domande:
P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Risposte:

1 in entrambi i console.log viene stampato 
  sia per il primo che per il secondo oggetto come primo ingrediente Salad
2 Vengono creati 3 oggetti: 'hamburger', 'secondBurger' e un array condiviso 'ingredients'
*/

//Code Question 3

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

/*
Domanda:

1 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Risposta:

1 Sono stati creati 9 oggetti:
 'Hamburger' e i suoi oggetti annidati 'maker' e 'restaurant'
 'secondBurger' e i suoi oggetti annidati 'maker' e 'restaurant'
 'thirdBurger' e i suoi oggetti annidati 'maker' e 'restaurant'
*/

//Code Question 4

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

/*
Domanda:

1 Qual è il metodo migliore per clonare l’oggetto chef, e perché?
2 Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

Risposta:

1 Nell oggetto chef il metodo migliore per clonare l'oggetto è 
  lo spread operator che mi copia anche la funzione contenuta in makeBurger
2 Nell oggetto restaurant il metodo migliore e structuredClone perchè mi fa
  una copia dell'intero oggetto mantenendo Date() come tale essendo un oggetto complesso

*/

//Code Question 5 (Bonus)

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); //Chef Hyur
console.log(secondBurger.maker.name); //Chef Hyur
console.log(hamburger.maker.restaurant.name); //"Hyur's II"
console.log(secondBurger.maker.restaurant.name); //"Hyur's II"

/*
Domanda:

1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Risposta:

1 i risultati dei console.log sono Chef Hyur per i primi due e Hyur's II per gli altri due.
2 Sono stati creati in totale 5 oggetti: 
3 per hamburger, 1 per newRestaurant e uno per secondBurger
 perchè la copia superficiale lascia maker e restaurant come riferimento del primo oggetto 
*/

//Code Question 6 (Bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

/*

Domanda:
1 Qual è il metodo migliore per clonare l’oggetto chef, e perché?

Risposta:
1 Spreed operator è il metodo migliore per copiare questo oggetto che mi permette
  di copiare la proprietà che contiene il riferimento alla funzione, cosa che con structuredClone e 
  JASONparse(JASONstringify()) non posso fare.

*/

/*
🎯 Snack  (Bonus)
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, 
che copia anche i suoi metodi (proprietà che contengono funzioni).
Usa l’oggetto di Code Question 6 come test.
*/

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clone = {};

  for (const key of Object.keys(obj)) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}
const chef2 = deepClone(chef);
console.log(chef2);
