import React ,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import Addcontact from './Addcontact';


function App() {

  
  
  const [contacts, setContacts] = useState([]);


  const addContactHandler = (contact) => {    
    
    setContacts([...contacts,contact]);
    console.log(contact);
  };

  const removeContactHandler =(id)=> {

    const newcontactslist = contacts.filter((contact)=>{

      return contact.id!==id;

    })


    setContacts(newcontactslist);    
  };



  useEffect( () => {


    const Retrievecontacts = JSON.parse(window.localStorage.getItem("Contacts") );
 
 
    if(Retrievecontacts){
 
     setContacts(Retrievecontacts );
 
    }
 
   },[]);

  useEffect(() => {

    if(contacts.length>0){
    
    window.localStorage.setItem("Contacts", JSON.stringify(contacts))};

  },[contacts]);
  
 
  

  return (   
    <div className='ui container'>
      <Router>
      <Header/>
       
       <Routes>       
        
        <Route path="/" 
        exact 
        element = {
        <ContactList 
         contacts={contacts}
          getContactId={removeContactHandler}/>
          }
        />  

        <Route
         path="/add"
          element={<Addcontact 
            addContactHandler={addContactHandler}
            
            />}
        />

       </Routes>  

      {/*<Addcontact  addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
       
      </Router>
    </div>   
  
  );
}

export default App;
