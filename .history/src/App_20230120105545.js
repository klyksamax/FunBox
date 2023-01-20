import { BrowserRouter as Routes, Redirect, Route, Router } from 'react-router-dom';
import HomePage from './HomePage/Home';
import './App.css';
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBByX-_G7Z3XEQfZB1XJ-IC6amP6NGzINM",
  authDomain: "funbox-84daa.firebaseapp.com",
  projectId: "funbox-84daa",
  storageBucket: "funbox-84daa.appspot.com",
  messagingSenderId: "525149913768",
  appId: "1:525149913768:web:8cc769513c512b3a18789d",
  measurementId: "G-ZCH12TSCW3"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
    <HomePage/>
    </>
  );
}

export default App;
