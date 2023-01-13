function esUnAnagrama(word1, word2){
    if( word1.toLowerCase() === word2.toLowerCase()) return false

    uno = word1.trim().split('').reverse().join('')

    return uno === word2
}

console.log(esUnAnagrama('menem', 'menem'))