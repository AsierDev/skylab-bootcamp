$(document).ready(function () {
    "use strict";
    var query;
    var artistId;
    var albumId;
    var songId;

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

// ------- submit form and get artists, pass it to the api and show them on html -------//

    $('form').submit(function (e) {
        e.preventDefault();
        query =$('input').val();
        $('form').trigger('reset');
        console.log(query)

        spotifyApi.searchArtists(query,listResult)
    });

    function listResult(artists) {
        $("#listArtists").empty();

        artists.forEach(function (artist) {
            $("#listArtists").append('<li class="list-group-item"><a href="#" id="artistListed" data-id="' + artist.id + '"  >' + artist.name + '</a></li>')
        });
    };

// ----  on artists click get artist's id, pass it to the api and show albums on html---///////    

    $(document).on('click', '#artistListed',function(e){
        e.preventDefault();
        artistId = $(this).attr("data-id");
        console.log(artistId)
        spotifyApi.retrieveAlbums(artistId, listAlbums)
    });


    function listAlbums(albums) {
        $("#listAlbums").empty();

        albums.forEach(function (album) {
            $("#listAlbums").append('<li class="list-group-item"><a href="#" id="albumListed" data-id="' + album.id + '"  >' + album.name + '</a></li>')
        });
    }

// ----  on albums click get album's id, pass it to the api and show songs in html---///////  

    $(document).on('click', '#albumListed', function (e) {
        e.preventDefault();
        albumId = $(this).attr("data-id");
        console.log(albumId)
        spotifyApi.retrieveTracks(albumId, listSongs)
    })

    function listSongs(songs) {
        $("#listSongs").empty();

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