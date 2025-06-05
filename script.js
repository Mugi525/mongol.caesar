const alphabets = {
    mn: "АБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмноөпрстуүфхцчшщъыьэюя ",
    en: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
};

function getAlphabet() {
    const lang = document.getElementById("language").value;
    return alphabets[lang];
}

function shiftText(text, key, decrypt = false) {
    const alphabet = getAlphabet();
    const maxKey = alphabet.length - 1;

    if (isNaN(key) || key < 1 || key > maxKey) {
        return `⚠️ Түлхүүрийг 1-ээс ${maxKey} хүртэл тоогоор оруулна уу.`;
    }

    let result = "";
    for (let char of text) {
        let index = alphabet.indexOf(char);
        if (index === -1) {
            result += char;
            continue;
        }

        let shiftedIndex = decrypt
            ? (index - key + alphabet.length) % alphabet.length
            : (index + key) % alphabet.length;

        result += alphabet[shiftedIndex];
    }
    return result;
}

function encrypt() {
    const text = document.getElementById("inputText").value;
    const key = parseInt(document.getElementById("key").value);
    const result = shiftText(text, key, false);
    document.getElementById("outputText").value = result;
}

function decrypt() {
    const text = document.getElementById("inputText").value;
    const key = parseInt(document.getElementById("key").value);
    const result = shiftText(text, key, true);
    document.getElementById("outputText").value = result;
}
