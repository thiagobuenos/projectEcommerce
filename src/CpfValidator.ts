// @ts-nocheck
export function validateCpf(cpf) {

  if (!cpf) return false
  cpf = cpf.replace(/\D/g, "");
  if (isInvalidCpf(cpf)) return false;
  if (allDigitTheSame(cpf)) return false;

  const dg1 = calculeDigit(cpf, 10)
  const dg2 = calculeDigit(cpf, 11)
  const actualDigit = extractDigits(cpf);
  const validateDigit = `${dg1}${dg2}`;
  return actualDigit == validateDigit;
}

function calculeDigit(cpf: string, factor) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += digit * factor--;
  }
  const rest = total % 11;
  return (rest < 2) ? 0 : (11 - rest);
}

function isInvalidCpf(cpf: string) {
  return !cpf || cpf.length !== 11;
}
function allDigitTheSame(cpf: string) {
  const [firstDigit] = cpf;
  return [...cpf].every(digit => digit === firstDigit);
}

function extractDigits(cpf: string) {
  return cpf.slice(9);
}



