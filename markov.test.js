const markov = require("./markov")


const mm = new markov.MarkovMachine("the cat in the hat");

test( 
    "should generate a string with at least one word",
    () => {
        let text = mm.makeText(50)
        expect( text ).not.toEqual("")
    }
)