

function isleapyear(){
    let year = parseInt(document.getElementById("year"))

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        check = true
        } else{
            check = false
        }
}

function centure(){
    let year = parseInt(document.getElementById("year"))

    if (year % 100 == 0) {
        year = Math.floor(year / 100);
        } else {
            year = Math.floor(year / 100) + 1;
        }
}

if (check == true){
    alert('Високосный,' + year)
} else{
    alert('Невисокосный,' + year)}