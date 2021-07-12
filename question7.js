let mostFrequent = (arr) => {
    const hashMap = {};
    for (let element of arr) {
        if (!hashMap[element]) {
            hashMap[element] = 0;
        }
        hashMap[element]++;
    }
    let maximum = 0;
    let maximumKey = 0;
    for (let keys in hashMap) {

        if (hashMap[keys] > maximum) {
            maximum = hashMap[keys];
            maximumKey = keys;
        }

    }
    return maximumKey;
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));