import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDa9wantYMGjUAtzEph5uFWVXyZFqPgcL0",
    authDomain: "weather-firebase-81c94.firebaseapp.com",
    projectId: "weather-firebase-81c94",
    storageBucket: "weather-firebase-81c94.appspot.com",
    messagingSenderId: "708002905178",
    appId: "1:708002905178:web:e8978c6eda4c4b54aaac63"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const logInWithGoogle = () => {
    auth.signInWithPopup( providerGoogle );
};

const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const logInWithFacebook = () => {
    auth.signInWithPopup( providerFacebook );
};


export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                email,
                displayName,
                photoURL,
            ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
    if (!uid) return null;

    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};