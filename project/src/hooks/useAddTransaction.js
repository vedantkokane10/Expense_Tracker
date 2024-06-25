import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../config/firebase-config'
import {useGetUserInfo} from './useGetUserInfo';


// Firebase Collection: A collection is a group of documents in Cloud Firestore. It is similar to a table in SQL.
// Firebase Document: A document is a set of key-value pairs in a collection. It is similar to a row or record in SQL.



// this hook will be used to add new data
export const useAddTransaction = () =>{
    // this is a reference to the collection
    let transactionCollectionRef = collection(db,'Transactions')

    const {name,profilePhoto,userId,isAuth} =  useGetUserInfo()

    // we will return this function as use of this hook
    const addTransaction = async ({description ,transactionAmount,transactionType  }) =>{
        // addDoc takes 2 parameters first collection and second is data
        await addDoc(transactionCollectionRef,{
            userId: userId,
            description: description,
            transactionAmount: transactionAmount,
            transactionType: transactionType,
            createdAt: serverTimestamp()  // when did the transaction created
        })
    }
    return { addTransaction};
}