namespace zufallsGedicht {

    let subjekt: string[] = ["Peter", "Lois", "Stewie", "Brian", "Chris", "Joe"];
    let praedikat: string[] = ["liebt", "hasst", "schaut", "jagt", "wirft", "schlägt"];
    let objekt: string[] = ["Pfannkuchen", "Bier", "Fernsehen", "einen Tennisball", "ein Eichhörnchen", "Meg"];

    

    for (var i = subjekt.length; i > 0; i--) {

        let ausgabe: string = getVerse(subjekt, praedikat, objekt);
        console.log(ausgabe);
    }

    function getVerse (_subjektstelle: string[], _praedikatstelle: string[], _objektstelle: string[]): string {

        let verse: string = "";
        let randomSubjekt: number = Math.floor(Math.random() * _subjektstelle.length);
        let randomPraedikat: number = Math.floor(Math.random() * _praedikatstelle.length);
        let randomObjekt: number = Math.floor(Math.random() * _objektstelle.length);

        verse += subjekt.splice(randomSubjekt, 1) + " ";
        verse += praedikat.splice(randomPraedikat, 1) + " ";
        verse += objekt.splice(randomObjekt, 1) + " ";

        return (verse);
    }

}







