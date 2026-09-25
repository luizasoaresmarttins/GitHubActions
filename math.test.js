// math.test.js
const { somar, subtrair } = require('./math');

test('deve somar 2 + 3 e retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('deve subtrair 5 - 2 e retornar 3', () => {
  expect(subtrair(5, 2)).toBe(3);
});