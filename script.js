const alphabet = "АБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмноöpрстуүфхцчшщъыьэюя ";

function shiftText(text, shift, decrypt = false) {
    const direction = decrypt ? -1 : 1;
    return text.split('').map(char => {
        let index = alphabet.indexOf(char);
        if (index === -1) return char;
        let newIndex = (index + direction * shift + alphabet.length) % alphabet.length;
        return alphabet[newIndex];
    }).join('');
}

function encrypt() {
    const text = document.getElementById('input').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = shiftText(text, shift, false);
    document.getElementById('output').value = result;
}

function decrypt() {
    const text = document.getElementById('input').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = shiftText(text, shift, true);
    document.getElementById('output').value = result;
}
