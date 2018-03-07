import React, { Component } from 'react'
import ReactDOM from 'react'
import { NavLink } from 'react-router-dom'
import EditForm from './EditForm';

import Modal from 'react-modal';

class ListUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showList: true,
            editUser: false,
            // showModal: false,

        }

    }

    onEdit = (id) => {
        this.setState({ 
            editUser: true, 
            // showModal: true
        })
        console.log(id)
    }


    render() {
        return (
            <div className="row mt-4 justify-content-center" id="list">

                {(this.state.showList) ?
                    this.props.usersList.map((user) =>
                        <div key={user.id} className="card col-lg-2 m-3 pl-3">
                            <div className="card-body">
                                <h5 className="card-title mx-1">{user.name} {user.surname}</h5>
                                <button type="button"
                                    className="btn btn-success"
                                    onClick={e => {
                                        e.preventDefault()
                                        this.onEdit(user.id)
                                    }}
                                >Edit</button>
                                <button type="button" className="btn btn-danger ml-3">Delete</button>

                            </div>
                        </div>
                    )
                    :
                    undefined
                }

                {
                    (this.state.editUser) ? <EditForm /> : undefined
                }


            </div>
        )
    }
}

export default ListUsers