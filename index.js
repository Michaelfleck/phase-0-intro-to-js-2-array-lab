// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    //return cats;
}



function destructivelyPrependCat() {
    cats.unshift("Bob");
    //return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

var cat1 = [];
function appendCat() {
    cat1 = [...cats ,"Broom"];
    return cat1;
}

var cat2 = [];
function prependCat() {
    cat2 = ["Arnold", ...cats];
    return cat2;
}

function removeLastCat() {
    const newcats = cats.slice(0, cats.length -1);
    return newcats;
}

function removeFirstCat() {
    const newcats = cats.slice(1)
    return newcats;
    return cats;
}



