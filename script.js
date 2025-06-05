const alphabet = "АБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмноөпрстуүфхцчшщъыьэюя ";
const maxKey = alphabet.length - 1;

function shiftText(text, key, decrypt = false) {
    if (key < 1 || key > maxKey) {
        return `⚠️ Түлхүүрийг 1-ээс ${maxKey} хүртэл бүхэл тоо оруулна уу.`;
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

document.getElementById("encryptBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;
    const key = parseInt(document.getElementById("key").value, 10);
    const output = shiftText(text, key);
    document.getElementById("outputText").value = output;
});

document.getElementById("decryptBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;
    const key = parseInt(document.getElementById("key").value, 10);
    const output = shiftText(text, key, true);
    document.getElementById("outputText").value = output;
});
