
$(document).ready(function() {
    console.log("ready!");
    
    $("form input").last().click(function (e) {
        e.preventDefault();
        
        $("ul").append('<li>' + $("form input").val() +'<a href="#">✓</a></li>');

        $("form").trigger("reset");
    
        $("a").click( function() {
            $(this).closest("li").remove();
        });
    })
})

