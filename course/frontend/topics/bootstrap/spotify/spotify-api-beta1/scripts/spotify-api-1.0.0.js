/**
 * Spotify API client.
 *
 * @version 1.0.0
 */
var spotifyApi;
(function () {
    "use strict";

    function call(url, token, handleSuccess, handleError, timeout) {
        $.ajax({
            url: url,
            headers: { Authorization: "Bearer " + token },
            timeout: timeout,
            success: handleSuccess,
            error: handleError
        });
    }

    spotifyApi = {
        baseUrl: "https://api.spotify.com/v1/",

        token:
            "BQD-bq8w-3NdmFU7nlw-c9tN-F61IRPRlBw1trg_Fx-mtdHxp7BIGrTwP2xRQ5rcHyRwhDsQNqyqWA-i0Z5J9QYA_-bv3QSSfM5srMnxurzfL2MzTYzKHFp1iG0gDQgB_NtjpCA",

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
                function (results) {
                    handleResults(results.artists.items);
                },
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
                function (results) {
                    handleResults(results.items);
                },
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
                    function (results) {
                        handleResults(results.items);
                    },
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
