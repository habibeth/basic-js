const sentense = 'I am a good boy';
const rev = sentense.split(' ')
const array = []

for(let i = rev.length-1; i>=0; i--){
    const element = rev[i];
    array.push(element)
}

console.log(array.join(' '))