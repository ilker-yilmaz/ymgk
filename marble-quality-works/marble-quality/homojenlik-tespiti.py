def get_syllables(word):
    syllables = []

    """
    Aşağıdaki satır gelen kelimenin ünlü harfler 1, ünsüzler 0 olacak
    şekilde desenini çıkarır.

    Örneğin: arabacı -> 1010101, türkiye -> 010010
    """

    bits = ''.join(['1' if l in 'aeıioöuü' else '0' for l in word])

    """
    Aşağıdaki seperators listesi, yakalanacak desenleri ve desen yakalandığında
    kelimenin hangi pozisyondan kesileceğini tanımlıyor.

    Türkçede kelime içinde iki ünlü arasındaki ünsüz, kendinden sonraki
    ünlüyle hece kurar., yani 101 desenini yakaladığımızda kelimeyi
    bulunduğumuz yerden 1 ileri pozisyondan kesmeliyiz. ('101', 1)

    Kelime içinde yan yana gelen iki ünsüzden ilki kendinden önceki ünlüyle,
    ikincisi kendinden sonraki ünlüyle hece kurar. Bu da demek oluyor ki
    1001 desenini yakaladığımızda kelimeyi bulunduğumuz noktadan 2 ileriden
    kesmeliyiz. ('1001', 2),

    Kelime içinde yan yana gelen üç ünsüz harften ilk ikisi kendinden önceki
    ünlüyle, üçüncüsü kendinden sonraki ünlüyle hece kurar. Yani 10001 desenini
    gördüğümüzde kelimeyi bulunduğumuz yerden 3 ileri pozisyondan kesmemiz
    gerek. ('10001', 3)
    """

    seperators = (
        ('101', 1),
        ('1001', 2),
        ('10001', 3)
    )

    index, cut_start_pos = 0, 0

    # index değerini elimizdeki bitler üzerinde yürütmeye başlıyoruz.
    while index < len(bits):

        """
        Elimizdeki her ayırıcıyı (seperator), bits'in index'inci karakterinden
        itibarent tek tek deneyerek yakalamaya çalışıyoruz.
        """

        for seperator_pattern, seperator_cut_pos in seperators:
            if bits[index:].startswith(seperator_pattern):

                """
                Yakaladığımızda, en son cut_start posizyonundan, bulunduğumuz
                pozisyonun serpator_cut_pos kadar ilerisine kadar bölümü alıp
                syllables sepetine atıyoruz.
                """

                syllables.append(word[cut_start_pos:index + seperator_cut_pos])

                """
                Index'imiz seperator_cut_pos kadar ilerliyor, ve
                cut_start_pos'u index'le aynı yapıyoruz.
                """

                index += seperator_cut_pos
                cut_start_pos = index
                break

        """
        Index ilerliyor, cut_start_pos'da değişiklik yok.
        """

        index += 1

    # Son kalan heceyi elle sepete atıyoruz.
    syllables.append(word[cut_start_pos:])
    return syllables

print(get_syllables(u'araba'))
print(get_syllables(u'biçimine'))
print(get_syllables(u'insanın'))
print(get_syllables(u'karaca'))

print(get_syllables(u'aldı'))
print(get_syllables(u'birlik'))
print(get_syllables(u'sevmek'))

print(get_syllables(u'altlık'))
print(get_syllables(u'türkçe'))
print(get_syllables(u'korkmak'))

# turn the code to kotlin programming language
# https://www.tutorialspoint.com/online_python_to_kotlin_converter.htm

