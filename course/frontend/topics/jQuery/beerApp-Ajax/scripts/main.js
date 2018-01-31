$('#search').click(function (e) {
    e.preventDefault();
    var query = $('input').val();
    $('form').trigger('reset');
    $("#results>li").remove();
    
    //////////////////////////////////////////////77
    
    
    $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
        
        success: function (beers) {
            
            beers.forEach(function (data) {
                
                $("#results").append('<li class="d-block list-unstyled list-group-item "> <a href="" data-toggle="modal" data-target="#myModal" class="listOfBeers font-weight-bold" data-id=' + data.id +'>' + data.name + '</a></li>');
            });
            
            
        }
    });

});
    $(document).on('click', '.listOfBeers', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        
        $.ajax({
            url: "https://quiet-inlet-67115.herokuapp.com/api/beer/" + id,
            
            
            success: function (beer) {
                
                $('.modal-title').text('');
                $('#description').text('');
                
                if (!beer.style.description) {
                    $('.modal-title').append(beer.name);
                    $('#description').append('<img class="mx-auto d-block" src="' + beer.labels.medium + '" alt=""><figcaption class="text-justify">There is no info Available</figcaption>');
                } else if (!beer.labels) {
                    $('.modal-title').append(beer.name);
                    $('#description').append('<img class="mx-auto d-block" src="http://leeshotel.com.au/wp-content/uploads/2015/01/the-pub-with-no-beer-logo.jpg" alt=""><figcaption class="text-justify">' + beer.style.description + '</figcaption >');
                } else {
                    $('.modal-title').append(beer.name);
                    $('#description').append('<img class="mx-auto d-block" src="' + beer.labels.medium +'" alt=""><figcaption class="text-justify">' + beer.style.description + '</figcaption >');
                }
                
            }
        })
        
    });



