function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i));
        }
    } else {
        for (let key in collection) {
            result.push(callback(collection[key], key));
        }
    }
    return result;
}

function myReduce(collection, callback, value) {
    let acc = value ? value : 0;
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        for (let key in collection) {
            acc = callback(acc, collection[key], key);
        }
    }
    return acc;
}

function myFind(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i])) {
                return collection[i];
            }
        }
    } else {
        for (let key in collection) {
            if (callback(collection[key])) {
                return collection[key];
            }
        }
    }
}

function myFilter(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i], i)) {
                result.push(collection[i]);
            }
        }
    } else {
        for (let key in collection) {
            if (callback(collection[key], key)) {
                result.push(collection[key]);
            }
        }
    }
    return result;
}

function mySize(collection) {
    return (Array.isArray(collection)) ? collection.length : Object.keys(collection).length;
}

function myFirst(collection, n = 1) {
    return (n === 1) ? collection[0] : collection.slice(0, n);
}

function myLast(collection, n = 1) {
    return (n === 1) ? collection[collection.length - 1] : collection.slice(Math.max(collection.length - n, 0));
}

const myKeys = (object) => Reflect.ownKeys(object);

const myValues = (object) => Object.values(object);

myEach([1, 2, 3], console.log);
myEach({one: 1, two: 2, three: 3}, console.log);
console.log(myMap([1, 2, 3], function(num){ return num * 3; }));
console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));
console.log(myReduce([1, 2, 3], function (acc, val, collection) { return acc + val; }));
console.log(myReduce({ one: 1, two: 2, three: 3 }, function (acc, val, collection) { return acc + val; }));
console.log(myFind([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; }));
console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }));
console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }));
console.log(mySize({ one: 1, two: 2, three: 3 }));
console.log(mySize([]));
console.log(myFirst([5, 4, 3, 2, 1]));
console.log(myFirst([5, 4, 3, 2, 1], 3));
console.log(myLast([5, 4, 3, 2, 1]));
console.log(myLast([5, 4, 3, 2, 1], 3));
console.log(myKeys({one: 1, two: 2, three: 3}));
console.log(myValues({one: 1, two: 2, three: 3}));