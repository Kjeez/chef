import React from 'react';
import images from '../../constants/images';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about' >
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='gletter'/>
      </div>

      <div className='app__aboutus-content flex__center'>

        <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Discover the epitome of modern dining in Delhi at Gericht. Nestled in the bustling heart of the city, our culinary haven harmoniously blends cutting-edge flavors with the rich tapestry of local culture. Immerse yourself in an extraordinary dining experience that celebrates Delhi's vibrant spirit.</p>
        <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='knife'/>
        </div> 

        <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Our story dates back to the early 20th century when a visionary chef set out to capture the essence of Delhi's culinary heritage. Passed down through generations, our treasured recipes continue to enchant diners with a tapestry of authentic tastes, blending tradition with a modern touch.</p>
        <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs