import React, { Component } from 'react'


export class SearchForm extends Component {
    state = {
        inputSearch: ''
    }

    _handleChange = (e) => {
        this.setState({ inputSearch: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()

        const { inputSearch } = this.state

        this.props.onResults(inputSearch)

    }

    render() {
        return (

            <div id="search" className=" row">
                <form 
                className="row justify-content-center col-12" 
                onSubmit={this._handleSubmit}>
                    <input
                        className="form-control form-control-lg mt-5 col-10 text-center text-uppercase font-weight-bold"
                        type="text"
                        onChange={this._handleChange}
                        placeholder="search for an user"
                        required
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