import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile} from "firebase/auth";
import userAuthentication from '../Login/Firebase/firebase.init';

userAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(true);
    const [admin,setAdmin]=useState(false);
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {        
                saveUser(email,name,'POST');
                // const user = userCredential.user;
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    setError(error.message);
                });

                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                // ..
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state.from || '/home';
                history.replace(destination);             
                // const user = userCredential.user;
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {                        
                const user = result.user;
                console.log(user);
                saveUser(user.email,user.displayName,'PUT');
                setError('');
                const destination = location?.state.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    useEffect(()=>{
        fetch(`https://fathomless-cliffs-39338.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin);
            if (data.admin) {
                localStorage.setItem("state", true);
              }
        })
    },[user.email])


    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        fetch('https://fathomless-cliffs-39338.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setIsLoading(false)
        });
    }
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem("state");
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            });
    }
    return {
        user,admin, isLoading, error,setIsLoading,
        registerUser,googleSignIn,
        logout,
        loginUser
    }
}
export default useFirebase;