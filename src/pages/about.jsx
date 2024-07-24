import React from 'react'
import '../Components/slider/Slider.css'
import image1 from '../assets/about-img.jpg'
import '../Components/button/Button.css'

export default function About() {
  return (
    <div>
      <section class="about_section layout_padding-bottom">
    <div class="container">
      <div class="row" style={{background:"transparent", marginTop:"12rem", gap:"1rem"}}>
        {/* <div class="col-lg-5 col-md-6"> */}
          <div class="detail-box" style={{width:"30rem"}}>
            <h1 style={{color:"black"}}>
              About us
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
            </p>
            <a href="">
              <button className='button2'>READ MORE</button>
            </a>
          {/* </div> */}
        </div>
        {/* <div class="col-lg-7 col-md-6"> */}
          <div class="img-box" style={{width:"40rem", height:"auto"}}>
            <img src={image1} alt="" />
          </div>
        {/* </div> */}
      </div>
    </div>
  </section>
    </div>
  )
}
