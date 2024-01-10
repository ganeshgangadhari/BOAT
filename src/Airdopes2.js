import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import myapi3 from './Api3';
import CircleIcon from '@mui/icons-material/Circle';
import Footer from './Footer';

export default function Airdopes2() {

    const [data, setData] = useState(myapi3)

    const [isvideoPlaying, setVideoplaying] = useState(false);

    const handleVideoHover = () => {
        setVideoplaying(true)
            ;
    }

    const handleVideoLeave = () => {
        setVideoplaying(false)
    }


  return (
    <div>


            <div className='container-fixed d-flex flex-wrap'  >
                <div className='container-fixed d-flex col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  my-5'>
                    <div>
                        <div className='my-2 mx-5'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_72x.png?v=1641206192' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/A161PP.386_72x.png?v=1698400100' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Black4_72x.jpg?v=1702007944' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Black2_72x.jpg?v=1702007944' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Black3_72x.jpg?v=1702007944' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className='my-2 mx-5'>
                            <img src='https://www.boat-lifestyle.com/cdn/shop/files/Black1_72x.jpg?v=1702007944' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                    </div>

                    <div className='container-fluid d-flex flex-wrap mx-2' style={{ border: "1px solid lightgrey", backgroundColor: "lightgray", borderRadius: "10px" }} >
                        <img src='https://www.boat-lifestyle.com/cdn/shop/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_600x.png?v=1641206192' className='img-fluid' />
                    </div>
                </div>



                <div className='container-fixed col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-5'>

                    {
                        data.map((value, index) => {
                            return (<div>
                                <div className='mx-3'>
                                    <div className='d-flex'>
                                        <StarIcon className='staricon my-4 mx-1' style={{ width: "19px" }}></StarIcon>
                                        <p className='my-4 ' style={{ fontSize: "15px" }}>{value.category11}</p>
                                        <p className='my-4 mx-1' style={{ fontSize: "15px" }}>{value.category12}</p>
                                        <VerifiedIcon className='my-4 ' style={{ width: "15px", color: "green" }}></VerifiedIcon>
                                    </div>
                                    <h5 className='fs-2 mb-2'>{value.category13}</h5>
                                    <p style={{ fontSize: "13px" }}>Wireless Earbuds with upto 60 Hours playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</p>
                                    <p className='fs-4' style={{ fontSize: "20px", }}>{value.category14}<span className='fs-6 mx-1' style={{ textDecoration: "line-through" }}>{value.category15} </span> <span style={{color:"green"}}>{value.category16} </span></p>

                                    <h5 className='fs-6'>{value.category17}</h5>

                                    <p className='my-3'><CircleIcon className='mx-1' style={{ fontSize: "40px", color: "grey" }} /><CircleIcon className='mx-1' style={{ fontSize: "40px", color: "black" }} />
                                        <CircleIcon className='mx-1' style={{ fontSize: "40px", color: "darkblue" }} />
                                        <CircleIcon className='mx-1' style={{ fontSize: "40px", color: "darkslategray" }} /><CircleIcon className='mx-1' style={{ fontSize: "40px", color: "darkolivegreen" }} /></p>
                                    <hr></hr>
                                    <h5 className='my-4' style={{ fontSize: "18px" }}>Free delivery | Fastest delivery by {new Date().getFullYear()}</h5>

                                    <a className='btn2 btn btn-primary bg-blue py-2'>{value.category18}</a>

                                </div>
                            </div>)
                        })
                    }
                </div>


                <div className='container   d-flex flex-wrap justify-content-center mb-3'>
                    <div className='d-flex flex-wrap justify-content-center flex-column align-items-center mx-5'>
                        <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123' style={{ width: "100px", }} alt='' />
                        <h5>1 Year Warranty</h5>
                    </div>

                    <div className='d-flex flex-wrap justify-content-center flex-column align-items-center mx-5'>
                        <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123' style={{ width: "100px", }} alt='' />
                        <h5>7 day-replacement</h5>
                    </div>

                    <div className='d-flex flex-wrap justify-content-center flex-column align-items-center mx-5'>
                        <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123' style={{ width: "100px" }} alt='' />
                        <h5>Free shipping</h5>
                    </div>

                    <div className='d-flex flex-wrap justify-content-center flex-column align-items-center mx-5'>
                        <img className='mx-3' src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123' style={{ width: "100px" }} alt='' />
                        <h5>GST Billing</h5>
                    </div>

                </div>



                <div className='container-fixed d-flex flex-wrap mb-4'>

                    <div className=' container-fixed video d-flex flex-wrap justify-content-center' >
                        <video className='img-fluid  px-4'
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            onMouseOver={handleVideoHover}
                            onMouseLeave={handleVideoLeave}>
                            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_actxyhk80k7qew6mft65ouhl.mp4' type='video/mp4' />
                        </video>


                        <video className='img-fluid px-4 '
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            onMouseOver={handleVideoHover}
                            onMouseLeave={handleVideoLeave}>
                            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_fhwkpi19k0ushul5psicv8qn.mp4' type='video/mp4' />
                        </video>

                        <video className='img-fluid px-4'
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            onMouseOver={handleVideoHover}
                            onMouseLeave={handleVideoLeave}>
                            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_sacvyz8p0tjvh535d4ybcz5m.mp4' type='video/mp4' />
                        </video>

                        <video className='img-fluid px-4'
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            onMouseOver={handleVideoHover}
                            onMouseLeave={handleVideoLeave}>
                            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_xzwboahsyh63qevxlkilnc0l.mp4' type='video/mp4' />
                        </video>
                    </div>
                </div>



            </div>

            <Footer></Footer>

        </div>
  )
}
