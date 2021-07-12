function checkMissing(array)
{
    for(let i= 1; i <= array.length ;i++)
    {
        if( i != array[i-1])
        {
            let no = i;
            return no;
        }
    }
}
let finalNumber =  (array1,array2) =>
{
    const length1 = array1.length;
    const length2 = array2.length;
    let missingNumber;
    let minimum= Math.min(length1,length2);
    if(minimum === length1)
    {
        array1.sort();
        missingNumber = checkMissing(array1);

    }
    else
    {
        array2.sort();
        missingNumber = checkMissing(array2);
    }
    return missingNumber;
}
let arr1 = [1,4,2,5,3];
let arr2 = [5,4,1,2];
console.log(finalNumber(arr1,arr2));
arr1 = [1,3,4];
arr2 = [6,5,2,1,3];
console.log(finalNumber(arr1,arr2));
