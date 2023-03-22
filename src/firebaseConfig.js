import firebase from "firebase/compat/app";
import "firebase/compat/database";
// Config firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5AxCgXcOXQCtUmSI4h5lk6r7nQJYAde8",
  authDomain: "teach-for-india-1385d.firebaseapp.com",
  projectId: "teach-for-india-1385d",
  storageBucket: "teach-for-india-1385d.appspot.com",
  messagingSenderId: "951064241547",
  appId: "1:951064241547:web:5a5276081893b93eee7b8e",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
