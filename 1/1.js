let result = 0;
let result2 = 0;
let word =
  "10'dan küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı: ";
let word2 =
  "1000'den küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı: ";

for (i = 0; i < 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    result += i;
  }
}

console.log(word + result);

for (i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    result2 += i;
  }
}

console.log(word2 + result2);
