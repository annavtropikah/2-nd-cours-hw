//Game1
function monthNumber() {
    let number = Number(prompt('Введите номер месяца'));
    if (number === 1 || number === 2 || number === 12) {
        alert('Зима');
    };
    if (number === 3 || number === 4 || number === 5) {
        alert('Весна');
    };
    if (number === 6 || number === 7 || number === 8) {
        alert('Лето');
    };
    if (number === 9 || number === 10 || number === 11) {
        alert('Осень');
    };
    if (isNaN(number) || number > 12 || number < 1) {
        alert("Переданный параметр не является номером месяца");
    }

}


//Game 2
function rememberWords() {

    const array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        alert(array);
    }
    shuffle(array);

    let firstInp = prompt('Чему равнялся первый элемент массива?');
    let lastInp = prompt('Чему равнялся последний элемент массива?');

    if (firstInp == array[0].toLowerCase() && lastInp == array[arr.length - 1].toLowerCase()) {
        alert('Поздравляем! Это успех!');
    } else if (firstInp.toLowerCase() == array[0].toLowerCase() || lastInp.toLowerCase() == array[arr.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно,но в следующий раз все получится! ');

    };
}
