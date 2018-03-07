import React, { Component } from 'react'


class SearchForm extends Component {
    state = {
        query: ''
    }

    _handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()

        const { query } = this.state
        this.props.onResults(query)

        this.setState({ query: '' })

    }

    render() {
        return (

            <div id="search" className=" row">
                <form 
                className="row justify-content-center col-12" 
                onSubmit={this._handleSubmit}>
                    <input
                        className="form-control mt-5 col-sm-10 text-center text-uppercase font-weight-bold"
                        type="text"
                        onChange={this._handleChange}
                        placeholder="search for an user"
                        autoFocus />
                    <input
                        className="btn-primary btn-block rounded my-4 py-3 col-6 col align-self-center button"
                        type="submit"
                        defaultValue="Search" />
                </form>
            </div>
        )
    }
}

export default SearchForm