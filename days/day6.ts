// DAY 6: Memory Reallocation

export const day6Input = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14];

export function memoryReallocation(input: number[]) {
  const map = new Map<string, number>();
  const ilen = input.length;
  let allocations = 0;
  let size: number;

  while (true) {
    const key = input.join();
    if (map.has(key)) {
      size = allocations - (map.get(key) || 0);
      break;
    }
    map.set(key, allocations);
    let i: number;
    let bankIndex = 0;
    let bankMax = Number.NEGATIVE_INFINITY;
    for (i = 0; i < ilen; i++) {
      if (input[i] > bankMax) {
        bankIndex = i;
        bankMax = input[bankIndex];
      }
    }

    let memory = input[bankIndex];
    input[bankIndex] = 0;
    while (memory > 0) {
      bankIndex = (bankIndex + 1) < ilen ? bankIndex + 1 : 0;
      input[bankIndex]++;
      memory--;
    }

    allocations++;
  }
  return { allocations, size };
}
