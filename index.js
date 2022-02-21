import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contacts from './components/Contacts/Contacts';
// class Greet extends React.Component{
//   render(){
//     return <h1>Hello</h1>
//   }
// }


const Element=()=>{
 

  return  (
     <div>
   <App/>
     </div>
   )


 }
ReactDOM.render(<Element/>,document.getElementById('root'));