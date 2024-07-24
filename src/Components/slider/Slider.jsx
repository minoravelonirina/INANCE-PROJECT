import React from 'react'
import images from '../../assets/slider-img.png'
import './Slider.css'
import '../button/Button.css'

export default function Slider(){
  return (
    <div>
      <section className="slider_section ">
        <div className="container1">
        <div className="row">
          {/* <div className="col-md-6 "> */}
            <div className="detail-box">
              <h1>Repair and <br/>Maintenance <br/>Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
              </p>
              <a href="">
                <button className='button1'>CONTACT US</button>
              </a>
            {/* </div> */}
          </div>
          {/* <div className="col-md-6"> */}
            <div className="img-box">
              <img src={images} alt="slider image"/>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
    </div>
  )
}
