

import {useState} from 'react'
import Hello from './Hello.js';
import './App.css'


function App() {
const [description,setDescription]=useState();
const [amount,setAmount]=useState();
const [transactions,setTransactions]=useState([]);

  function add(e){
    e.preventDefault();
    setTransactions([...transactions,description,amount]);
    setDescription('')
    setAmount(0)
  }
  function Delete(e){

  
  const transact = [];
  transact.splice();
  return{transact}
    

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense tracker</h1>
      </header>
    <body>
      <div className='container'>
        <h2>Transactions</h2>
        <table>
          <thead>
          <th>Description</th>
          <th>Amount</th>
          <th>action</th>
          </thead>
          <tbody>
            {transactions.map((transaction,i)=>(
              <tr key={i}>
              
                
              <td>{transactions}</td>
              
              <td><button onClick={Delete}>Delete</button>
              
             </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form>

      <input type='text'placeholder='Description'onChange={e=> setDescription(e.target.value)}value={description}></input>
      <input type='number'placeholder='Amout'onChange={e => setAmount(e.target.value)}value={amount}></input>
      <button onClick={add}>Add transactions</button>
      </form>
    </body>
    
    
    
      
    </div>
  );
}

export default App;
