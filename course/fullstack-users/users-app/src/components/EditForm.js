import React, { Component } from 'react'
import ReactDOM from 'react'

import Modal from 'react-modal';

class EditForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: true,

        }

    }

    closeModal = () => {
        
        this.setState= ({
            showModal: false
        })
    }


    render() {
        return (

            
            <Modal isOpen={this.state.showModal} > 
            
            
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputSurname">Surname</label>
                                        <input type="text" className="form-control" id="inputSurname" placeholder="Surname" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputUsername">Username</label>
                                        <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputNewUsername">New Username</label>
                                        <input type="text" className="form-control" id="inputNewUsername" placeholder="New Username" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">New Password</label>
                                        <input type="password" className="form-control" id="inputNewPassword4" placeholder="New Password" />
                                    </div>
                                </div>



                                <button type="submit" className="btn btn-primary">Edit User</button>
                                <button className="btn btn-primary" onClick={this.closeModal}>Cerrar</button>
                            </form>

                       

            </Modal>
                
                
            )
        }        
    
}


export default EditForm
