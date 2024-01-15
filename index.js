function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    let namedFunction = function() {

    }

    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}