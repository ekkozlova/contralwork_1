public class CenturyYear {

    public static void main(String[] args) {
        int test = centuryFromYear(1900);
        System.out.println(test);

    }

    static int centuryFromYear(int year) {
        if (year % 100 == 0) {
            year = year / 100;
        } else {
            year = (year / 100) + 1;
        }
        return year;
    }

}



function isLeapYear(year) {
    if (
        year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    )
        console.log(" Input year:", year, "is a Leap Year");
    else
        console.log(
            " Input year:",
            year,
            "is NOT a Leap Year"
        );
}

let inputYear = 2020;
isLeapYear(inputYear);
inputYear = 2023;
isLeapYear(inputYear);






function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}