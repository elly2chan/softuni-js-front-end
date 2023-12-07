function printDNA(length) {

    let sequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G']
  
    for (let i = 0; i < length; i++) {
      if (i % 4 == 0) {
        console.log(`**${sequence[0]}${sequence[1]}**`);
        shiftSequence(sequence);
      } else if (i % 4 == 1) {
        console.log(`*${sequence[0]}--${sequence[1]}*`);
        shiftSequence(sequence);
      } else if (i % 4 == 2) {
        console.log(`${sequence[0]}----${sequence[1]}`);
        shiftSequence(sequence);
      } else if (i % 4 == 3) {
        console.log(`*${sequence[0]}--${sequence[1]}*`);
        shiftSequence(sequence);
      }
    }
  
    function shiftSequence(sequence) {
      const dnaPart = sequence.splice(0, 2);
      sequence = sequence.push(...dnaPart);
    }
  
}
  
printDNA(4);
printDNA(10);
