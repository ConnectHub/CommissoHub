export class ValidateCpf {
  constructor(private readonly cpf: string) {}

  validate(): boolean {
    if (!this.cpf) return false;
    if (this.cpf.length !== 11) return false;

    const cpfArray = this.cpf.split('').map((digit) => parseInt(digit));

    if (this.allDigitsAreEqual(cpfArray)) return false;

    const firstDigit = this.calculateFirstDigit(cpfArray);
    const secondDigit = this.calculateSecondDigit(cpfArray);

    return this.cpf === `${firstDigit}${secondDigit}`;
  }

  private allDigitsAreEqual(cpfArray: number[]): boolean {
    return cpfArray.every((digit) => digit === cpfArray[0]);
  }

  private calculateFirstDigit(cpfArray: number[]): number {
    const sum = cpfArray
      .slice(0, 9)
      .map((digit, index) => digit * (10 - index))
      .reduce((a, b) => a + b);

    const rest = sum % 11;

    return rest < 2 ? 0 : 11 - rest;
  }

  private calculateSecondDigit(cpfArray: number[]): number {
    const sum = cpfArray
      .slice(0, 10)
      .map((digit, index) => digit * (11 - index))
      .reduce((a, b) => a + b);

    const rest = sum % 11;

    return rest < 2 ? 0 : 11 - rest;
  }
}
