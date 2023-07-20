
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('One euro to dollar is equal to 1.2', () => {
    let dollarAmount = fromEuroToDollar(3.5);
    expect(dollarAmount).toBe(4.2);
});

test('One dollar to yen is equal 127.9', ()=>{
    let yenAmount = fromDollarToYen(2);
    expect (yenAmount).toBe(255.8);

});
test('One yen to pound is equal to 0.8', ()=>{
    let pountAmount = fromYenToPound (1000);
    expect(pountAmount).toBe(800);
})