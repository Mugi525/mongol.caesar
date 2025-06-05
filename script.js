const mongolAlphabet = 'абвгдеёжзиыйклмнопрстуүфхцчшщъьэюя';
const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';

function shiftChar(c, key, lang, isEncrypt) {
    const alphabet = lang === 'mn' ? mongolAlphabet : englishAlphabet;
    const isUpper = c === c.toUpperCase();
    const baseChar = c.toLowerCase();

    let idx = alphabet.indexOf(baseChar);
    if (idx === -1) return c;

    if (!isEncrypt) key = -key;

    let newIndex = (idx + key + alphabet.length) % alphabet.length;
    let shifted = alphabet[newIndex];

    return isUpper ? shifted.toUpperCase() : shifted;
}

function processText(isEncrypt) {
    const text = document.getElementById("inputText").value;
    const key = parseInt(document.getElementById("key").value);
    const lang = document.getElementById("language").value;

    if (isNaN(key) || key < 1 || key > 33) {
        alert("Түлхүүр 1-33 хооронд тоо байх ёстой!");
        return;
    }

    let result = '';
    for (let c of text) {
        result += shiftChar(c, key, lang, isEncrypt);
    }

    document.getElementById("outputText").value = result;
}

function encrypt() {
    processText(true);
}

function decrypt() {
    processText(false);
}
