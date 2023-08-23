import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay/>
      <Newsletter/>

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>C-142e, Connaught Place, New Delhi, Delhi 110001 </p>
          <p className='p__opensans'>+91 963-344-1230</p>
          <p className='p__opensans'>+91 936-344-1230</p>
        </div>

        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='gericht'/>
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:"15px"}}/>
          <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>

        <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>10:00 am - 12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>10:00 am - 02:00 am</p>

        </div>

      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer