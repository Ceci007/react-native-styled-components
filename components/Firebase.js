import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbUulsiPCZmsYW9v6R3jCcBaQhFMx2WEw",
  authDomain: "react-native-styled-components.firebaseapp.com",
  databaseURL:
    "https://react-native-styled-components-default-rtdb.firebaseio.com",
  projectId: "react-native-styled-components",
  storageBucket: "react-native-styled-components.appspot.com",
  messagingSenderId: "323689356364",
  appId: "1:323689356364:web:7df7a49a829e952a6a68e9",
  measurementId: "G-PRSJ5SN44J",
};

const app = initializeApp(firebaseConfig);
export default app;
