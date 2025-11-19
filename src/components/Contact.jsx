import React from 'react'
import "../componentscss/Contact.css"
import Footer from '../components/Footer';

const Contact = () => {

    return(
        <>
<div className="container-fluid heycontact">
  <div className="landing-page row">
    <div className="text col-md-8 col-sm-12">
      <p className="text-title">Contact Us</p>
      <h1 className="body-text">Schedule A Free IT Consultation</h1>
    </div>
    <div className="img col-md-4 col-sm-12">
      <img src="contactus.svg" alt="" />
    </div>
  </div>
</div>

{/* <!-- Digital Products --> */}
<div className="main my-5">
  <p className="products-title">Digital Product</p>
  <h1 className="products-body">Proper Digital Consulting Is Essential In Addressing Digital Problems</h1>

  <div className="container my-5 py-4 px-4">
    <div className="row">
      <div className="digital-pro col-md-6 col-sm-12">
        <img src="/images/contactpic.jpg" alt="contact us" />
      </div>
      <div className="body-text col-md-6 col-sm-12">
        <h1>Start Your IT Project</h1>
        <p>
          Et tortor at risus viverra adipiscing at in tellus. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Vitae congue eu consequat ac felis donec et odio.
        </p>
        <ul>
          <li>Wordpress Development</li>
          <li>Business Analysis</li>
          <li>UI/UX Design</li>
        </ul>
        <button className="btn">Get Started</button>
      </div>
    </div>
  </div>
</div>

<section>
  <div className="container">
    <div className="row">
      <div className="contact-form col-md-6 col-sm-12 my-5">
        <h1>Free Consultation</h1>
        <h2>Contact Us For A Free IT Consultation</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit, cupiditate est iste ipsam fugiat natus vero harum praesentium soluta?</p>
        <input className="text" type="text" placeholder="Your Name" /> <br />
        <input className="text" type="text" placeholder="Corporate Email" /> <br />
        <textarea id="message" cols="30" rows="10" placeholder='Message'></textarea> <br />
        <button className="btn px-3 py-3 mx-3">Send Request</button>
      </div>

      {/* <!-- Tips for a perfect Contact --> */}
      <div className="best-contact col-md-6 col-sm-12 my-5">
        <div className="text">
          <h1>Tips For a perfect contact</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rerum!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rerum!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rerum! Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="img">
          <img src="./1_Lg6wN1RJ4ExwGh6bGiLRGQ.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
        </>
    );
}

export default Contact;