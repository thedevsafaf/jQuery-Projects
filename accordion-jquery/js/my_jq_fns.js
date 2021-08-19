$(document).ready(function(){
    // to set an active tab
    $("#accordion").accordion({
        active:0,
        animate:200,
        classes: {
            // "ui-accordion-header": "ui-corner-top",
            // "ui-accordion-header-collapsed": "ui-corner-all",
            // "ui-accordion-content": "ui-corner-bottom",  
            "ui-dialog": "custom-red"  
        }
    });
})
