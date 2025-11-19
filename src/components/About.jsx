import React from 'react'
import Footer from '../components/Footer';
import '../componentscss/About.css'
import { Link } from 'react-router-dom';

const About = () => {

    return(
        <>


<section className="container-fluid bg-dark-blue text-light py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <h5 className=" mb-2" style={{color:'rgba(247,156,0,255)'}}>About</h5>
          <h2 className="font-weight-bold">Your Technology Partner For Success</h2>
        </div>

        {/* Bubble Image Content */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <div className="bubble-container position-relative">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
          </div>
        </div>
      </div>
    </section>



      
        <section className="container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <h5 className=" mb-2" style={{color:'rgba(247,156,0,255)'}}>Who We Are</h5>
          <h2 className="font-weight-bold">
            We Create New Digital Experiences & Help Companies Shift To The Digital Realm
          </h2>
          <p className="text-muted mt-4">
            A pellentesque sit amet porttitor eget dolor morbi. Arcu non sodales neque sodales ut. 
            Nisi scelerisque eu ultrices vitae auctor eu augue ut.
          </p>
       <Link to='/contact'>   <button className=" mt-3 aboutbtn" >Contact Us</button></Link>
        </div>

        {/* Image Content */}
        <div className="col-lg-6 col-md-12">
          <div className="position-relative">
            <img 
              src="/images/firstimage.jpg" 
              alt="About Us" 
              className="img-fluid rounded"
            />
            <div className="position-absolute bottom-0 start-0 p-3 bg-warning text-dark" style={{ width: 'auto' }}>
              <h6 className="mb-0">An Eye For Design And A Mind For Strategic Execution</h6>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className='container-fluid main-div'>
    <div className='row'>
        <div className='col-md-6 col-sm-12 d-flex justify-content-center align-items-center'>
            <img src='/images/aboutimgone.jpg' alt='imageloading' className='firstimage img-fluid mt-5'/>
        </div>
        <div className='col-md-6 col-sm-12 d-flex flex-column align-items-start'>
            <div className='text-left mt-5'>
                <p className='font-weight-bold' style={{color: 'rgba(247,156,0,255)', fontSize: '1.2em', fontWeight: 'bolder'}}>
                We create great experiences
                </p>
                <h1 style={{color: 'rgba(37,56,100,255)'}}>
                Get your web development project off the ground today
                </h1>
                <p className='paragraphcard'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <img src='/images/aboutimgtwo.jpg' alt='imageloading' className='secondimage img-fluid mt-2'/>
        </div>
    </div>
</div>

        <Footer/>
        </>
    );
}

export default About;