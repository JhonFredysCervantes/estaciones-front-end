import React from 'react';

import Header from './../header';
import Avatar from './../avatar';
import RequestUser from "./../../services/userService";

import './../css/edituser.css';

class EditUser extends React.Component{
    constructor(props){
        super(props);

        this.handleButtonEdit = this.handleButtonEdit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleEditUser = this.handleEditUser.bind(this);

        this.state={
            id : props.id,
            email : props.email,
            name : props.username,
            lastname : props.userlastname,
            password : props.password
        };

    }

    componentDidMount(){ // metodo que se ejecuta inmediatamente despues de ejecutarse render
        // aqui se pueden pedir solicitudes remotas para ingresar información al dom
    }

    componentWillUnmount() {// metodo que se ejecuta una vez de desmonte el componente
        // aqui se pueden liberar recursos
        // delete this.state;
    }

    handleButtonEdit(edit){
        
        var element;

        element = document.getElementById("name");
        element.disabled = edit?false:true;
        element.required = true;

        element = document.getElementById("lastname");
        element.disabled = edit?false:true;
        element.required = true;

        element = document.getElementById("email");
        element.disabled = edit?false:true;
        element.required = true;

        document.getElementById("edit").hidden = edit?true:false;
        document.getElementById("save").hidden = edit?false:true;
        document.getElementById("cancel").hidden = edit?false:true;
    }

    handleOnChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleEditUser(){
        var user = {
            id : this.state.id,
            primerNombre : this.state.name,
            primerApellido : this.state.lastname,
            email : this.state.email,
            password : this.state.password
        };

        if(this.state.password.length<=1){
            alert("Lo sentimos, la contraseña debe tener por lo menos 2 caracteres");
        }else{
            RequestUser.updateUser(user, this.state.id).then(response =>{
                this.setState({
                    name : this.response.primerNombre,
                    lastname : this.response.primerApellido,
                    email : this.response.email
                });
            }).catch(e =>{
                console.log(e);
                alert("ups!, hubo un error");
            });

            this.handleButtonEdit(this,false);

        }
        
    }

    render(){
        return(

            <React.Fragment>
                <header className="App-header">
                    <Header avatar={Avatar}/>
                </header>
            
                <div className="row userInformation">
                    <div className="col-6">

                        <h2>Perfil</h2>

                        <form className="form-group">

                            <label htmlFor="name" className="col-sm-2 col-form-label" >Nombre</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    value={this.state.name}
                                    onChange={this.handleOnChange}
                                    disabled />
                            </div>

                            <label htmlFor="lastname" className="col-sm-2 col-form-label" >Apellido</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastname" 
                                    value={this.state.lastname}
                                    onChange={this.handleOnChange}
                                    disabled />
                            </div>

                            <label htmlFor="email" className="col-sm-2 col-form-label" >Email</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="email" 
                                    value={this.state.email} 
                                    onChange={this.handleOnChange}
                                    disabled/>
                            </div>

                            <button 
                                type="button"
                                id = "edit" 
                                className="btn btn-success" 
                                onClick={() => this.handleButtonEdit(true)}>
                                Editar
                            </button>
                            <button 
                                type="submit" 
                                id = "save"
                                className="btn btn-success"
                                hidden>
                                Guardar
                            </button>
                            <button 
                                type="button" 
                                id = "cancel"
                                className="btn btn-danger"
                                onClick={() => this.handleButtonEdit(false)}
                                hidden>
                                Cancelar
                            </button>
                        </form>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default EditUser;