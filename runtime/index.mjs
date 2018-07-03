import {join, resolve} from 'path'
import pkg from '../package.json'

const divider = () => console.log(Array(79).join('-'))


console.log(`abyssal runtime (${pkg.version})`)
divider();

console.log(`\targv:\t${process.argv[0]}`)
process.argv.slice(1).forEach(arg => console.log(`\t\t${arg}`))

console.log(`\t cwd:\t${process.cwd()}`)

let PRJ_PATH = ''
try {
    PRJ_PATH = resolve(process.argv[2])
} catch (error) {
    console.error("ERROR", "unknown path")
    process.exit(-1)
}

console.log(`\tpath:\t${PRJ_PATH}`)
divider()
