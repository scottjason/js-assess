if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf( item );
    },

    sum : function(arr) {
        return arr.reduce(function( previous, current, index, arr ){
            return previous + current;
    });
    },
    // this takes accounts for duplicates
    remove : function(arr, item) {
        var results = [];
        for( var i=0; i < arr.length; i++ ){
            if( arr[i] !== item ){
              results.push( arr[i] );
            }
        }
        return results;
    },
// the array is being re-indexed when you do splice, use reverse
    removeWithoutCopy : function(arr, item) {
        for( var i = arr.length; i > 0; i-- ){
            if(arr[i] === item){
                arr.splice(i, 1)
            }
        }
        return arr;
    },
    // can't return push from within return, adds to end
    append : function(arr, item) {
        arr.push( item );
        return arr;

    },
    // again, processing an arr can't happen within the return
    truncate : function(arr) {
        arr.pop();
        return arr;
    },
    // adds to beginning ( oppopsite-ish of append )
    prepend : function(arr, item) {
        arr.unshift( item );
        return arr;
    },
    // curtail means remove first element
    curtail : function(arr) {
        arr.shift()
        return arr;
    },
    // in this case we can process within the return
    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },
    // splice ( indexStart, howManyToRemoveIfAny, elemToAdd)
    // add item at specified location
    insert : function(arr, item, index) {
        arr.splice( index, 0, item );
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for( var i=0; i < arr.length; i++ ){
            if( arr[i] === item ) {
                ++count;
            }
        }
        return count;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
