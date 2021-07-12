const rotatedArray = (array,rotation) => 
{
    const len = array.length;
    let newArray = array.splice(len- rot,2);
    let finalArray = newArray.concat(array);
    console.log(finalArray);
}
let arr = [1,2,3,4,5];
let rot = 2;
rotatedArray(arr,rot);