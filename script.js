function displayDays() {
    let month = Number(document.getElementById("month").value)
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = 'Tháng ' + month +' có 31 ngày'
            document.getElementById("result").innerHTML = result
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            result ='Tháng ' + month +' có 30 ngày'
            document.getElementById("result").innerHTML = result
        break;
        case 2:
            result ='Tháng ' + month +' có 28 hoặc 29 ngày'
            document.getElementById("result").innerHTML = result
    }
}