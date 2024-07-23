// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(cat) {
    cats.push(cat)
}
function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}
function destructivelyRemoveLastCat(cat) {
    cats.pop(cat)
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(cat) {
    return cats.concat(cat)
}
const newArray = appendCat("bett")

function prependCat(cat) {
    return [cat].concat(cats)
}
const newCatsPrepend = prependCat('locks')

function removeLastCat() {
    return cats.slice(0, -1)
}
const newCatsRemoveLast = removeLastCat()

function removeFirstCat() {
    return cats.slice(1)
}
const newCatsRemoveFirst = removeFirstCat()