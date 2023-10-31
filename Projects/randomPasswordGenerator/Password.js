const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const symbols = "~!@#$%^&*()_+/"

// selectors
const output = document.getElementById("pass-box")
const totalLength = document.getElementById("total-char")
const upper = document.getElementById("upper-case")
const lower = document.getElementById("lower-case")
const numberals = document.getElementById("numbers")
const specialCharacters = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upper.checked) {
        password += getRandomData(upperCase)
    }
    if (lower.checked) {
        password += getRandomData(lowerCase)
    }
    if (numberals.checked) {
        password += getRandomData(numbers)
    }
    if (specialCharacters.checked) {
        password += getRandomData(symbols)
    }
    if (password.length < totalLength.value) {
        return generatePassword(password)
    }

    output.innerText = truncateString(password, totalLength.value);
}


generatePassword();

document.getElementById("btn").addEventListener( "click",function() {
        generatePassword();
    }
)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}