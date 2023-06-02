
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LatestWork from "./components/LatestWork";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import SideLinks from "./components/SideLinks";
import PictureName from "./components/PictureName";
import styles from "./App.css"
import WhyMe from "./components/WhyMe";
import Name from "./components/Name";
import NameComp from "./components/NameComp";

const img1 = './img1.jpg';
const caption = 'Lucky';

//Latest work array//
const images = [
  './img1.jpg',
  './logo192.png',
  './logo512.png',
  
];


const App = () => {
    return (
      <div class="container-app">
      <div class="container-header">
         <Name className="name"/>
         <Navbar/>
         <Header/>
         </div>

         <div class="body-container">
         <SideLinks/>
        
         <NameComp/>
         <h1 class="name-head" className={styles.title}>Lucky</h1>
          <PictureName img1 ={img1} caption={caption} />
        
         <div>
         <WhyMe/>

          <LatestWork  images={images} />
          </div>
          
          
         
         
          </div>
        </div>
    )
}
export default App