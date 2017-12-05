// DAY 17 : Spinlock

export function spinlock(input: number, operations: number) {
  const buffer = [0];
  let operation = 0;
  let currPosition = 0;

  while (operation < operations) {
    const blen = buffer.length;
    operation++;
    currPosition += input;
    while (currPosition >= blen) {
      currPosition -= blen;
    }
    buffer.splice(++currPosition, 0, operation);
  }

  return buffer[currPosition + 1];
}

export function neighbor0(input: number, operations: number) {
  let z = 0;
  let neighbor = 0;
  let pos = 0;

  // tslint:disable-next-line:ban-comma-operator
  for (let i = 1; i < operations; i++ , pos++) {
    pos = (pos + input) % i;
    if (pos === z) {
      neighbor = i;
    }
    if (pos < z) {
      z++;
    }
  }
  return neighbor;
}
