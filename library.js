var _ = {
    map: function(arr, callback) {
        result = [];
        for(var i = 0; i < arr.length; i++) {
            result.push(callback(arr[i]));
        }
        return result;
    },

    reduce: function(arr, callback) { 
        let result = 0;
        for(var i = 0; i < arr.length; i++) {
            result = callback(arr[i]) + result;
        }
        return result;
    },

    find: function(arr, callback) {
        for(var i = 0; i < arr.length; i++) {
            if (callback (arr[i]) == true) {
                return (arr[i]);
            }
        }
    },

    filter: function (arr, callback) {
        result = [];
        for(var i = 0; i < arr.length; i++) {
            if (callback (arr[i]) == true) {
                result.push(arr[i]);
        }
    }
    return result;
    },

    reject: function(arr, callback)  {
        result = [];
        for(var i = 0; i < arr.length; i++) {
            if (!callback (arr[i]) == true) {
                result.push(arr[i]);
        }
    }
    return result;
    }
}

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var test1 = _.map([1, 2, 3], function(num){ return num * 3; }); 
console.log(test1); // if things are working right, this will return [3, 6, 9]

var sum = _.reduce([1, 2, 3], function(num){ return num; });
console.log(sum); // if things are working right, this will return 6

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even); // if things are working right, this will return 2

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds); // if things are working right, this will return [1, 3, 5]