function bracesValid(str) {
    var dict = { 
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }

    var arr = [];

    if(str.length === 0) {
        return true;
    }

    for(var i = 0; i < str.length; i++) {
        if (str[i] === '{' || str[i] === '(' || str[i] === '[' ) {
            arr.push(str[i]);
        }
        else {
            var last = arr.pop();

            if (str[i] !== dict[last]) {
                return false;
            }
        }
    }
    if(arr.length !== 0) {
        return false;
    }
    return true;
}

console.log(bracesValid("{{()}}[]"));