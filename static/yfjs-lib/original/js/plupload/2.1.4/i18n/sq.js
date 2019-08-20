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

// Albanian (sq)
    plupload.addI18n({
        "Stop Upload": "Ndalimi i ngarkimit",
        "Upload URL might be wrong or doesn't exist.": "Ngarkimi i URL-s është i gabuar ose nuk ekziston.",
        "tb": "TB",
        "Size": "Madhësia",
        "Close": "Mbyll",
        "Init error.": "Init gabim.",
        "Add files to the upload queue and click the start button.": "Mbas ngarkimit të dosjeve sipas rradhës duhet të klikoni butonin Start.",
        "Filename": "Emri i dosjes",
        "Image format either wrong or not supported.": "Formati i fotove është i keq ose nuk është i pranueshëm.",
        "Status": "Statusi",
        "HTTP Error.": "HTTP Gabim.",
        "Start Upload": "Nisja e ngarkimit",
        "mb": "MB",
        "kb": "KB",
        "Duplicate file error.": "Gabim i dublikimit të dosjes.",
        "File size error.": "Gabim i madhësisë së dosjes.",
        "N/A": "Nuk është në dispozicion",
        "gb": "GB",
        "Error: Invalid file extension:": "Gabim: përhapja e llojit të dosjes është e pavlefshme:",
        "Select files": "Zhgjidhni dosjet",
        "%s already present in the queue.": "%s tashmë ekziston në list.",
        "File: %s": "Dosje: %s",
        "b": "B",
        "Uploaded %d/%d files": "Dosjet e ngarkuara: %d/%d",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Ngarkimi pranon njëherësh vetëm %d dosje, dosjet e tjera nuk do të jenë të ngarkuara.",
        "%d files queued": "Dosja %d e vendosur në rradhë",
        "File: %s, size: %d, max file size: %d": "Dosje: %s, madhësia: %d, madhësia maximale e dosjes: %d",
        "Drag files here.": "Këtu mund të tërhiqni dosjet",
        "Runtime ran out of available memory.": "Memoria që ishte në dispozicion ka mbaruar.",
        "File count error.": "Gabim në lidhje me numrin e dosjeve.",
        "File extension error.": "Gabim i zgjerimit të dosjes.",
        "Error: File too large:": "Gabim: dosja është shumë e madhe:",
        "Add Files": "Shtoni dosjet"
    });

}));