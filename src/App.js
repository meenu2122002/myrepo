import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/login"
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Home from "./components/home.js"
// export default class App extends Component {
  export default function App (){
  const apikey=process.env.REACT_APP_NEWS_API
//  state={
// progress:0
//  }

//   setProgess=(progress)=>{
//   setState({progress:progress})`
//  }
const [progress,setProgress]=useState(0);
 
 
  // render() {
    return (
      <div>
        {/* <Login/> */}
  <Navbar/>
  
  <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() =>setProgress(0)}
      />
  <BrowserRouter>
  <Routes>
  <Route path="/business" element={<News apikey={apikey}setProgress={setProgress} country="in" category="business" />}/>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<News apikey={apikey}setProgress={setProgress} country="in" category="entertainment" />}/>
  <Route path="/sports" element={<News apikey={apikey}setProgress={setProgress} country="in" category="sports" />}/>
  <Route path="/science" element={<News apikey={apikey}setProgress={setProgress} country="in" category="science" />}/>
  <Route path="/technology" element={<News apikey={apikey}setProgress={setProgress} country="in" category="technology" />}/>
  <Route path="/general" element={<News apikey={apikey}setProgress={setProgress} country="in" category="general" />}/>
  <Route path="/health" element={<News apikey={apikey}setProgress={setProgress} country="in" category="health" />}/>
  <Route path="/entertainment" element={<News apikey={apikey}setProgress={setProgress} country="in" category="entertainment" />}/>
  </Routes>
  </BrowserRouter>
      </div>
    )
  }




