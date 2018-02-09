'use strict'

class SpotyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            artists: [],
            albums: [],
            songs: []
        }
    }



    fixResultsWithoutPictures(sourceData) {
        for (let i = 0; i < sourceData.length; i++) {
            for (let prop in sourceData[i]) {
                if (sourceData[i].images.length === 0) {
                    // si el item no tiene imágenes, le establezco una por defecto 
                    sourceData[i].images.push({ height: 600, url: "img/noImage.jpg", width: 600 });
                }
            }
        }
        return sourceData;
    }



    fetchArtists = (query) => {
        spotifyApi.searchArtists(query)
            .then((listOfArtists) => {
                let images = this.fixResultsWithoutPictures(listOfArtists)
                this.setState({
                    artists: images
                })
            })
            .catch(err => console.error("err -->", err))
    }

    fetchAlbums = artistID => {

    }


    render() {
        return (
            <div>
                <nav className="navbar py-3">
                    <a href="#"> <img src="img\Spotify_Logo_RGB_White.png" width={150} height={50} className="d-inline-block align-top ml-2" /> </a>
                    <span className="navbar-brand mx-auto">Find your favorite music</span>
                </nav>
                <main className="container-fluid">

                    <SearchInput onSubmit={this.fetchArtists} />

                    <section className="container-fluid col-12">

                        <ListArtists onFetchArtists={this.fetchArtists} artists={this.state.artists} />


                        <div id="listAlbums" className=" card-columns">
                        </div>
                        <div id="listSongs" className=" card-columns">
                        </div>
                        <div id="error">
                        </div>
                        <div className="modal fade" id="myPlayer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-center" data-dismiss="modal" id="exampleModalLongTitle" />
                                    </div>
                                    <div id="player" className="d-flex justify-content-center" />
                                    <div className="modal-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>


        )
    }

}





class SearchInput extends React.Component {

    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    keepInput = query => this.setState({ query })

    submit = () => {
        this.props.onSubmit(this.state.query)

        this.setState({ query: '' })
    }




    render() {

        return (

            <div id="search" className=" row">
                <form className="row justify-content-center col-12" onSubmit={e => { e.preventDefault(); this.submit() }}>
                    <input className="form-control form-control-lg mt-5 col-10 text-center text-uppercase font-weight-bold" type="text" placeholder="search for an artist" required autoFocus onChange={(e) => this.keepInput(e.target.value)} value={this.state.query} />

                    <input className="btn-success btn-block rounded my-4 py-3 col-6 col align-self-center button" type="submit" defaultValue="Search" />
                </form>
                <button type="button" id="backToArtists" className="btn btn-success mx-auto rounded mb-3 button">Back to artists</button>
            </div>
        )
    }

}

class ListArtists extends React.Component {

    
    render() {
        
        const artists = this.props.artists
        
        console.log(this.props.artists)

        
        
        return (

            <div id="listArtists" className=" card-columns">
                
                {artists.map(artist => 
                
                <div className="card col" key={artist.id} onClick>
                
                <div className="hovereffect"><a href="#" className="text-center font-weight-bold text-light" id="artistListed" > <img className="card-img-top img-fluid" src={artist.images[0].url}  alt="artist picture" /><div className="card-body overlay"><h5 className="card-title"> {artist.name} </h5><span className="info">Show Albums</span></div></a></div></div>


            )}
    
    
            </div>
        )
    }


}




ReactDOM.render(<SpotyApp />,
    document.getElementById('root'))