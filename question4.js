let firstNElements = (arr,n ) => {
    let newArray = arr.slice(0,n);
    if( n )
    {
        newArray = arr.slice(0,1);
    }
    return newArray;
} 
console.log(firstNElements([7, 9, 0, -2],1));
console.log(firstNElements([7, 9, 0, -2],6));
console.log(firstNElements([],3));
console.log(firstNElements([7, 9, 0, -2]));