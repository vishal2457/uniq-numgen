interface NumStringInterface {
    value: string;
    seperator: string;
    upgradePrefix?: string;
    pad?: string;
    totalLength?: number;
  }
  
  export class NumService {
   private _value: string = "";
    get value() {        
      const inc = this._num.toString().padStart(this._targetLength, this._pad);
      return `${this._prefix}${this.seperator}${inc}`;
    }
    seperator: string = "";
    private _num!: number;
    private _prefix: string | undefined = undefined;
    private _targetLength!: number;
    private _pad!: string;
  
    constructor({
      value,
      seperator,
      upgradePrefix = undefined,
      pad = "0",
      totalLength = undefined,
    }: NumStringInterface) {
      const [currentPrefix, numberInString] = value.split(seperator);
      this._value = value;
      this.seperator = seperator;
      this._prefix = upgradePrefix || currentPrefix;
      this._targetLength = totalLength || numberInString.length;
      this._num = this.sanitizedNumber(numberInString, pad);
      this._pad = pad;
    }
  
    private sanitizedNumber(value: string, pad: string) {
      const padIsZero = pad === "0";
  
      if (padIsZero) {
        return parseInt(value);
      }
      const re = new RegExp(pad, "g");
      const sliced = value.replace(re, "");
      return parseInt(sliced);
    }
  
    increment() {
      this._num = this._num + 1;
      return this;
    }
  
    decrement() {
        this._num = this._num - 1;
        return this;
    }
  
  }
  