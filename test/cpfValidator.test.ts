import { validateCpf } from "../src/CpfValidator";

const validCpfs = [
  "987654321-00",
  "714.602.380-01",
  "313.030.210-72",
  "144.796.170-60"

]


test.each(validCpfs)("Deve testar um cpf válido: %s", function (cpf: string) {
  const isValid = validateCpf(cpf);
  expect(isValid).toBeTruthy();
});

const invalidCpfs = [
  "987654321-01",
  "714.602.380-02",
  "313.030.210-73",
  "144.796.170-61",
  "000000000-00",

]
test.each(invalidCpfs)("Deve testar um cpf inválido: %s", function (cpf: string) {
  const isValid = validateCpf(cpf);
  expect(isValid).toBeFalsy();
});

test("Deve testar um cpf undefined: %s", function () {
  const isValid = validateCpf(undefined);
  expect(isValid).toBeFalsy();
});

test("Deve testar um cpf null: %s", function () {
  const isValid = validateCpf(null);
  expect(isValid).toBeFalsy();
});

test("Deve testar um cpf com tamanho errado: %s", function () {
  const isValid = validateCpf("123");
  expect(isValid).toBeFalsy();
});





