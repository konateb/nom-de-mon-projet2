
let x = true;
console.log("x: ", typeof x);
const monTableau1 = []; // definir un tableau vide
//ajouter 5 éléments au tableau
for (let i = 0; i < 5; i++) {
  // générer un nombre aléatoire
  let element = Math.floor(Math.random() * 100);
  monTableau1.push(element);
}
console.log("monTableau1: ", monTableau1);
const cb = (e) => {
  return e + e;
};
const monTableau2 = monTableau1.map(cb);
console.log("monTableau2: ",monTableau2);



