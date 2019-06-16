import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnB9qT1e0iecuI0i9_lLjiqTIuT2cL2io",
  authDomain: "catch-of-the-day-588a3.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-588a3.firebaseio.com",
  appId: "1:383327635983:web:94889c54950d3e0e"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
