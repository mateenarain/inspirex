import React from 'react'
import { Link } from 'react-router-dom';
import '../componentscss/Footer.css'

const Footer = () =>{

return(
<>
<footer className='footer'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-4 footer__column'>
                <img src="/images/aibridgelogo.png" alt="Footer Image" className='footer__image'/>
                <p className='footer_believe'>We believe that technology should<br/> be simple, easy to use, and should<br/> improve the lives of our clients.</p>
                <p className='footer__address'>Address</p>
                <p className='footer__phone'>Phone</p>
                <p className='footer__email'>Email</p> 
            </div>
            <div className='col-md-3 footer__column'>
                <h1 className='footer__heading'>IT Services</h1>
                <p className='footer__service'>Software Development</p>
                <p className='footer__service'>Web Development</p>
                <p className='footer__service'>Mobile Development</p>
                <p className='footer__service'>UI/UX Design</p>
                <p className='footer__service'>Business Analysis</p>
            </div>
            <div className='col-md-2 footer__column'>
                <h1 className='footer__heading'>Our Links</h1>
                <p className='footer__link'>Help</p>
                <p className='footer__link'>Support</p>
                <p className='footer__link'>Clients</p>
                <p className='footer__link'>Contact</p>
                <p className='footer__link'>Terms of Services</p>
            </div>
            <div className='col-md-3 footer__column'>
                <h1 className='footer__heading'>Newsletter</h1>
                <p className='footer__newsletter'>
                    Subscribe to our newsletter for the latest industry trends, exclusive offers, and expert advice, delivered straight to your inbox. Stay ahead of the competition.
                </p>
              <Link to="/contact">  <button className='footer__button'>Contact Us</button></Link>
            </div>
        </div>
    </div>
</footer>

</>
    );
} 
export default Footer;