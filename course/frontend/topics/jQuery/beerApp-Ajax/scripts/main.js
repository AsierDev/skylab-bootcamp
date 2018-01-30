$('#search').click(function (e) {
    e.preventDefault();
    var query = $('input').val();
    $('form').trigger('reset');
    console.log(query)
    
    
    $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
        
        success: function (beers) {
            console.log(beers);
            
            $(function () {
                $('[data-toggle="popover"]').popover()
            });

            
            beers.forEach(function(data) {
                
                $("#results").append('<li class="listOfBeers" data-toggle="popover" title="Quick view"  data-placement="bottom" data-content= data.nameDisplay >' + data.name+'</li>');
            });

        }
    });
});

