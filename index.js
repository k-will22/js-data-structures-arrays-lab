// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
    drivers.push("Ralph")
}

function destructivelyPrependDriver() { 
    drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver() {
    let drive = [...drivers, "Broom"]
    return drive 
}

function prependDriver() {
    let drive = ["Arnold", ...drivers]
    return drive 
}

function removeLastDriver() { 
    let drive = drivers.slice(0, 2)
    return drive
}

function removeFirstDriver() {
    let drive = drivers.slice(1)
    return drive
}