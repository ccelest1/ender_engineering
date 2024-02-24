class Person {
    name: string;
    age: number;
    hasACar: boolean;

    constructor(name: string, age: number, hasACar: boolean) {
        this.name = name
        this.age = age
        this.hasACar = hasACar
    }
}

/**
 * @param personsArray -> return array of persons objects
 * @return Person -> youngest person with a car
 */

// clear solution
var returnYoungest = function (personsArray: Person[]): Person | string | number[] {
    if (!personsArray) {
        return []
    }
    const hasCars = personsArray.filter((person) => person.hasACar === true)
    if (!hasCars) {
        return 'no users have a car'
    }
    hasCars.sort((person1, person2) => person1.age - person2.age)
    return hasCars[0]
}

// more naive
var returnYoungest2 = function (personsArray: Person[]): Person | string {
    if (!personsArray) {
        return 'no persons'
    }
    let min_person: Person | undefined;
    for (let person of personsArray) {
        if (person.hasACar) {
            if (!min_person || person.age < min_person.age) {
                min_person = person
            } else {
                continue
            }
        }
    }
    if (!min_person) {
        return 'no users own a car'
    }
    return min_person
}

const assert1 = new Person(
    'carl3',
    18,
    true
)

const input1 = (
    [
        new Person('carl', 20, false),
        new Person('carl2', 21, false),
        new Person('carl3', 18, true),
        new Person('carl4', 19, true)
    ]
)

const result1 = returnYoungest(input1)
if (result1 instanceof Person && JSON.stringify(result1) === JSON.stringify(assert1)) {
    console.log('TEST PASSED')
} else {
    console.log(`expected ${JSON.stringify(assert1)}, but got back ${JSON.stringify(result1)}`)
}

const result2 = returnYoungest2(input1)
if (result2 instanceof Person && JSON.stringify(result2) === JSON.stringify(assert1)) {
    console.log('TEST PASSED')
} else {
    console.log(`expected ${JSON.stringify(assert1)}, but got back ${JSON.stringify(result2)}`)
}
