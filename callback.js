// Alapműveletek
function osszead(a, b) {
    return a + b;
}

function kivonas(a, b) {
    return a - b;
}

function szorzas(a, b) {
    return a * b;
}

function osztas(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.error('Hibás osztás: a második operandus nem lehet nulla!');
        return undefined; // Hibás esetben undefined értéket adunk vissza
    }
}

// Számoló függvény
function szamol(alapmuvelet, operandus1, operandus2) {
    return alapmuvelet(operandus1, operandus2);
}

// Ellenőrzés
let result = szamol(osszead, 5, 3);
console.log('Az összeadás eredménye: 8, a számolt érték: ' + result);

result = szamol(kivonas, 8, 2);
console.log('A kivonás eredménye: 6, a számolt érték: ' + result);

result = szamol(szorzas, 4, 6);
console.log('A szorzás eredménye: 24, a számolt érték: ' + result);

result = szamol(osztas, 9, 3);
console.log('Az osztás eredménye: 3, a számolt érték: ' + result);
