(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// Dutch (nl)
    plupload.addI18n({
        "Stop Upload": "Stop Upload",
        "Upload URL might be wrong or doesn't exist.": "Upload URL is verkeerd of bestaat niet.",
        "tb": "tb",
        "Size": "Grootte",
        "Close": "Sluiten",
        "Init error.": "Initialisatie error.",
        "Add files to the upload queue and click the start button.": "Voeg bestanden toe aan de wachtrij en druk op 'Start'.",
        "Filename": "Bestandsnaam",
        "Image format either wrong or not supported.": "bestandsextensie is verkeerd of niet ondersteund.",
        "Status": "Status",
        "HTTP Error.": "HTTP Error.",
        "Start Upload": "Start Upload",
        "mb": "mb",
        "kb": "kb",
        "Duplicate file error.": "Bestand bestaat al.",
        "File size error.": "Bestandsgrootte error.",
        "N/A": "Niet beschikbaar",
        "gb": "gb",
        "Error: Invalid file extension:": "Error: Ongeldige bestandsextensie:",
        "Select files": "Selecteer bestand(en):",
        "%s already present in the queue.": "%s is al aan de wachtrij toegevoegd.",
        "File: %s": "Bestand: %s",
        "b": "b",
        "Uploaded %d/%d files": "%d/%d bestanden ge-upload",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Upload accepteert alleen %d bestand(en) tegelijk. Extra bestanden zijn verwijderd.",
        "%d files queued": "%d bestand(en) in de wachtrij",
        "File: %s, size: %d, max file size: %d": "Bestand: %s, grootte: %d, maximale bestandsgrootte: %d",
        "Drag files here.": "Sleep bestanden hierheen.",
        "Runtime ran out of available memory.": "Het maximum bruikbare geheugen is overschreden.",
        "File count error.": "Teveel bestand(en) error.",
        "File extension error.": "Ongeldig bestandsextensie.",
        "Error: File too large:": "Error: Bestand te groot:",
        "Add Files": "Bestand(en) toevoegen"
    });

}));