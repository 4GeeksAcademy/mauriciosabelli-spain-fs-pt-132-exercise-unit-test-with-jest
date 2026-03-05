// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);


    // Hago mi comparación (la prueba)
    expect(dollars).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 167,455 Yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1.07);

    // Si 1 dollar son 167.455 yenes, entonces 3.5 dolares debe ser (3.5 * 167.455)
    const expected = 1 * 156.5;

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(expected); 
})

test("156.5 yenes should be 0.87 Pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(156.5);

    // Si 1 dollar son 167.455 yenes, entonces 3.5 dolares debe ser (3.5 * 167.455)
    const expected = 1 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected); 
})