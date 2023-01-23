const leapYears = function(year) {
    let check1;
    let check2;

    if (year % 4 === 0){
        check1 = true;
    }
    else{
        return false;
    }

    if (year % 100 === 0){
        if (year % 400 === 0)
        {
            check2 =  true;
        }
        else{
            check2 = false;
        }
    }
    else{
        return true;
    }

    if (check2 === false){
        return false;
    }
    else{
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
