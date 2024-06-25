// import React from 'react';
// import './style.css';
// import {useAddTransaction} from '../../hooks/useAddTransaction'
// import { useState } from 'react';
// import {useGetTransaction} from '../../hooks/useGetTransaction'
// import {useGetUserInfo} from '../../hooks/useGetUserInfo'
// import { signOut } from 'firebase/auth';
// import { auth } from '../../config/firebase-config';
// import {useNavigate} from 'react-router-dom'
// // import {useGetTransaction} from "../../hooks/useGetTransaction";
// export const ExpenseTracker = () => {
//   let navigate = useNavigate()
//   const {addTransaction} = useAddTransaction();
//   const {transactions,totalAmount} = useGetTransaction();
//   const {name,profilePhoto,userId,isAuth} = useGetUserInfo();
//   const [description,setDescription] = useState("");
//   const [amount,setAmount] = useState(0);
//   const [transactionType,setTransactionType] = useState("expense");

//   const changeDescription = (event) =>{
//     setDescription(event.target.value);
//   }

//   const changeAmount = (event) =>{
//     setAmount(event.target.value);
//   }

//   const changeTransactionType = (event) =>{
//     setTransactionType(event.target.value);
//   }

//   const onSubmit = (event) => {
//     event.preventDefault();     // to prevent reload
//     addTransaction({description:description,transactionAmount:amount,transactionType:transactionType});
//     setDescription("");
//     setAmount(0);
//     setTransactionType("");
//   }

//   const signUserOut = async () => {
//       try{
//         await signOut(auth);
//        localStorage.clear();
//         navigate('/');
//       }
//       catch(err){
//         console.log(err);
//       }
//   }

//   return (
//     <>
//     <div className='navbar'>
//         <div className='left-part'>
//          <h3>Logo</h3>
//         </div>
//         <div className='right-part'>
          // <div className='image-profile'>
          //   {profilePhoto && (
          //   <div>
          //   {" "}
          //   <img src={profilePhoto} alt="" className='profile-image' />
          //   </div>
          // )}
          // </div>
//           <div><h3 onClick={signUserOut} className='signOutButton'>Sign out</h3></div>
          

//         </div>
//     </div>
//     <h1>{name}'s xExpense Tracker</h1>
//     <div className='main'>

//       <div className='expense-tracker'>
//           <div className='container'>
//               <h3> Tracker</h3>
//               <div className='balance'>
//                 <h3>Your Balance  - </h3>
//                 {totalAmount.balance < 0 ? ( <h2> -$ {totalAmount.balance * -1} </h2> ) :( <h2>{totalAmount.balance}</h2> ) }
//               </div>
//               <div className='summary'>
//                 <div className='income'>
//                     <h4>Income</h4>
//                     <p>$ {totalAmount.incomeAount}</p>
//                 </div>
//                 <div className='expense'>
//                     <h4>Expenses</h4>
//                     <p>$ {totalAmount.expenseAmount}</p>
//                 </div>
//               </div>
//           </div>
//           <form action="" className='add-transaction' onSubmit={onSubmit}>
//             <input type='text' placeholder='Description'  required onChange={changeDescription}  value={description}/>
//             <input type='number' placeholder='Amount'  required  onChange={changeAmount} value={amount}/>
//             <input type='radio' id='expense' value='expense'  required onChange={changeTransactionType} checked={transactionType === 'expense'}/>
//             <label htmlFor='expense'>Expense</label>
//             <input type='radio' id='income' value='income'  required onChange={changeTransactionType} checked={transactionType === 'income'}/>
//             <label htmlFor='income'>Income</label>
//             <button>Add Transaction</button>
//           </form>
//       </div>


//       <div className='transactions'>
//         <h3>Expenditure</h3>
//         <ul>
//           {transactions &&
//               transactions.map((transaction) => {
//                 const { id, description, transactionAmount, transactionType } = transaction;
//                 return (
//                   <li key={id}>
//                     <h4>{description}</h4>
//                     <p>${transactionAmount}</p>
//                     <p style={{color:transactionType === 'expense' ? 'red' : 'green'}}>{transactionType}</p>
//                   </li>
//                 );
//               })
//             }

//         </ul>
//       </div>

//     </div>
//     </>  // this is a fragments
//   )
// }

import React from 'react';
import './style.css';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useState } from 'react';
import { useGetTransaction } from '../../hooks/useGetTransaction';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

export const ExpenseTracker = () => {
  let navigate = useNavigate();
  const { addTransaction } = useAddTransaction();
  const { transactions, totalAmount } = useGetTransaction();
  const { name, profilePhoto } = useGetUserInfo();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const changeTransactionType = (event) => {
    setTransactionType(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // to prevent reload
    addTransaction({ description: description, transactionAmount: amount, transactionType: transactionType });
    setDescription("");
    setAmount(0);
    setTransactionType("expense");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="left-part">
          <h3>Expense Tracker</h3>
        </div>
        <div className="right-part">
          <div className='image-profile'>
              {profilePhoto && (
              <div>
              {" "}
              <img src={profilePhoto} alt="" className='profile-image' />
              </div>
            )}
            </div>
          <div>
            <h3 onClick={signUserOut} className="signOutButton">Sign out</h3>
          </div>
        </div>
      </div>
      <h1>{name}'s Expense Tracker</h1>
      <div className="main">
        <div className="expense-tracker">
          <div className="container">
            <h3>Tracker</h3>
            <div className="balance">
              <h3>Your Balance - </h3>
              {totalAmount.balance < 0 ? (
                <h2> -$ {totalAmount.balance * -1} </h2>
              ) : (
                <h2>${totalAmount.balance}</h2>
              )}
            </div>
            <div className="summary">
              <div className="income">
                <h4>Income</h4>
                <p>$ {totalAmount.incomeAount}</p>
              </div>
              <div className="expense">
                <h4>Expenses</h4>
                <p>$ {totalAmount.expenseAmount}</p>
              </div>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              required
              onChange={changeDescription}
              value={description}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              onChange={changeAmount}
              value={amount}
            />
            <div className="transaction-type">
              <input
                type="radio"
                id="expense"
                value="expense"
                required
                onChange={changeTransactionType}
                checked={transactionType === 'expense'}
              />
              <label htmlFor="expense">Expense</label>
              <input
                type="radio"
                id="income"
                value="income"
                required
                onChange={changeTransactionType}
                checked={transactionType === 'income'}
              />
              <label htmlFor="income">Income</label>
            </div>
            <button>Add Transaction</button>
          </form>
        </div>
        <div className="transactions">
          <h3>Expenditure</h3>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((transaction) => {
                  const { id, description, transactionAmount, transactionType } = transaction;
                  return (
                    <tr key={id}>
                      <td>{description}</td>
                      <td>${transactionAmount}</td>
                      <td style={{ color: transactionType === 'expense' ? 'red' : 'green' }}>
                        {transactionType}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
