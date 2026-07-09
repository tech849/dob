function calculateDay(){
    var dt = parseInt(document.getElementById("dt").value) || 0;
    var mth = parseInt(document.getElementById("mth").value) || 0;
    var yr = parseInt(document.getElementById("yr").value) || 0;
    var cty = parseInt(document.getElementById("cty").value) || 0;
    var leap = Math.floor(yr/4);
    if(dt<=31){
    if(cty === 2000){
        if(mth<=12){
            if(leap){
                var dayjan = (dt + 0 + 0 + yr + leap + 6) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/17/56/e8/1756e8c12e1ecaa39a1f4eacbadcf1e6.gif' style='width:150px;height:150px;'><br>Day" + dayjan;
            } else {
                var dayjan1 = (dt + 1 + 0 + yr + leap + 6) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/17/56/e8/1756e8c12e1ecaa39a1f4eacbadcf1e6.gif' style='width:150px;height:150px;'><br>Day" + dayjan1;
            }
        } 
        else if(mth === 2){
            if(leap){
                var dayfeb = (dt + 3 + 0 + yr + leap + 6) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUybnZsZzl1ZDRhbHhqajl0cWRqNDlxcmx6dmJkbmpjYThuYnpzeHUxOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t6KdYRhVwKTcc/200w.gif' style='width:150px;height:150px;'><br>Day" + dayfeb;
            } else {
                var dayfeb1 = (dt + 4 + 0 + yr + leap + 6) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUybnZsZzl1ZDRhbHhqajl0cWRqNDlxcmx6dmJkbmpjYThuYnpzeHUxOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t6KdYRhVwKTcc/200w.gif' style='width:150px;height:150px;'><br>Day" + dayfeb1;
            }
        } 
        else if(mth === 3){
            if(leap){
                var daymar = (dt + 4 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/4-odaCiEXeUAAAAC/dancing-coffin-coffin-dance.gif' style='width:150px;height:150px;'><br>Day" + daymar;
            } else {
                var daymar1 = (dt + 4 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/4-odaCiEXeUAAAAC/dancing-coffin-coffin-dance.gif' style='width:150px;height:150px;'><br>Day" + daymar1;
            }
        } 
        else if(mth === 4){
            if(leap){
                var dayapr = (dt + 0 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/n_5WDTk9BvYAAAAM/april-fools.gif' style='width:150px;height:150px;'><br>Day" + dayapr;
            } else {
                var dayapr1 = (dt + 0 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/n_5WDTk9BvYAAAAM/april-fools.gif' style='width:150px;height:150px;'><br>Day" + dayapr1;
            }
        } 
        else if(mth === 5){
            if(leap){
                var daymay = (dt + 2 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/KfYF3hN9UfkAAAAM/oggy-and-the-cockroaches-oggy-and-jack-peeing.gif' style='width:150px;height:150px;'><br>Day" + daymay;
            } else {
                var daymay1 = (dt + 2 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/KfYF3hN9UfkAAAAM/oggy-and-the-cockroaches-oggy-and-jack-peeing.gif' style='width:150px;height:150px;'><br>Day" + daymay1;
            }
        } 
        else if(mth === 6){
            if(leap){
                var dayjun = (dt + 5 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.makeagif.com/media/8-29-2015/cHRAgx.gif' style='width:150px;height:150px;'><br>Day" + dayjun;
            } else {
                var dayjun1 = (dt + 5 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.makeagif.com/media/8-29-2015/cHRAgx.gif' style='width:150px;height:150px;'><br>Day" + dayjun1;
            }
        } 
        else if(mth === 7){
            if(leap){
                var dayjul = (dt + 0 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://www.fantasticmedia.co.uk/wp-content/uploads/2016/05/funny-gif-kid-dancing-pbh2.com_.gif' style='width:150px;height:150px;'><br>Day" + dayjul;
            } else {
                var dayjul1 = (dt + 0 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://www.fantasticmedia.co.uk/wp-content/uploads/2016/05/funny-gif-kid-dancing-pbh2.com_.gif' style='width:150px;height:150px;'><br>Day" + dayjul1;
            }
        } 
        else if(mth === 8){
            if(leap){
                var dayaug = (dt + 3 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/aW_E-EO9smoAAAAM/halloween-happy.gif' style='width:150px;height:150px;'><br>Day" + dayaug;
            } else {
                var dayaug1 = (dt + 3 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://media.tenor.com/aW_E-EO9smoAAAAM/halloween-happy.gif' style='width:150px;height:150px;'><br>Day" + dayaug1;
            }
        } 
        else if(mth === 9){
            if(leap){
                var daysep = (dt + 6 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/af/1b/f7/af1bf75bd5cd04c5ab21dac1ca86cbaf.gif' style='width:150px;height:150px;'><br>Day" + daysep;
            } else {
                var daysep1 = (dt + 6 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/af/1b/f7/af1bf75bd5cd04c5ab21dac1ca86cbaf.gif' style='width:150px;height:150px;'><br>Day" + daysep1;
            }
        } 
        else if(mth === 10){
            if(leap){
                var dayoct = (dt + 1 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/17/56/e8/1756e8c12e1ecaa39a1f4eacbadcf1e6.gif' style='width:150px;height:150px;'><br>Day" + dayoct;
            } else {
                var dayoct1 = (dt + 1 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/17/56/e8/1756e8c12e1ecaa39a1f4eacbadcf1e6.gif' style='width:150px;height:150px;'><br>Day" + dayoct1;
            }
        } 
        else if(mth === 11){
            if(leap){
                var daynov = (dt + 4 + 0 + yr + leap + 6) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/5e/f8/7a/5ef87a0c6bf3c185c00cf88a36b16819.gif' style='width:150px;height:150px;'><br>Day" + daynov;
            } else {
                var daynov1 = (dt + 4 + 0 + yr + leap + 6) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://i.pinimg.com/originals/5e/f8/7a/5ef87a0c6bf3c185c00cf88a36b16819.gif' style='width:150px;height:150px;'><br>Day" + daynov1;
            }
        } 
        else if(mth === 12){
            if(leap){
                var daydec = (dt + 6 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBm8-3kqsqLvJgf2cR0Qr8qJ81Eb7OFfO1rw&s' style='width:150px;height:150px;'><br>Day" + daydec;
            } else {
                var daydec1 = (dt + 6 + 0 + yr + leap + 5) % 7;
                document.getElementById("throwdays").innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBm8-3kqsqLvJgf2cR0Qr8qJ81Eb7OFfO1rw&s' style='width:150px;height:150px;'><br>Day" + daydec1;
            }
        } 
        else {
            document.getElementById("throwdays").innerHTML = "Please enter a valid Month (1-12)";
        }
    } else {
        document.getElementById("throwdays").innerHTML = "Only Century 2000 is supported in this check";
    }
    }
    else{
        document.getElementById("throwdays").innerHTML = "Please enter a valid date";
    }
}
