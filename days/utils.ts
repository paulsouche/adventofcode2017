export interface IConvertBase {
  (num: string | number): { from: (baseFrom: number) => { to: (baseTo: number) => string } };
  bin2dec: (num: string | number) => string;
  bin2hex: (num: string | number) => string;
  dec2bin: (num: string | number) => string;
  dec2hex: (num: string | number) => string;
  hex2bin: (num: string | number) => string;
  hex2dec: (num: string | number) => string;
}

export const convertBase: IConvertBase = Object.assign((num: string | number) => ({
  from: (baseFrom: number) => ({
    to: (baseTo: number) => parseInt(num.toString(), baseFrom).toString(baseTo),
  }),
}),
  {
    // binary to decimal
    bin2dec: (num: string | number) => convertBase(num).from(2).to(10),
    // binary to hexadecimal
    bin2hex: (num: string | number) => convertBase(num).from(2).to(16),
    // decimal to binary
    dec2bin: (num: string | number) => convertBase(num).from(10).to(2),
    // decimal to hexadecimal
    dec2hex: (num: string | number) => convertBase(num).from(10).to(16),
    // hexadecimal to binary
    hex2bin: (num: string | number) => convertBase(num).from(16).to(2),
    // hexadecimal to decimal
    hex2dec: (num: string | number) => convertBase(num).from(16).to(10),
  });
