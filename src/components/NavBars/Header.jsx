import React from 'react'
import { Link } from 'react-router-dom'
import IMAGE1 from '../../assets/image.jpeg'
import Image5 from '../../assets/image5.jpeg'
import Image3 from '../../assets/image3.jpeg'
import Better from '../../assets/image6.png'
import {FaInstagram,FaFacebookF,FaTwitter} from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'

import './Nav.css'
import FashionNews from '../Fashion/FashionNews'
const Header = () => {
  return (
    <section id='header'>
      <div className="container headContainer">
        
        <div className="headLeft"><h1>1/3</h1></div>

          <div className="headRightContainer">

            <div className="headRight">
              <div className="hrImage">
                <img src={IMAGE1} alt="image2" />
              </div>
              <div className="hrContent">
                <button className='btn-primary'>Fashion</button>
                <h2>Don't Let Yesterday Take Up Too Much of Today</h2>
                <p>meet to launch on the manufactur's new A33neo aircraft in 2023, it's offering lots of extra space include wider seats as</p>
                <Link to="/single"><h4>Read More</h4></Link>
              </div>
            </div>

              <div className="hrCards">
                <div className="hrCard">
                  <div className="left"></div>
                    <div className="overlay">
                      <div className="fashion">
                        <h6>fashion</h6>
                      </div>
                      <h4>The Secret of Getting Ahead is Getting Started</h4>
                      <small>march 6, 2020</small>
                    </div>
                   <img src={Image3} alt="" />   
                </div>
                <div className="hrCard"> 
                <div className="left"></div>
                    <div className="overlay">
                    <div className="fashion">
                        <h6>house</h6>
                      </div>
                      <h4>Some men See Things as they Are and Ask Why</h4>
                      <small>march 6, 2020</small>
                    </div>
                    <img src={Image5} alt="" />   
                </div>
              </div>

          </div>

      </div>
      <div className="container better">
        <div className="betterImage">
            <img src={Better} alt="Better" />
        </div>
        <div className="betterContent">
          <h2>We Are Better Than Others</h2>
          <p>29 Jun 2014 — Nobody is a better person than anyone else. Each human in the Planet Earth is unique. We each have different gifts of our self to give on Earth. 293 answers 4 votes: I’m better than many others in the sense that I know my limitations. I’m no</p>
          <h4>TheSaint-Deals</h4>
          <div className="betterSociols">
             <FaFacebookF />
             <RiLinkedinFill />
             <FaTwitter />
             <FaInstagram />
          </div>
        </div>
      </div>
<FashionNews />
    </section>
  )
}

export default Header