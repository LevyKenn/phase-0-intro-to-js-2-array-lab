<<<<<<< HEAD
// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    return [...cats, name]
}
function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat(name) {
    return cats.slice(0, -1)
}
function removeFirstCat(name) {
    return cats.slice(1)
=======
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
>>>>>>> 0834653 (Completed the lab grade)
}