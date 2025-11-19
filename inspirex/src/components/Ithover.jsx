import React from 'react';
import "../componentscss/Navbar.css";
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import { useState } from 'react';


const Ithover = () => {

  const [truet, setTruet] = useState(true);

  function dontshow() {
    setTruet(false);
  }


  return (
    <>
    {truet&&(

      <div className="ithover-container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 service-block" onClick={dontshow}>
          <Link to="/Services">
            <img src="/images/web.png" alt="Web Development" />
            <h4>Web Development</h4>
            <p>Let’s build scalable and secure web applications to elevate your online presence.</p>
          </Link>
        </div>



        <div className="col-lg-4 col-md-6 col-sm-12 service-block" onClick={dontshow}>
          <Link to="/Services">

            <img src="/images/mobile.png" alt="Mobile Development" />
            <h4>Mobile Development</h4>
            <p>Transforming innovative ideas into user-friendly and high-performing mobile apps.</p>
          </Link>
        </div>



        <div className="col-lg-4 col-md-6 col-sm-12 service-block" onClick={dontshow}>
          <Link to="/Services">

            <img src="/images/ai.png" alt="AI Development" />
            <h4>AI Development Services</h4>
            <p>Harness the power of AI to develop smart solutions that drive business efficiency & innovation.</p>
          </Link>

        </div>


      </div>



      <div className="row mt-4">

        <div className="col-lg-4 col-md-6 col-sm-12 service-block" onClick={dontshow}>
          <Link to="/Services">

            <img src="/images/ecommerce.png" alt="Ecommerce Development" />
            <h4>Ecommerce Development</h4>
            <p>Create customized online stores that stand out in today’s competitive market.</p>
          </Link>

        </div>


        <div className="col-lg-4 col-md-6 col-sm-12 service-block" onClick={dontshow}>
          <Link to="/Services">

            <img src="/images/blockchain.png" alt="Blockchain Development" />
            <h4>Blockchain Development</h4>
            <p>Transform your business ideas into reality with our tailored software development services.</p>
          </Link>

        </div>


        <div className="col-lg-4 col-md-6 col-sm-12 service-block" onClick={dontshow}>
          <Link to="/Services">

            <img src="/images/devops.png" alt="DevOps Services" />
            <h4>DevOps Services</h4>
            <p>Maximizing the potential of DevOps technology to streamline your business operations.</p>
          </Link>

        </div>

      </div>
    </div>


    )}
        </>
  );
};

export default Ithover;
