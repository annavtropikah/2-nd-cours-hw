

    function monthNumber(){
        let number=Number(prompt('Введите номер месяца'));
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
            if (isNaN(number)|| number>12 || number<1 ) {
                alert("Переданный параметр не является номером месяца");
             }
        
           }
   

