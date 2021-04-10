/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {

    this.chains = this.words.reduce( ( chains, word, index, words ) => {
      if( chains[ word ] ){
        chains[ word ].push( words[ index + 1 ] )
      }
      else{
        chains[ word ] = [ words[ index + 1 ] ]
      }
      return chains
    }, {})
  }

  addLink


  /** return random text from chains */

  makeText(numWords = 100) {

    let word = this.words[Math.floor( (Math.random() * this.words.length ) )];
    let text = ""

    while( numWords && word ){
      
      --numWords
      text = text.concat( word + " " )
      word = this.chains[ word ][
        Math.floor( (Math.random() * this.chains[ word ].length ) )
      ]; 
    }

    return text
  }
}
