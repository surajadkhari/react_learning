import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Slider from './Slider';
import Footer from './Footer';
import Image from "./Assets/3.JPG";
const Element=(
  <div>
    <Nav/>
    <Slider/>
    <img src={Image} alt="This is us" width="100px" height="100px"></img>
    <Footer/>
  </div>
) 

ReactDOM.render(
  Element,document.getElementById('root')
)