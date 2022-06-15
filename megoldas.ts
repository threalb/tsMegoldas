function DiakInfo(nev: string,csoport:number,tipus:boolean): [string, number,string] {
  let teljsesNev=nev;
  let teljesCsoport=csoport;
  let teljesTipus=tipus;
  let kiirtszoveg="";
  if(teljesTipus==false){
    kiirtszoveg+="Webprogramozó";
  }else{
    kiirtszoveg+="Junior Frontend";
  }

 return [teljsesNev,teljesCsoport,kiirtszoveg];
}
var Eredmeny: [string, number,string] = DiakInfo("Kű Bence",10,false);
document.write("Első feladat ellenőrzése:" + Eredmeny[0]+"[Team"+Eredmeny[1]+"] - "+Eredmeny[2]+"<hr>");


function szovegesErtekeles(szam: number): [string, string] {
  var veglegesErtekeles:[string,string]
  if (szam == 5) {
    veglegesErtekeles = ["Példás","Példás"];
  }
  else if (szam == 4) {
    veglegesErtekeles =["jó","jó"] ;
  }
  else if (szam == 3) {
    veglegesErtekeles = ["változó","változó"];
  }
  else if (szam == 2) {
    veglegesErtekeles =[ "hanyag", "hanyag"];
  }
  else {
    veglegesErtekeles = ["bukott","bukott"];
  }
  return veglegesErtekeles;
}
var szorgalomMagatartasErtekeles:[string,string]=szovegesErtekeles(2);
document.write("Második feladat ellenörzése:["+szorgalomMagatartasErtekeles[0]+","+szorgalomMagatartasErtekeles[1]+"]")