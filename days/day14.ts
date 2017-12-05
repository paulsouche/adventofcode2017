// DAY 14: Disk Defragmentation

import { generateStructure, knotHash } from './day10';
import { convertBase } from './utils';

function countGroups(grid: string[]) {
  const str = (x: number, y: number) => x + ',' + y;
  const used = (row: number, col: number) => grid[row][col] === '1';
  const groups = new Map<string, number>();

  function search(row: number, col: number, n: number) {
    groups.set(str(row, col), n);
    [[0, -1], [-1, 0], [0, 1], [1, 0]].forEach(([rowOff, colOff]) => {
      const [newRow, newCol] = [row + rowOff, col + colOff];
      if (newRow >= 0 && newRow < grid.length &&
        newCol >= 0 && newCol < grid.length &&
        !groups.has(str(newRow, newCol)) &&
        used(row, col)) {
        search(row + rowOff, col + colOff, n);
      }
    });
  }

  let grpCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (groups.has(str(row, col))) { continue; }
      if (used(row, col)) {
        search(row, col, grpCount);
        grpCount++;
      }
    }
  }
  return grpCount;
}

export function diskUsage(input: string) {
  let used = '';
  let i: number;
  const grid: string[] = [];
  for (i = 0; i < 128; i++) {
    const line = knotHash(generateStructure(256), `${input}-${i}`)
      .split('')
      .map((d) => convertBase.hex2bin(d).padStart(4, '0'))
      .join('');
    used = used.concat(line);
    grid.push(line);
  }

  return {
    used: used.replace(/0/g, '').length,
    zones: countGroups(grid),
  };
}
