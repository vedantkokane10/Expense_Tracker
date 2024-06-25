import { query,collection, where, orderBy, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {db} from '../config/firebase-config';
import {useGetUserInfo} from './useGetUserInfo';

export const useGetTransaction = () => {
  const [transactions,setTransactions] = useState([]);
  let transactionCollectionRef = collection(db,'Transactions')
  const {name,profilePhoto,userId,isAuth} =  useGetUserInfo()

  const [totalAmount,setTotalAmount] = useState({balance:0.0, incomeAount:0.0 , expenseAmount:0.0});

  const getTransactions = async () =>{
    let unsubsrcibe;
    try{
        const queryTransaction = query(
            transactionCollectionRef,
            where("userId","==",userId)
            // orderBy('createdAt')
            
        );
        
        // this onSnapshot keeps track on changes in query i.e new data added or updated
        unsubsrcibe = onSnapshot(queryTransaction,(snapshot) => {
            let amount = 0;
            let expenses = 0;
            let income = 0;
            let docs = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const id = doc.id;
                console.log(doc.data())
                docs.push({ ...data, id });
                if(data.transactionType === 'expense'){
                  expenses += Number(data.transactionAmount);
                }
                else{
                  income += Number(data.transactionAmount);
                }

                let balance = income - expenses;
                setTotalAmount({
                  balance,
                  incomeAount:income,
                  expenseAmount:expenses
                })
            });

            setTransactions(docs);
            
        });
    }
    catch(error){
        console.log(error);
    }
    
    return  () => unsubsrcibe();
  };


  useEffect(() =>{
    getTransactions();
  },[]);
  
  console.log(transactions)
  return {transactions,totalAmount};
}
