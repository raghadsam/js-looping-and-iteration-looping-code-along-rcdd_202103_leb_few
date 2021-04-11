// Code your solutions in this file
function countDown() {
  let i=0;
  while(i<11)
  {
    console.log(i);
    i++;
  }
}
//array=["Ada", "Brendan", "Ali"];

function writeCards(array, eventname){
let messages=[];
  for(let i=0;i<array.length;i++)
  {
    messages.push(`Thank you, ${array[i]}, for the wonderful ${eventname} gift!`);

  }
  return messages;
}
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));
