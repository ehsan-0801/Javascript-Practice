const sentence = "This is JavaScript Learning for web development.";
const words = sentence.split(' ');
const withoutE = sentence.split('e')
// console.log(words);
// console.log(withoutE);

const sliceSentence = sentence.slice(4,35);
// console.log(sliceSentence);

const subSentence = sentence.substr(5,15)
console.log(subSentence);
const subSentence2 = sentence.substring(5,15)
console.log(subSentence2);
const fName = 'abc';
const lName = 'def';
const fullName = fName.concat(lName);
console.log(fullName);
const sentenceJoined ='www.'+ words.join("") + ".com";
console.log(sentenceJoined);
