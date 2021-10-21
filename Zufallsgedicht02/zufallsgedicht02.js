"use strict";
var zufallsGedicht;
(function (zufallsGedicht) {
    let subjekt = ["Peter", "Lois", "Stewie", "Brian", "Chris", "Joe"];
    let praedikat = ["liebt", "hasst", "schaut", "jagt", "wirft", "schlägt"];
    let objekt = ["Pfannkuchen", "Bier", "Fernsehen", "einen Tennisball", "ein Eichhörnchen", "Meg"];
    for (var i = subjekt.length; i > 0; i--) {
        let ausgabe = getVerse(subjekt, praedikat, objekt);
        console.log(ausgabe);
    }
    function getVerse(_subjektstelle, _praedikatstelle, _objektstelle) {
        let verse = "";
        let randomSubjekt = Math.floor(Math.random() * _subjektstelle.length);
        let randomPraedikat = Math.floor(Math.random() * _praedikatstelle.length);
        let randomObjekt = Math.floor(Math.random() * _objektstelle.length);
        verse += subjekt.splice(randomSubjekt, 1)[0] + " ";
        verse += praedikat.splice(randomPraedikat, 1)[0] + " ";
        verse += objekt.splice(randomObjekt, 1)[0] + " ";
        return (verse);
    }
})(zufallsGedicht || (zufallsGedicht = {}));
//# sourceMappingURL=zufallsgedicht02.js.map