result = 0
result2 = 0
word = "10'dan küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı: "
word2 = "1000'den küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı: "

for i in range(10):
    if i % 3 == 0 or i % 5 == 0:
        result += i

print(word, result)

for i in range(1000):
    if i % 3 == 0 or i % 5 == 0:
        result2 += i

print(word2, result2)
