const alphabet = "абвгдеёжзиыйклмнопрстуүфхцчшщъьэюя";

function encrypt() {
    const input = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    document.getElementById("outputText").value = caesar(input, shift);
}

function decrypt() {
    const input = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    document.getElementById("outputText").value = caesar(input, -shift);
}

function caesar(text, shift) {
    return text.split('').map(char => {
        const lowerChar = char.toLowerCase();
        const isUpperCase = char !== lowerChar;
        const index = alphabet.indexOf(lowerChar);
        if (index === -1) return char;

        let newIndex = (index + shift + alphabet.length) % alphabet.length;
        let resultChar = alphabet[newIndex];
        return isUpperCase ? resultChar.toUpperCase() : resultChar;
    }).join('');
}
