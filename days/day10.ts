// DAY 10: Knot Hash

export function generateStructure(length: number) {
  const structure: number[] = [];
  let i: number;
  for (i = 0; i < length; i++) {
    structure.push(i);
  }
  return structure;
}

export const day10TestInput = [3, 4, 1, 5];

export const day10Input = [199, 0, 255, 136, 174, 254, 227, 16, 51, 85, 1, 2, 22, 17, 7, 192];

function pinchAndTwist(arr: number[], pos: number, slice: number) {
  const arrlen = arr.length;
  const twistlen = pos + slice;
  const toTwist: number[] = [];
  let i: number;
  for (i = pos; i < twistlen; i++) {
    toTwist.push(arr[(i < arrlen) ? i : i - arrlen]);
  }
  toTwist.reverse();
  for (i = pos; i < twistlen; i++) {
    arr[(i < arrlen) ? i : i - arrlen] = toTwist[i - pos];
  }
  return arr;
}

function bytesToLengths(input: string) {
  const lengths: number[] = [];
  const ilen = input.length;
  let i: number;
  for (i = 0; i < ilen; i++) {
    lengths.push(input.charCodeAt(i));
  }
  return lengths.concat([17, 31, 73, 47, 23]);
}

function toHexa(input: number) {
  let result = input.toString(16);
  if (result.length < 2) {
    result = `0${result}`;
  }
  return result;
}

export function knotHashSimple(structure: number[], input: number[]) {
  const len = structure.length;
  let currentPosition = 0;
  let skipSize = 0;
  let result = structure;
  input.forEach((length) => {
    result = pinchAndTwist(result, currentPosition, length);
    currentPosition = currentPosition + length + skipSize;
    while (currentPosition >= len) {
      currentPosition -= len;
    }
    skipSize++;
  });

  return result[0] * result[1];
}

export function knotHash(structure: number[], input: string) {
  const len = structure.length;
  const lengths = bytesToLengths(input);
  let currentPosition = 0;
  let skipSize = 0;
  let result = structure;
  let round: number;
  for (round = 0; round < 64; round++) {
    lengths.forEach((length) => {
      result = pinchAndTwist(result, currentPosition, length);
      currentPosition = currentPosition + length + skipSize;
      while (currentPosition >= len) {
        currentPosition -= len;
      }
      skipSize++;
    });
  }

  const denseHash = generateStructure(16)
    .map((index) => {
      const start = index * 16;
      return result
        .slice(start, start + 16)
        // tslint:disable-next-line:no-bitwise
        .reduce((p, n) => p ^ n);
    });

  return denseHash.reduce((p, n) => p.concat(toHexa(n)), '');
}
