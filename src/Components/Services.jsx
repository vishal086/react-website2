import React from 'react'
import '../Style/Services.css'
import {Carousel} from 'react-responsive-carousel'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
import img5 from '../Images/5.jpg'
import img6 from '../Images/6.jpg'
import img7 from '../Images/7.jpg'
import img8 from '../Images/8.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Services() {
  return (
     <>
        <div className="services">
          <Carousel
          infiniteLoop
          autoPlay
          showThumbs = {false}
          showStatus = {false} 
          showArrows = {true} 
          interval={1000}>

              <div>
                 <img src={img5} alt="" className='caro-img'/>
              </div>
              <div>
                 <img src={img6} alt="" className='caro-img'/>
              </div>
              <div>
                 <img src={img7} alt="" className='caro-img'/>
              </div>
              <div>
                 <img src={img8} alt="" className='caro-img'/>
              </div>

              <div>
                 <img src={img3} alt="" className='caro-img'/>
              </div>

              <div>
                 <img src={img4} alt="" className='caro-img'/>
              </div>
          </Carousel>
        </div>
     </>
  )
}

export default Services
