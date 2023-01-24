# Proses Number generator
Internal lib for generating unique numbers

## Usage
```
import {NumService} from "proses-numgen";

const newNumber = new NumService({value: 'ORD/000001', seperator: '/' }).increment();
// ORD/000002

const newNumber = new NumService({value: 'ORD/000002', seperator: '/' })..decrement();
// ORD/000001

const newNumber = new NumService({value: 'ORD/000001', seperator: '/', upgradePrefix: 'INV' }).increment();
// INV/000002 

const newNumber = new NumService({value: 'ORD/0', seperator: '/', totalLength: 5 }).increment();
// ORD/00001


const newNumber = new NumService({value: 'ORD/0', seperator: '/', pad: 'x', totalLength: 5 }).increment();
// ORD/xxxx1

```

## Contributing
Any changes or suggestions are welcome. Please discuss the changes before hand.