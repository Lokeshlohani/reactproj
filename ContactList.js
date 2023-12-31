import React from "react";
import { Link } from "react-router-dom";
import Contactcard from "./Contactcard";


const ContactList = (props) =>{



   const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }    

    const renderContactList = props.contacts.map((contact) => {
      
        return(        
          <Contactcard contact={contact} clickHandler= {deleteContactHandler} key = {contact.id}/>
        )
    })


    return(

        <div className="ui celled list">
            <h2>Contact list</h2>
            <Link to="/add">
                <button className="ui button blue right">AddContact</button>
            </Link>
            {renderContactList}
        </div>
    )

}
export default ContactList;