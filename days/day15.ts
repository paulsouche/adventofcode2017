// DAY 15: Dueling Generators

const factorA = 16807;
const factorB = 48271;
const rem = 2147483647;
const next = (val: number, factor: number, div: number): number =>
  // tslint:disable-next-line:no-conditional-assignment
  (val = (val * factor % rem)) % div ? next(val, factor, div) : val;

// part one
export function judge(startA: number, startB: number, divA = 1, divB = 1, times = 40000000) {
  let c = 0;
  for (let i = 0; i < times; i++) {
    startA = next(startA, factorA, divA);
    startB = next(startB, factorB, divB);
    // tslint:disable-next-line:no-bitwise
    c += ((startA & 0xFFFF) === (startB & 0xFFFF)) ? 1 : 0;
  }
  return c;
}
