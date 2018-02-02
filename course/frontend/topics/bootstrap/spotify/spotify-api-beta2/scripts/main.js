$(document).ready(function () {
    "use strict";
    var query;
    var artistId;
    var albumId;
    var songId;

    $("#listArtists, #listAlbums, #listSongs").hide();

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

// ------- submit form and get artists, pass it to the api and show them on html -------//

    $('form').submit(function (e) {
        e.preventDefault();
        query =$('input').val();
        $('form').trigger('reset');
        console.log(query)
        $("#listArtists").show();
        $("#listAlbums, #listSongs").hide();
        spotifyApi.searchArtists(query,listResult)
    });
    
    function listResult(artists) {
        $("#listArtists").empty();
        console.log(artists)
        artists.forEach(function (artist) {
                
            if (artist.images.length<1) {
                $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed" data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="http://vectorlogofree.com/wp-content/uploads/2014/03/49097-spotify-logo-icon-vector-icon-vector-eps.png" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>')
            } else {
                
                $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed" data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="' + artist.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>')
            }

        });
        

    };

// ----  on artists click get artist's id, pass it to the api and show albums on html---///////    

    $(document).on('click', '#artistListed',function(e){
        e.preventDefault();
        artistId = $(this).attr("data-id");
        console.log(artistId)
        $("#listArtists").hide();
        $("#listAlbums").show();
        spotifyApi.retrieveAlbums(artistId, listAlbums)
    });


    function listAlbums(albums) {
        $("#listAlbums").empty();

        console.log(albums)

        albums.forEach(function (album) {

            if (album.images.length < 1) {
                $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="http://vectorlogofree.com/wp-content/uploads/2014/03/49097-spotify-logo-icon-vector-icon-vector-eps.png" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>')
            } else {

                $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="' + album.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + album.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>')
            }
        });
    }

// ----  on albums click get album's id, pass it to the api and show songs in html---///////  

    $(document).on('click', '#albumListed', function (e) {
        e.preventDefault();
        albumId = $(this).attr("data-id");
        console.log(albumId)
        $("#listAlbums").hide();
        $("#listSongs").show();
        spotifyApi.retrieveTracks(albumId, listSongs)
    })

    function listSongs(songs) {
        $("#listSongs").empty();

        console.log(songs)

        songs.forEach(function (song) {
            $("#listSongs").append('<li class="list-group-item"><a href="#" id="songListed" data-id="' + song.id + '"  >' + song.name + '</a></li>')
            // console.log(song.id)
        })    
    }

    /// ----- Click on a track will open player --///

    $(document).on('click', '#songListed', function (e) {
        e.preventDefault();
        songId = $(this).attr("data-id");
        console.log(songId)
        spotifyApi.playTracks(songId, player)
    });

   function player(track) {
        console.log(track)
       $(".modal-body").append('<audio controls> <source src="'+track.preview_url+'"></audio>')
        $("#myPlayer").modal('show');



    } 




})