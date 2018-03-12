import React, { Component } from 'react'
import ReactDOM from 'react'
import { NavLink } from 'react-router-dom'
import EditForm from './EditForm';

import usersApi from '../api/userApi'

// import Modal from 'react-modal';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/* class ListUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showList: true,
            editUser: false,
            modal: false,

        }

    }

    onEdit = (id) => {
        this.setState({
            editUser: true,
            // showList: false 

        })
        console.log(this.props)


    }


    toogleModal = () => ({

        modal: !this.state.modal
    })


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

                                <Button className="btn btn-danger" onClick={this.toogleModal}>Delete</Button>

                                <Modal isOpen={this.state.modal} toggle={this.toogleModal} className={this.props.className}>
                                    <ModalHeader toggle={this.toogleModal}>Modal title</ModalHeader>
                                    <ModalBody>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toogleModal}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.toogleModal}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>

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
} */


class ListUsers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            showList: true,
            editUser: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            
        })
    }

    onEdit = (id) => {

        this.setState({
            editUser: true,
        })
    }    

    removeUser = (id, username, password) => {

        console.log(id, username, password)
       /*  usersApi.deleteUser()
        .then(this.setState({
            modal: !this.state.modal
        })) */
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

                            < Button color="danger" onClick={this.toggle} > Delete</Button >
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <form onSubmit={this.removeUser(user.id, user.username, user.password)}> 
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputUsername">Username</label>
                                            <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                        </div>
                                    </form>    
                                </ModalBody>
                                <ModalFooter>
                                        <Button color="primary" type="submit">Delete</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal> 

                            </div>
                        </div>
                    )
                   : null
                }

                 {
                    this.state.editUser ? <EditForm /> : null
                } 




            </div>

        )
    }
}



export default ListUsers


