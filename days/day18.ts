// DAY 18: Duet

export const day18TestInput = [
  'set a 1',
  'add a 2',
  'mul a a',
  'mod a 5',
  'snd a',
  'set a 0',
  'rcv a',
  'jgz a -1',
  'set a 1',
  'jgz a -2',
];

export const day18Input = [
  'set i 31',
  'set a 1',
  'mul p 17',
  'jgz p p',
  'mul a 2',
  'add i -1',
  'jgz i -2',
  'add a -1',
  'set i 127',
  'set p 618',
  'mul p 8505',
  'mod p a',
  'mul p 129749',
  'add p 12345',
  'mod p a',
  'set b p',
  'mod b 10000',
  'snd b',
  'add i -1',
  'jgz i -9',
  'jgz a 3',
  'rcv b',
  'jgz b -1',
  'set f 0',
  'set i 126',
  'rcv a',
  'rcv b',
  'set p a',
  'mul p -1',
  'add p b',
  'jgz p 4',
  'snd a',
  'set a b',
  'jgz 1 3',
  'snd b',
  'set f 1',
  'add i -1',
  'jgz i -11',
  'snd a',
  'jgz f -16',
  'jgz a -19',
];

export function duet(input: string[]) {
  const registers = new Map<string, number>();
  let i = 0;
  const sounds: number[] = [];
  let rcv: number | undefined;

  while (i < input.length) {
    const [instruction, variable, value] = input[i].split(' ');
    const prev = registers.get(variable) || 0;
    const mapValue = registers.get(value);
    const instValue = (typeof mapValue === 'number')
      ? mapValue
      : parseInt(value, 10);
    switch (instruction) {
      case 'set':
        registers.set(variable, instValue);
        break;
      case 'add':
        registers.set(variable, prev + instValue);
        break;
      case 'mul':
        registers.set(variable, prev * instValue);
        break;
      case 'mod':
        registers.set(variable, prev % instValue);
        break;
      case 'snd':
        sounds.push(prev);
        break;
      case 'rcv':
        if (prev !== 0) {
          [rcv] = sounds.slice(-1);
        }
        break;
      case 'jgz':
        if (prev > 0) {
          i += instValue - 1;
        }
        break;
      default:
        throw new Error(`Unknown instruction ${instruction}`);
    }
    if (typeof rcv !== 'undefined') {
      break;
    }
    i++;
  }
  return rcv;
}

interface IRegister {
  [key: string]: number;
}

function getVal(rs: IRegister, v: string): number {
  const num = parseInt(v, 10);
  return isNaN(num) ? rs[v] : num;
}

class Program {
  public sent: number;

  private instructions: string[][];
  private id: number;
  private queue: number[];
  private link: Program;
  private registers: IRegister;
  private index: number;

  constructor(id: number, instructions: string[][]) {
    this.sent = 0;
    this.instructions = instructions;
    this.id = id;
    this.queue = [];
    this.registers = { p: id };
    this.index = 0;
  }

  public run() {
    let locked = true;
    const registers = this.registers;

    while (true) {
      const [instruction, variable, value] = this.instructions[this.index];
      switch (instruction) {
        case 'set':
          registers[variable] = getVal(registers, value);
          break;
        case 'add':
          registers[variable] += getVal(registers, value);
          break;
        case 'mul':
          registers[variable] *= getVal(registers, value);
          break;
        case 'mod':
          registers[variable] %= getVal(registers, value);
          break;
        case 'snd':
          this.sent++;
          this.link.queue.push(getVal(registers, variable));
          break;
        case 'rcv':
          if (this.queue.length > 0) {
            registers[variable] = this.queue.shift() as number;
          } else {
            return locked;
          }
          break;
        case 'jgz':
          if (getVal(registers, variable) > 0) {
            this.index += getVal(registers, value) - 1;
          }
          break;
      }
      this.index++;
      locked = false;
    }
  }

  public linkProgram(p: Program) {
    this.link = p;
  }
}

export function duetWithDocumentation(input: string[]) {
  const instructions = input.map((l) => l.split(' '));

  const pA = new Program(0, instructions);
  const pB = new Program(1, instructions);

  pA.linkProgram(pB);
  pB.linkProgram(pA);

  while (true) {
    const aLocked = pA.run();
    const bLocked = pB.run();

    if (aLocked && bLocked) {
      break;
    }
  }
  return pB.sent;
}
