import React from "react";
import { useNavigate } from "react-router-dom";

class Addcontact extends React.Component{

    state = {
        id:1,
        name:"",
        email:""
    };

 
    

    add = (e) => {

        
        e.preventDefault();
        if(this.state.name === "" && this.state.email === "")
        {
            alert("All Field are Mandatory")
            return;

        }       

        
        this.setState({id:this.state.id+1})
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        
        
        
    }

    render(){
        return(
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <lable>Name</lable>
                        <input type="text" name="name" placeholder="Name" value ={this.state.name}  onChange={(e)=>this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <lable>Email</lable>
                        <input type="text" name="Email" value={this.state.email} placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>
                    <button className="ui button blue"> Add </button>
                </form>
            </div>
        );
    }
}

export default Addcontact;