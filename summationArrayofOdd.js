function summation(number){
    let sum = 0;
    let i;
    for(i=0; i < number.length; i++){
        index = i;
        element = number[i];
        sum = sum + element;
    }
    return sum;
}

function summationArrayofOdd(number) {
    let oddArray = [];
    let evenArray = [];
    for(let i=0; i< number.length; i++ ){
        let index = i;
        let element = number[index];
        if(element % 2 !== 0){
            oddArray.push(element)
        }
        // else{
        //     oddArray.push(element)
        //     // console.log("Odd Number", element)
        // }
        // console.log(i, element);
    }    
    return oddArray;
}

const array= [12, 15, 17, 20, 22, 27, 30, 36, 40, 46, 48, 51, 57]

const oddArray = summationArrayofOdd(array);
const sum = summation(oddArray)
console.log(sum);
