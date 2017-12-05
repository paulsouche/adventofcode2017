// DAY 13: Packet Scanners

export const day13TestInput = [
  '0: 3',
  '1: 2',
  '4: 4',
  '6: 4',
];

export const day13Input = [
  '0: 3',
  '1: 2',
  '2: 4',
  '4: 4',
  '6: 5',
  '8: 6',
  '10: 6',
  '12: 6',
  '14: 6',
  '16: 8',
  '18: 8',
  '20: 8',
  '22: 8',
  '24: 10',
  '26: 8',
  '28: 8',
  '30: 12',
  '32: 14',
  '34: 12',
  '36: 10',
  '38: 12',
  '40: 12',
  '42: 9',
  '44: 12',
  '46: 12',
  '48: 12',
  '50: 12',
  '52: 14',
  '54: 14',
  '56: 14',
  '58: 12',
  '60: 14',
  '62: 14',
  '64: 12',
  '66: 14',
  '70: 14',
  '72: 14',
  '74: 14',
  '76: 14',
  '80: 18',
  '88: 20',
  '90: 14',
  '98: 17',
];

const firewallLayerRegex = /(\d*)\:\s(\d*)/;

interface ILayer extends Array<number> {
  way: number;
}

function generateLayer(depth: number): ILayer {
  const arr = [1];
  let i = 1;
  while (i < depth) {
    arr.push(0);
    i++;
  }
  // tslint:disable-next-line:prefer-object-spread
  return Object.assign(arr, { way: 1 });
}

function parseInput(input: string[]) {
  const firewallMap = new Map<number, ILayer>();
  let firewallDepth = Number.NEGATIVE_INFINITY;

  input.forEach((layerInput) => {
    const matches = firewallLayerRegex.exec(layerInput);
    if (!matches) {
      throw new Error(`Invalid input ${layerInput}`);
    }
    const layerIndex = parseInt(matches[1], 10);
    firewallDepth = Math.max(firewallDepth, layerIndex + 1);
    firewallMap.set(layerIndex, generateLayer(parseInt(matches[2], 10)));
  });

  return {
    firewallDepth,
    firewallMap,
  };
}

function layerTick(layer: ILayer) {
  const activeIndex = layer.findIndex((i) => i === 1);
  const layerLength = layer.length;
  if (activeIndex < 0) {
    throw new Error(`Invalid layer ${layer.join()}`);
  }
  layer[activeIndex] = 0;
  const nextIndex = activeIndex + layer.way;
  if (nextIndex >= layerLength) {
    layer[layerLength - 2] = 1;
    layer.way = -layer.way;
  } else if (nextIndex < 0) {
    layer[1] = 1;
    layer.way = -layer.way;
  } else {
    layer[nextIndex] = 1;
  }
}

export function firewallSeverity(input: string[]) {
  const { firewallDepth, firewallMap } = parseInput(input);
  const caughtMap: boolean[] = [];
  let layerIndex = 0;
  while (layerIndex < firewallDepth) {
    const layer = firewallMap.get(layerIndex);
    caughtMap.push(!!(layer && layer[0]));
    firewallMap.forEach(layerTick);
    layerIndex++;
  }

  return caughtMap.reduce((p, n, li) => {
    if (n) {
      const layer = firewallMap.get(li);
      p += li * (layer ? layer.length : 0);
    }
    return p;
  }, 0);
}

export function firewallDelay(input: string[]) {
  const { firewallDepth, firewallMap } = parseInput(input);
  const pings = new Map<number, boolean[]>();
  let delay = 0;

  while (true) {
    let pingIndex: number;
    pings.set(delay, []);

    const end = Math.max(delay - firewallDepth + 1, 0);
    for (pingIndex = delay; pingIndex >= end; pingIndex--) {
      const layer = firewallMap.get(delay - pingIndex);
      (pings.get(pingIndex) as boolean[]).push(!!layer && !!layer[0]);
    }

    firewallMap.forEach(layerTick);

    const pingOut = pings.get(delay - firewallDepth);

    if (pingOut && pingOut.every((c) => !c)) {
      break;
    }

    // free memory
    pings.delete(delay - firewallDepth);

    delay++;
  }

  return delay - firewallDepth;
}
