import React from 'react'
import image2 from './../../assets/professional-img.png'
import '../../Components/button/Button.css'
import '../../Components/slider/Slider.css'

export default function Professional() {
  return (
    <div>
       <section class="professional_section layout_padding">
    <div class="container">
      <div class="row" style={{marginTop:"7rem", paddingBlock:"7rem"}}>
        {/* <div class="col-md-6"> */}
          <div class="img-box">
            <img src={image2} alt=""/>
          </div>
        {/* </div> 
        {/* <div class="col-md-6 "> */}
          <div class="detail-box">
            <h1>
              We Provide Professional <br/>
              Home Services.
            </h1>
            <p>
              randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly
            </p>
            <a href="">
              <button className='button1'>READ MORE</button>
            </a>
          </div>
        {/* </div> */}
      </div>
    </div>
  </section>
    </div>
  )
}
