// Imposto de Renda

let salary = 3000;
let tax;

switch (true) {
  case salary < 1903.99:
    tax = 0;
    break;
  case salary < 2826.66:
    tax = 0.075 * salary - 142.8;
    break;
  case salary < 3751.06:
    tax = 0.15 * salary - 354.8;
    break;
  case salary < 4664.69:
    tax = 0.255 * salary - 636.13;
    break;
  default:
    tax = 0.275 * salary - 869.36;
}

console.log(`IRRF: ${tax}`);