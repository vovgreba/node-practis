const chance = require('chance').Chance();
const fs = require('fs');


if(fs.existsSync('random-paragraph.txt')) {
  fs.unlinkSync('random-paragraph.txt');
}



let paragraph = '-------------' + chance.sentence( { words: 5 } ) + '-------------\n';

fs.writeFileSync('random-paragraph.txt', paragraph);

paragraph = chance.paragraph() + '-------------\n';
fs.appendFileSync('random-paragraph.txt', paragraph);
paragraph = chance.paragraph();
fs.appendFileSync('random-paragraph.txt', paragraph);

fs.readFile('random-paragraph.txt', 'utf8', (err,data) => {
  if(err) throw err;
  console.log(data);
}) 








