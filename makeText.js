/** Command-line tool to generate Markov text. */

const markov = require("./markov")
const fs = require("fs")
const axios = require("axios")

const argv = process.argv;

if( argv[2] == "file" ){
    fs.readFile(argv.pop(), "utf8", (err, sourceText) => {
        if( err ){
            console.error(
                `Error reading ${ err.path }: \nError: ${ err.code }: no such file or directory, ${ err.syscall} ${ err.path }`);
            process.exit(1)
        }
        let mm = new markov.MarkovMachine( sourceText )
        console.log( mm.makeText() )
    })
}

if( argv[2] == "url" ){
    axios.get( argv.pop() )
    .then( (sourceText) => {
        
        let mm = new markov.MarkovMachine( sourceText.data )
        console.log( mm.makeText()  )
    })
    .catch( err => {
        console.error( 
            `Error fetching ${ err.config.url }:
        Error: Request failed with status code ${ err.response.status }` 
        )
        process.exit(1)
    })
}