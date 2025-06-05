const mongolAlphabet = "абвгдеёжзийклмнопрстуүфхцчшщъыьэюя";
const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

function shiftChar(char, key, alphabet, direction = 1) {
  const isUpper = char === char.toUpperCase();
  const lowerChar = char.toLowerCase();
  const index = alphabet.indexOf(lowerChar);

  if (index === -1) return char; // not in alphabet

  const shiftedIndex = (index + direction * key + alphabet.length) % alphabet.length;
  const shiftedChar = alphabet[shiftedIndex];
  return isUpper ? shiftedChar.toUpperCase() : shiftedChar;
}

function processText(text, key, decrypting = false) {
  const lang = document.getElementById("lang").value;
  const alphabet = lang === "mn" ? mongolAlphabet : englishAlphabet;
  const direction = decrypting ? -1 : 1;
  return [...text].map(c => shiftChar(c, key, alphabet, direction)).join('');
}

function encrypt() {
  const text = document.getElementById("inputText").value;
  const key = parseInt(document.getElementById("key").value);
  if (isNaN(key) || key <= 0) {
    alert("Зөв түлхүүрийн тоо оруулна уу (1-26)");
    return;
  }
  const result = processText(text, key, false);
  document.getElementById("result").value = result;
}

function decrypt() {
  const text = document.getElementById("inputText").value;
  const key = parseInt(document.getElementById("key").value);
  if (isNaN(key) || key <= 0) {
    alert("Зөв түлхүүрийн тоо оруулна уу (1-26)");
    return;
  }
  const result = processText(text, key, true);
  document.getElementById("result").value = result;
}
