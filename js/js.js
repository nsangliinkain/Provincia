var provincie = {
    "Parma" : ["Albareto", "Berceto", "Collecchio", "Felino", "Langhirano", "Montechiarugolo", "Noceto", "Parma", "Roccabianca", "San Secondo Parmense", "Sorbolo Mezzani", "Torrile"],
    "Piacenza" : ["Agazzano", "Bobbio", "Caorso", "Fiorenzuola", "Gropparello", "Morfasso", "Ottone", "Piacenza", "Rottofreno", "San Giorgio di Piacentino", "Travo", "Villanova", "Ziano Piacentino"], 
}

window.onload = function (){
    var provincia = document.getElementById("pro");
    var comune = document.getElementById("com");

    for (var x in provincie) {
        provincia.options[provincia.options.length] = new Option(x, x);
    }
    provincia.onchange = function() {
        comune.length = 1;
        var prov = provincie[this.value];
        for (var y in prov) {
            comune.options[comune.options.length] = new Option(prov[y], prov[y]);
        }
    }
}