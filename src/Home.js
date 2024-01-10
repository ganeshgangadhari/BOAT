import React, { useState } from 'react'
import Nav from './Nav'
import myapi from './Api';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import Footer from './Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import snowfall from 'react-snowfall'
import Snowfall from 'react-snowfall';


export default function Home() {

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
    <div style={{position:'relative', overflow:'hidden'}}>
     {/* <Snowfall snowflakeCount={2000} style={{position:'absolute', width:'100%', height:'100%' , zIndex:'1'}}/> */}
      <nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval={2000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Without_Personalization_WEB_Banner_1440x.jpg?v=1703225496" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval={2000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_WEB_1440x.gif?v=1701695553" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval={2000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Combined_Banner_Web_1440x.jpg?v=1703662424" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval={2000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Crest-banner-dark-desktop_1600x.png?v=1699269025" class="d-block w-100" alt="..." />
            </div>
          </div >
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden" >Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </nav>


      <div className='container-fluid'>
        <div className=' cards container-fluid py-3 px-4'>
          <h3>Explore <b>BestSellers</b></h3>
        </div>


        <div className='video d-flex flex-wrap justify-content-center align-items-center'>
          <video className='img-fluid col-xl-2 px-4' onClick={()=>Navigate('/smartwatches')}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4' type='video/mp4' />
          </video>


          <video className='img-fluid col-xl-2 px-4' onClick={()=>Navigate('/airdopes')}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4' type='video/mp4' />
          </video>

          <video className='img-fluid col-xl-2 px-4' onClick={()=>Navigate('/WiredEarphones')}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4' type='video/mp4' />
          </video>

          <video className='img-fluid col-xl-2 px-4' onClick={()=>Navigate('/WirelessHeadphones')}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4' type='video/mp4' />
          </video>
        </div>
      </div>


      <div className='container-fixed d-flex flex-wrap'>
        <div className='py-3 px-4'>
          <h2>Today's <b>offers</b></h2>
        </div>

        <div className='container-fluid mx-3'>
          <img src='https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web_copy_1_1600x.png?v=1701415389' className='rounded img-fluid' alt='' />
        </div>


        <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center my-3' >

          {
            data.map((value, index) => {
              return (<div className='card mb-3' style={{width:"20rem"}}>

                <img src={value.img} className='card-img-top' alt='' onClick={()=>Navigate('/Airdopes1')}/>

                <span className="playback mx-5">{value.playback}</span>

                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p style={{ fontWeight: "bold", }} className=' amount1 text-success'>{value.price} <small className='amount'>{value.price1}</small> <small>{value.off}</small></p>
                  <div className='ok6 my-0'>
                  <StarIcon className='staricon' style={{width:"20px"}}></StarIcon>
                  <p className='my-0 mx-1' style={{fontSize:"12px"}}>{value.staricon}</p>
                  <p className='my-0 mx-1' style={{fontSize:"12px"}}>{value.number}</p>
                  <VerifiedIcon style={{width:"15px", color:"green"}}></VerifiedIcon>
                  </div>
                  <div className="mycircle d-flex flex-wrap justify-content-end align-items-end  ">
                  <p><span style={{background:"grey"}} className='mx-2'></span><span className="two" style={{background:"black"}}></span><h5>+3</h5></p>
                  </div>
                  <a href='#' className='btn1 btn btn-primary'>Add to Cart</a>
                  
                </div>
              </div>)
            })
          }
        </div>
      </div>

      <div className='container-fixed d-flex flex-wrap'>
        <div className='py-3 px-4'>
          <h3>Shop By <b>Categories</b></h3>
        </div>


          <div class="container-fluid d-flex flex-wrap justify-content-around py-2" style={{cursor:"pointer"}}>
            <div class="d-flex flex-column justify-content-center align-items-center " onClick={()=>Navigate('smartwatches')}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.wzFJ0vXao_azi0NMsVYy-gHaHa&pid=Api&P=0&h=180 ' alt=''/>
              <h5 className='my-1'>Smart Watches</h5>
            </div>
            
            <div class="d-flex flex-column justify-content-center align-items-center"  onClick={()=>Navigate('Neckbands')}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.9lLgV6xGYeeu8zvQsCOOkAAAAA&pid=Api&P=0&h=180" alt=''/>
              <h5 className='my-1'>Neck Bands</h5>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center" onClick={()=> Navigate('Airdopes')}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.ejEw5hxhIscHq6k_YDjayQHaHa&pid=Api&P=0&h=180' alt=''  />
              <h5 className='my-1'>True Wireless Earbuds</h5>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center" onClick={()=>Navigate('Wiredheadphones')}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.JE-YVKx963ZrSy-zlp8DDwHaHa&pid=Api&P=0&h=180' alt=''/>
              <h5 className='my-1'>Wired Headphones</h5>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center" onClick={()=>Navigate('WiredEarphones')}>
              <img src='https://tse2.mm.bing.net/th?id=OIP.9meE0sKhzvWpnnJlcHD2rgHaHa&pid=Api&P=0&h=180' alt='' />
              <h5 className='my-1'> Wired Earphones</h5>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center" onClick={()=>Navigate('WirelessHeadphones')}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.Z02lS-a-Fe5U2eF99j41PAHaHa&pid=Api&P=0&h=180' alt=''  />
              <h5 className='my-1'> Wireless Headphones</h5>
            </div>          
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

        <div className='container   d-flex flex-wrap justify-content-center'>
          <div className='d-flex flex-wrap justify-content-center flex-column align-items-center'>
          <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123' style={{width:"150px", }} alt=''/>
          <h5>1 Year Warranty</h5>
          </div>

          <div className='d-flex flex-wrap justify-content-center flex-column align-items-center'>
          <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123' style={{width:"150px", }} alt=''/>
          <h5>7 day-replacement</h5>
          </div>

          <div className='d-flex flex-wrap justify-content-center flex-column align-items-center'>
          <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123'style={{width:"150px"}} alt=''/>
          <h5>Free shipping</h5>
          </div>

          <div className='d-flex flex-wrap justify-content-center flex-column align-items-center'>
          <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123'style={{width:"150px"}} alt=''/>
          <h5>GST Billing</h5>
          </div>

        </div>


      <div className='container-fixed d-flex flex-wrap'>
        <div className='py-3 px-4'>
          <h3>Shop by <b>lifestyle</b></h3>
        </div>


        <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center my-1'>

        <div class="d-flex flex-column justify-content-center align-items-center ">
              <img src='https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687' style={{height:"360px", width:"240px"}} alt=''/>
              <h4 className='my-1'>For Fitness</h4>
            </div>
            
            <div class="d-flex flex-column justify-content-center align-items-center">
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349" style={{height:"360px", width:"240px"}} alt='' />
              <h4 className='my-1'>For Parties</h4>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <img src='https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745' style={{height:"360px", width:"240px"}} alt='' />
              <h4 className='my-1'>For Work</h4>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <img src='https://www.boat-lifestyle.com/cdn/shop/files/Entertainment_2.png?v=1685083746' style={{height:"360px", width:"240px"}}  alt='' />
              <h4 className='my-1'>For Entertainment</h4>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <img src='https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658' style={{height:"360px", width:"240px"}}  alt=''/>
              <h4 className='my-1'> For Audiophile</h4>
            </div>     
        </div>
      </div>  



      <div className='container-fixed d-flex flex-wrap'>
        <div className='py-3 px-4'>
          <h3>Best of <b>boAt</b></h3>
        </div>


        <div className='container-fluid d-flex flex-wrap align-items-center mx-4'>
        <div className='d-flex mx-2 my-4'>
          <button className='mx-3 px-4' style={{borderRadius:"15px"}}><h5 style={{ fontSize:"17px"}}>Best Sellers</h5></button>
          <button className='mx-3 px-4' style={{borderRadius:"15px"}}><h5 style={{fontSize:"17px"}}>Top Watches</h5></button>
          <button className='mx-3 px-4' style={{borderRadius:"15px"}}><h5 style={{fontSize:"17px"}}>Top Earbuds</h5></button>
          <button className='mx-3 px-4' style={{borderRadius:"15px"}}><h5 style={{fontSize:"17px"}}>Top Headphones</h5></button>
        </div>
        </div>
      

        <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center my-2' >

          {
            data.map((value, index) => {
              return (<div className='card my-2' style={{width:"20rem"}}>

                <img src={value.image2} className='card-img-top' alt='' onClick={()=>Navigate('/Airdopes3')}/>

                <span className="playback mx-5">{value.battery1}</span>

                <div className="card-body">
                  <h5 className="card-title">{value.name2}</h5>
                  <p style={{ fontWeight: "bold", }} className=' amount1 text-success'>{value.price4} <small className='amount'>{value.price5}</small> <small>{value.off2}</small></p>
                  <div className='ok6'>
                  <StarIcon className='staricon' style={{width:"20px"}}></StarIcon>
                  <p className='my-0 mx-1' style={{fontSize:"12px"}}>{value.staricon}</p>
                  <p className='my-0 mx-1' style={{fontSize:"12px"}}>{value.number2}</p>
                  <VerifiedIcon style={{width:"15px", color:"green"}}></VerifiedIcon>
                  </div>
                  <div className="mycircle d-flex flex-wrap justify-content-end align-items-end  ">
                  <p><span style={{background:"grey"}} className='mx-2'></span><span className="two" style={{background:"black"}}></span><h5>+3</h5></p>
                  </div>
                  <a href='#' className='btn1 btn btn-primary'>Add to Cart</a>
                  
                </div>
              </div>)
            })
          }
        </div>
      </div>

      <div className='container-fluid mx-2'>
        <div className=' cards container-fluid py-3 px-4'>
          <h3>Join the <b>Tribe</b></h3>
        </div>


        <div className='video d-flex flex-wrap justify-content-center align-items-center'>
          <video className='img-fluid col-xl-2 my-2 mx-2' style={{borderRadius:"15px" ,width:"280px", height:"450px"}}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_n8398cnfdzlxagw1ywk4qsxr.mp4' type='video/mp4' />
          </video>


          <video className='img-fluid col-xl-2 my-2 mx-2' style={{borderRadius:"15px" ,width:"280px", height:"450px"}}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_j88xq8kqgwevksxkcw33z5ub.mp4' type='video/mp4' />
          </video>

          <video className='img-fluid col-xl-2 my-2 mx-2'style={{borderRadius:"15px" ,width:"280px", height:"450px"}}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_qmg4zde9msqpdgmksx9bcuch.mp4' type='video/mp4' />
          </video>

          <video className='img-fluid col-xl-2 my-2 mx-2'style={{borderRadius:"15px" ,width:"280px", height:"450px"}}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_z6nhddzgf86uzhxkok0qvq1k.mp4' type='video/mp4' />
          </video>

          <video className='img-fluid col-xl-2 my-2 mx-2'style={{borderRadius:"15px" ,width:"280px", height:"450px"}}
            autoPlay={true}
            loop={true}
            muted={true}
            onMouseOver={handleVideoHover}
            onMouseLeave={handleVideoLeave}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_f9xuvwl63uaogbcy4zkahqdf.mp4' type='video/mp4' />
          </video>
        </div>
        </div>

      <Footer></Footer>

    </div>

  )
}
