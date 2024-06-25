import {auth, provider} from '../../config/firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {useAddTransaction} from '../../hooks/useAddTransaction'
import {useGetTransaction} from '../../hooks/useGetTransaction'
import './Auth.css';
export const Auth = () => {
    let navigate = useNavigate()


    
    const signInWithGoogle = async () =>{
        const result  =  await signInWithPopup(auth,provider);
        console.log(result);

        // lets store the result in local storage we can view in chrome by inspect -> applications -> local storage
        // it can store string , boolean only so we need to convert object to string
        // so we will use JSON.stringfy -> to convert object to string
        const authInfo = {
            userId : result.user.uid,
            name: result.user.displayName,
            profilePhoto : result.user.photoURL,
            isAuth: true
        }
        localStorage.setItem("auth",JSON.stringify(authInfo))
        // however using localStorage is not ideal we should have used cookies

        navigate('expenses') // once logged in go to expense tracker page
    }

    return (
        <div className="login-page">
            <div className="background-overlay"></div>
            <div className="login-container">
                <h1>Expense Tracker</h1>
                <p className="login-text">Sign in with Google</p>
                <button className="login-button" onClick={signInWithGoogle}>Sign in</button>
            </div>
        </div>
    )
}