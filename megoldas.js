function DiakInfo(nev, csoport, tipus) {
    var teljsesNev = nev;
    var teljesCsoport = csoport;
    var teljesTipus = tipus;
    var kiirtszoveg = "";
    if (teljesTipus == false) {
        kiirtszoveg += "Webprogramozó";
    }
    else {
        kiirtszoveg += "Junior Frontend";
    }
    return [teljsesNev, teljesCsoport, kiirtszoveg];
}
var Eredmeny = DiakInfo("Kű Bence", 10, false);
document.write("Első feladat ellenőrzése:" + Eredmeny[0] + "[Team" + Eredmeny[1] + "] - " + Eredmeny[2] + "<hr>");
function szovegesErtekeles(szam) {
    var veglegesErtekeles;
    if (szam == 5) {
        veglegesErtekeles = ["Példás", "Példás"];
    }
    else if (szam == 4) {
        veglegesErtekeles = ["jó", "jó"];
    }
    else if (szam == 3) {
        veglegesErtekeles = ["változó", "változó"];
    }
    else if (szam == 2) {
        veglegesErtekeles = ["hanyag", "hanyag"];
    }
    else {
        veglegesErtekeles = ["bukott", "bukott"];
    }
    return veglegesErtekeles;
}
var szorgalomMagatartasErtekeles = szovegesErtekeles(2);
document.write("Második feladat ellenörzése:[" + szorgalomMagatartasErtekeles[0] + "," + szorgalomMagatartasErtekeles[1] + "]");
