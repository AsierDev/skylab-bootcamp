/**
 * Spotify API client.
 *
 * @version 1.0.0
 */



let spotifyApi;

(function () {
    "use strict";

    function call(url, token, handleSuccess, handleError, timeout) {
        
        const headers = { Authorization: 'Bearer ' + token }

        fetch(url , { headers })

            .then(res => res.json())
            .then(handleSuccess)
            .catch(handleError)
    }

    spotifyApi = {
        baseUrl: "https://api.spotify.com/v1/",
        token: 'BQAZCJ00Z2S1fOC_e2vVmhAdzZiTucNs2qoVM7RlattrylVX8skGUGNEfYz5T_zFDEAccMihcnJlQgJgxPwYKMyzY5-dgsRFaCmMK-uxKdpTP1PzYZO5JQ-VhPepGNysn4prYiA',
        timeout: 2000,

        /**
         * Searches artists by matching a text.
         *
         * @param {String} query - The text to search.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        searchArtists: function (query, handleResults, handleError) {
            call(
                this.baseUrl + "search?type=artist&q=" + query,
                this.token,
               
                results => handleResults(results.artists.items),
               
                handleError,
                this.timeout
            );
        },

        /**
         * Retrieve albums from an artist (by artist id).
         *
         * @param {String} artistId - The id of the artist to retrieve the albums from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        retrieveAlbums: function (artistId, handleResults, handleError) {
            call(
                this.baseUrl + "artists/" + artistId + "/albums",
                this.token,
                results => handleResults(results.items),
                handleError,
                this.timeout
            );
        },

        /**
         * Retrieve tracks from an album (by album id).
         *
         * @param {String} albumId - The id of the album to retrieve the tracks from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        retrieveTracks: function (albumId, handleResults, handleError) {
            // TODO
            call(
                this.baseUrl + "albums/" + albumId + "/tracks",
                    this.token,
                results => handleResults(results.items),
                    handleError,
                    this.timeout
                )        
        },

        /**
         * Get track from an album (by track id) to play it.
         *
         * @param {String} trackId - The id of the album to retrieve the tracks from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        playTracks: function (trackId, handleResults, handleError) {
            // TODO
            call(
                this.baseUrl + "tracks/" + trackId,
                this.token,
                handleResults,
                handleError,
                this.timeout
            )
        }
    };
})();
