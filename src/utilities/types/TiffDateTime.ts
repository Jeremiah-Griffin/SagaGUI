export class TiffDateTime{
  inner: string;

  constructor(date: Date){
    this.inner = date.getFullYear().toString()
    +
      ":"
    +
      this.padLeadingZero(date.getMonth() + 1)
    +
      ":"
    +
      this.padLeadingZero(date.getDate())
    +
      " "
    +
      this.padLeadingZero(date.getHours())
    +
      ":"
    +
      this.padLeadingZero(date.getMinutes())
    +
      ":"
    +
      this.padLeadingZero(date.getSeconds());
  }

  getNormalized(): string{
    return this.inner;
  }

  private padLeadingZero(num: number): string{
    if (num < 10){
      return "0" + num.toString();
    }
    else{
      return num.toString();
    }
  }
}
