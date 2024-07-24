import React from 'react'
import image1 from '../../assets/s1.png'
import image2 from '../../assets/s2.png'
import image3 from '../../assets/s3.png'
import './service.css'
import '../../Components/button/Button.css'
import { useState } from 'react'

export default function Service() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <section className="service_section layout_padding">
    <div className="container_service ">
      <div className="heading_container heading_center">
        <h1> OUR SERVICES </h1>
      </div>
      <div className="row_service" >
      <div className={`box_service1 ${isHovered ? 'hovered1' : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
            <div className="img-box_service">
              <img src={image1} alt=""id='image1' style={{ filter: isHovered ? 'invert(100%) grayscale(100%)' : 'none' }}/>
            </div>
            <div className="detail-box_service">
              <h5>Maintenance</h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
          </div>
          <div className={`box_service2 ${isHovered ? 'hovered2' : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}> 
            <div className="img-box_service">
              <img src={image2} alt=""id='image2' style={{ filter: isHovered ? 'invert(100%) grayscale(100%)' : 'none' }}/>
            </div>
            <div className="detail-box_service">
              <h5>Electrical</h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
          </div>
          <div className={`box_service3 ${isHovered ? 'hovered3' : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
            <div className="img-box_service">
              <img src={image3} alt=""id='image3' style={{ filter: isHovered ? 'invert(100%) grayscale(100%)' : 'none' }}/>
            </div>
            <div className="detail-box_service">
              <h5>Plumbing</h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
        </div>
      </div>
      <div className="btn-box_service">
        <a href=""><button className='button2'>VIEW MORE</button></a>
      </div>
    </div>
  </section>
    </div>
  )
}



