import React from 'react'
import "../componentscss/Home.css"
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className='landingpage'>
                <div className='container mt-2'>
                    <div className='row'>
                        <div className='col-md-5 landingpagefirstdiv'>
                            <h1 className='text-uppercase firstheading' style={{ alignItems: 'center', fontSize: '40px', color: 'rgba(37,56,100,255)' }}>
                                Revolutionize your<br />
                                business with tech
                            </h1>
                            <p className='lead mt-5' style={{ fontSize: '17px', textAlign: 'justify' }}>
                                We believe in using the latest technological advancements to help you
                                achieve your goals and improve your overall efficiency.
                            </p>
                            <button className='mt-4 px-4 buttonofland' style={{ padding: '0.9em', borderRadius: '6px', border: 'none', fontSize: '20px' }}>
                                Read More
                            </button>
                        </div>
                        <div className='col-md-7 d-flex justify-content-center align-items-center position-relative'>



    <div className="container-fluid containerfirst">
      <div className="circle circle-blue"></div>
      <div className="circle circle-green"></div>
      <div className="circle circle-yellow"></div>
      <div className="circle circle-red"></div>
    </div>


                    </div>
                </div>
            </div>
        </div >
<div className='container-fluid' style={{ backgroundColor: 'rgba(37,56,100,255)', marginTop:'8em', paddingBottom:'50px' }}>
    <div className='row text-center text-md-left'>
        <div className='col-md-3 mb-4 mt-5'>
            <p className='font-weight-bold' style={{color:'rgba(247,156,0,255)', fontSize:'1.2em'}}>Managed Strategic</p>
            <h1 className='font-weight-bold' style={{color:'white'}}>Our Services</h1>
        </div>
        <div className='col-md-6 mb-4 mt-5 '>
        <p style={{color:'white'}}>Ornare lectus sit amet est. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor.</p>
        </div>
        <div className='col-md-3 mb-4 mt-5'>
        <button className='btn   buttonoflandt' style={{padding:'0.9em', borderRadius:'10px' ,border:'none', fontSize:'20px'}}>More Services</button>
        </div>
    </div>
<div className='row mt-5' >

    <div className='col-md-3 col-sm-6 mb-4 homecard' >
    <Link to='/services' style={{textDecoration:'none'}}>
         <div className='card py-2 againsub' style={{display:'flex' ,alignItems:'center',justifyContent:'space-between' }}>
            <img src='/images/arrowagain.png' className='imgfirstcard mt-5' alt='Card 1'/>
             <div className='card-body'>
                 <h5 className='card-title text-center mt-2 text-uppercase iamheading' >Software Development</h5>
                 <p className='card-text text-center mt-2 paragraphcard'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
         </div>
         </Link>     
     </div>
   
     <div className='col-md-3 col-sm-6 mb-4 homecard'>
     <Link to='/services' style={{textDecoration:'none'}}>

         <div className='card py-2 againsub' style={{display:'flex' ,alignItems:'center',justifyContent:'space-between'}}>
             <img src='/images/arrowagain.png' className='imgfirstcard mt-5' alt='Card 2'/>
             <div className='card-body'>
                 <h5 className='card-title text-center mt-2 text-uppercase iamheading'>Mobile Development</h5>
                 <p className='card-text text-center mt-2 paragraphcard'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
         </div>
         </Link>     
     </div>
     <div className='col-md-3 col-sm-6 mb-4 homecard'>
     <Link to='/services' style={{textDecoration:'none'}}>

         <div className='card py-2 againsub' style={{display:'flex' ,alignItems:'center',justifyContent:'space-between'}}>
             <img src='/images/arrowagain.png' className='imgfirstcard mt-5' alt='Card 3'/>
             <div className='card-body'>
                 <h5 className='card-title text-center mt-2 text-uppercase iamheading' >Web Development</h5>
                 <p className='card-text text-center mt-2 paragraphcard'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
         </div>
         </Link>       
     </div>
     <div className='col-md-3 col-sm-6 mb-4 homecard'>
     <Link to='/services' style={{textDecoration:'none'}}>

         <div className='card py-2 againsub' style={{display:'flex' ,alignItems:'center',justifyContent:'space-between'}}>
             <img src='/images/arrowagain.png' className='imgfirstcard mt-5' alt='Card 4'/>
             <div className='card-body'>
                 <h5 className='card-title text-center mt-2 text-uppercase iamheading'>UI/UX Design</h5>
                 <p className='card-text text-center mt-2 paragraphcard'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
         </div>
         </Link>     
     </div>
    </div>
</div>

<div className='container-fluid main-div'>
    <div className='row'>
        <div className='col-md-6 col-sm-12 d-flex justify-content-center align-items-center'>
            <img src='/images/firstimage.jpg' alt='imageloading' className='firstimage img-fluid mt-5'/>
        </div>
        <div className='col-md-6 col-sm-12 d-flex flex-column align-items-start'>
            <div className='text-left mt-5'>
                <p className='font-weight-bold' style={{color: 'rgba(247,156,0,255)', fontSize: '1.2em', fontWeight: 'bolder'}}>
                    End-to-end web development
                </p>
                <h1 style={{color: 'rgba(37,56,100,255)'}}>
                    Get your web development project off the ground today
                </h1>
                <p className='paragraphcard'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <img src='/images/secondimage.jpg' alt='imageloading' className='secondimage img-fluid mt-2'/>
        </div>
    </div>
</div>


<div className="container d-flex flex-column align-items-center text-center py-5">
    <img className="imgfirstcardt mb-4" src="/images/arrowdown.png" alt="loading..." />
    <p className="font-weight-bold" style={{color: 'rgba(247,156,0,255)', fontSize: '1.2em', fontWeight: 'bolder'}}>
        Strategic execution
    </p>
    <h1 style={{color: 'rgba(37,56,100,255)'}}>
        Tailored Managed IT Services that adapt to your evolving business needs
    </h1>
</div>

    {/* Dotted Container */ }

<div className="custom-container my-5">
    <div className="custom-row">
        <div className="custom-col mb-4">
            <div className="custom-dotted-box">
                <div className="custom-number">01</div>
                <h5 className="custom-title">Design<br/>Systems</h5>
                <p className="custom-description">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        <div className="custom-col mb-4">
            <div className="custom-dotted-box">
                <div className="custom-number">02</div>
                <h5 className="custom-title">Product<br/>Strategy</h5>
                <p className="custom-description">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        <div className="custom-col mb-4">
            <div className="custom-dotted-box">
                <div className="custom-number">03</div>
                <h5 className="custom-title">Technology<br/>Planning</h5>
                <p className="custom-description">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        <div className="custom-col mb-4">
            <div className="custom-dotted-box">
                <div className="custom-number">04</div>
                <h5 className="custom-title">Digital<br/>Experiences</h5>
                <p className="custom-description">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        <div className="custom-col mb-4">
            <div className="custom-dotted-box">
                <div className="custom-number">05</div>
                <h5 className="custom-title">IT<br/>Project</h5>
                <p className="custom-description">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        <div className="custom-col mb-4">
            <div className="custom-dotted-box">
                <div className="custom-number">06</div>
                <h5 className="custom-title">Technology<br/>Apps</h5>
                <p className="custom-description">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
    </div>
</div>


<div className="container my-5">
    <div className="row no-gutters">
        <div className="col-md-6">
            <div className="row no-gutters">
                <div className="col-6">
                    <div className="stat-box">
                        <h2 className="stat-percentage">95%</h2>
                        <p className="stat-label">Development</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="stat-box">
                        <h2 className="stat-percentage">83%</h2>
                        <p className="stat-label">Branding</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="stat-box">
                        <h2 className="stat-percentage">97%</h2>
                        <p className="stat-label">IT Services</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="stat-box">
                        <h2 className="stat-percentage">88%</h2>
                        <p className="stat-label">UX Design</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src="/images/focusedteam.jpg" alt="Team working" className="img-fluid main-image"/>
        </div>
    </div>
</div>







<Footer/>




    
 </>     
  );
}

export default Home;