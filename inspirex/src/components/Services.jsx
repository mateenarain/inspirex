import React from 'react';
import '../componentscss/Services.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <section className="software-development">
        <div className="container">
          <h2 className="software-title">Software Development</h2>
          <h1 className="software-subtitle">An Expert-Level Team Of Custom Software Developers</h1>
        </div>
      </section>

<section className="service-info">
  <div className="container">
    <div className="row">
      <div className="service-left col-lg-6 col-md-12 ">
        <div className="image">
          {/* Uncomment and set the correct image path */}
          <img src="/images/firstpic.png" alt="Team Image" className="img-fluid" />
        </div>
        <div className="headline text-capitalize mt-4">
          <p style={{color:"#2c3e50",fontSize:'20px',fontWeight:"bold"}}>Today, Hire An Expert-Level Professional For Your Project</p>
        </div>
      </div>
      <div className="service-right col-lg-6 col-md-12">
        <h2 style={{color:" #f7c744"}}>Quality & Design</h2>
        <h1 style={{color:"#2c3e50"}}>Why Should You Have A High Standard Of UI/UX Design?</h1>
        <p>
          Neque ornare aenean euismod elementum nisi quis eleifend quam
          adipiscing. Risus in hendrerit gravida rutrum. At auctor urna nunc
          id cursus. Commodo odio aenean sed adipiscing diam donec adipiscing.
          Magna eget est lorem ipsum dolor sit. Consequat ac felis donec et.
          Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
        </p>
        <div className="tags">
          <div className="">
            <div className="">
              <ul>
                <li>DevOps And QA Services</li>
                <li>Security Consulting</li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li>Support Services</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="btn-primary mt-3">Read More</button>
      </div>
    </div>
  </div>
</section>


      <section className="project-features">
        <h2>Project Features</h2>
        <h1>We Aim To Improve The Quality Of Our Products While Simultaneously Reducing Costs</h1>
        <div className="container">
          <div className="feature">
            <h3>Enterprise Software Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <button className="btn-secondary">Read More</button>
          </div>
          {/* <div className="feature">
            <h3>Software Enhancement & Modernization</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <button className="btn-secondary">Read More</button>
          </div> */}
        </div>
      </section>

      <section className="modernization">
        <div className="container">
          <div className="modernization-content">
            <div className="image">
              <img src="./images/aboutimgtwo.jpg" alt="Person Image" className="img-fluid" />
              <div className="quote-box">
                <p >Estimated Cost For Assembling Your New World-Class Expert Project Team.</p>
                <p className="author">Mark J. Kopps<br />Founder</p>
              </div>
            </div>
            <div className="text mt-5">
              {/* <h2>Modernization</h2> */}
              <h4 style={{color:"#2c3e50"}}>We Will Modernize Your Software By Upgrading It With The Latest Techniques</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="image-group">
                <img src="/images/secondpic.png" alt="Laptop Image" className="img-fluid" />
                <p style={{color:"#2c3e50",fontSize:'20px',fontWeight:"bold"}}>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="it-services">
        <div className="container">
          <div className="it-service">
            {/* <div className="icon">
              <img src="./images/images.png" alt="Service Icon" className="img-fluid" />
            </div> */}
            <div className="content">
              <h3>IT Services For Software Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <Link to="/contact">
            <button className="btn-primary">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
