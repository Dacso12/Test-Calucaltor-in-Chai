let caluclator = {
    add: function (a,b) {
        return a + b 
    },

    subsctreact: function (a,b) {
        return a - b
    },

    multiply: function (a,b) {
        return a * b 
    },
    divide: function (a,b) {
        if (b !==0) {
            return a / b
        } else {
            return "Cannot divide by zero"
        }

    },
    isEven: function (num) {
        return num % 2 === 0
    },
    capitalize: function (str) {
        if (typeof str !== 'string') {
            throw new Error("Input most be a string ")
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export default caluclator