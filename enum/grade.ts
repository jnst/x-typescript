enum Grade {
  BRONZE = 1,
  SILVER,
  GOLD,
  Platinum,
  Diamond,
}

// add functions
namespace Grade {
  let _names: string[];
  let _values: number[];
  let _length: number;

  export function names(): string[] {
    if (!_names) {
      _names = Object.keys(Grade).filter(k => typeof Grade[k] === "number")
    }
    return _names;
  }

  export function values(): number[] {
    if (! _values) {
      _values = names().map(name => Grade[name]);
    }
    return _values;
  }

  export function length(): number {
    if (! _length) {
      _length = names().length;
    }
    return _length;
  }
}

export {Grade};
