// All imports from ./helpers/functions are NOT exported using default
import { sayHi, sayBye, instructor, instructor2, instructor3 } from './helpers/functions';

// Person is exported using default, so we do not need {}.
import Person from './helpers/default'

sayHi()
sayBye()

console.log(instructor)
console.log(instructor2)


const p = new Person('Elie', 'Schoppik')

console.log(Person.isPerson(p))

console.log(p.fullName())