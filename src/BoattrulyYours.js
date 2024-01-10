import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import myapi from './Api';
import Footer from './Footer';

export default function BoattrulyYours() {

  const Navigate=useNavigate()

  const [data, setData] = useState(myapi)

  const [isvideoPlaying, setVideoplaying] = useState(false);

  //function to handle video hover
  const handleVideoHover = () => {
    setVideoplaying(true)
    console.log(setVideoplaying)
  };

  //function to handle video hover
  const handleVideoLeave = () => {
    setVideoplaying(false);
  };
  return (
    
    <div className='container-fluid'>
        
        <div className='img-fluid d-flex  container col-xl-4 col-lg-6 col-sm-9 col-10   flex-wrap justify-content-center mb-5'>
            <img className='img-fluid mb-3' src='https://www.boat-lifestyle.com/cdn/shop/files/LP-Personalization_01_1440x.jpg?v=1699608523' />
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <video className='img-fluid mb-3' onClick={()=>Navigate('/smartwatches')}
            controls={true}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://cdn.shopify.com/videos/c/o/v/4444a0f23ad349538118767244751b58.mp4' type='video/mp4' />
          </video>
          <img className='img-fluid' src='https://www.boat-lifestyle.com/cdn/shop/files/LP-Personalization_03_1440x.gif?v=1699608524'/>
          <img className='img-fluid' src='https://www.boat-lifestyle.com/cdn/shop/files/LP-Personalization_04_1440x.jpg?v=1699608523'/>
          <img className='img-fluid' src='https://www.boat-lifestyle.com/cdn/shop/files/LP-Personalization_05_1440x.gif?v=1699608522'/>



          
        </div>

        </div>

        <div className='container-fixed d-flex flex-wrap'>
        <div className='py-3 px-4'>
          <h3>New <b>Launches</b></h3>
        </div>

        <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center my-3' >

          {
            data.map((value, index) => {
              return (<div className='card mb-3' style={{width:"20rem"}}>

                <img src={value.image} className='card-img-top' alt='' onClick={()=>Navigate('/Wiredheadphones1')}/>

                <span className="playback mx-5">{value.battery}</span>

                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <p style={{ fontWeight: "bold", }} className=' amount1 text-success'>{value.price2} <small className='amount'>{value.price3}</small> <small>{value.off1}</small></p>
                  <div className='ok6'>
                  <StarIcon className='staricon' style={{width:"20px"}}></StarIcon>
                  <p className='my-0 mx-1' style={{fontSize:"12px"}}>{value.staricon}</p>
                  <p className='my-0 mx-1' style={{fontSize:"12px"}}>{value.number1}</p>
                  <VerifiedIcon style={{width:"15px", color:"green"}}></VerifiedIcon>
                  </div>
                  <div className="mycircle d-flex flex-wrap justify-content-end align-items-end  ">
                  <p><span style={{background:"grey"}} className='mx-2'></span><span className="two" style={{background:"black"}}></span><h5>+3</h5></p>
                  </div>
                  <a href='#' className='btn1 btn btn-primary' >Add to Cart</a>
                  
                </div>
              </div>)
            })
          }
        </div>
      </div>


      <Footer></Footer>


        
    </div>
  )
    
}
