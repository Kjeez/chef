import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef'/>
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef’s Word"/>
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>Welcome to our culinary haven, where artistry takes center stage.</p>
          </div>
          <p className='p__opensans'>flavors dance on the palate like a symphony. Our esteemed chefs, masters of their craft. Curate each dish with passion and precision, infusing every creation with a touch of culinary magic.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign'/>
        </div>

      </div>
    </div>
  )
}

export default Chef