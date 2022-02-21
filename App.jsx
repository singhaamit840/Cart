import React, { useState,useEffect } from 'react'
import Contacts from  './components/Contacts/Contacts'

// import Card from './components/Card'
// import Tweet from './components/Twitter/Tweet';
// import Navbar from './components/Navbar';


const App = () => {
//     const [count,setCount]=useState(0);
//     const handleClick=()=>{
//         setCount(count+1);
//     }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={handleClick}>Click Me</button>
//     </>  
//   )

// const [count,setCount]=useState({
//     count1:0,
//     count2:7
// });



//const [countOne,setCountOne]=useState(6)
//console.log(count);

// const handleClick=(countValue)=>{
//     if(countValue===1){
//     setCount({...count,count1:count.count1+1});
//     //console.log(count)
// }
// else if(countValue===2){
// //const handleClickOne=()=>{
//     setCount({...count,count2:count.count2+1})
// }
// }


// return (
//     <>
//     <h1>{count.count1}</h1>
//     <button onClick={()=>handleClick(1)}>+1</button>
//     <h2>{count.count2}</h2>
//     <button onClick={()=>handleClick(2)}>+2</button>
//     </>
// )
// return (
//     <>
//     <Card title="Today's Money" num="$53,000" logo="Logo One"/>
//     <Card title="Today's Users" num="$2,3000" logo="Logo Two"/>
//     <Card title="New clients" num="$+3,462" logo="Logo Three"/>
//     </>
// )



//   const [info,setInfo]=useState("");
//   const handleClick=(event)=>{
//       event.preventDefault();
//       console.log("Button is clicked")
//   }
//   const handleChange=(event)=>{
//     console.log(event.target.value);
//     setInfo(event.target.value);

// }
// return (
//     <>
//     <form>
//         <label htmlFor="">Enter Name</label>
//         <input type="text" placeholder='Enter Name' onChange={handleChange} value={info}/>
//         <button onClick={handleClick}>Click Me</button>
//     </form>
//     </>
// )


// Name State
const [newName, setNewName] = useState("")
// Email State
const [newEmail, setNewEmail] = useState("")
// Contacts State
const [contacts, setContacts] = useState([
  {name:"Ram",email:"r@r.com"},
  {name:"Shyam",email:"s@s.com"},
  {name:"Ghanshyam",email:"g@g.com"},
])
// Handling Name
const handleNameChange=(event)=>{
  setNewName(event.target.value);
}
// Handling Email
const handleEmailChange=(event)=>{
  setNewEmail(event.target.value)
}
// Adding Contact
const handleContactSubmit=()=>{
  setContacts([...contacts,{name:newName,email:newEmail}]);
  setNewName("");
  setNewEmail("");
}
// Handling Delete
const handleDelete=(emailId)=>{
  const newContacts=contacts.filter(item=>item.email!==emailId);
  setContacts(newContacts);
}
// Handling Edit
const handleEdit=(emailId)=>{
  const newContacts=[...contacts];
  const index=newContacts.findIndex(el=>el.email===emailId);
  newContacts[index]={name:newName,email:newEmail};
  setContacts(newContacts);
  setNewName("");
  setNewEmail("");
}
return (
  <>
  <div className="container">
  <form>
    <div className="row">
      <div className="col">
        <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" onChange={handleNameChange} value={newName}/>
     </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmailChange} value={newEmail}/>
    </div>
  </div>
  <button type="button" className="btn btn-primary mt-3" onClick={handleContactSubmit}>Add Contact</button>
    </form>
  </div>
  <Contacts contacts={contacts} handleDelete={handleDelete} handleEdit={handleEdit}/>
  </>
)



}

export default App