import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import myapi3 from './Api3';
import CircleIcon from '@mui/icons-material/Circle';
import Footer from './Footer';

export default function Neckbands2() {

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
                            <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-2_72x.png?v=1671194172' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/original-imagg2y7hynfs6js_72x.webp?v=1685701563' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/original-imagg2y7yfrncm89_72x.webp?v=1685701562' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/original-imagg2y7qmuabgu3_72x.webp?v=1685701562' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
                        <div className=' my-2 mx-5'>
                            <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/original-imagg2y7wqmj7rbz_72x.webp?v=1685701561' alt='' style={{ height: "65px", border: "0.1rem solid lightgrey", borderRadius: "8px" }} />
                        </div>
            
                    </div>

                    <div className='container-fluid d-flex flex-wrap mx-2' style={{ border: "1px solid lightgrey", backgroundColor: "lightgray", borderRadius: "10px" }} >
                        <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-2_600x.png?v=1671194172' className='img-fluid' />
                    </div>
                </div>



                <div className='container-fixed col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-5'>

                    {
                        data.map((value, index) => {
                            return (<div>
                                <div className='mx-3'>
                                    <div className='d-flex'>
                                        <StarIcon className='staricon my-4 mx-1' style={{ width: "19px" }}></StarIcon>
                                        <p className='my-4 ' style={{ fontSize: "15px" }}>{value.category51}</p>
                                        <p className='my-4 mx-1' style={{ fontSize: "15px" }}>{value.category52}</p>
                                        <VerifiedIcon className='my-4 ' style={{ width: "15px", color: "green" }}></VerifiedIcon>
                                    </div>
                                    <h5 className='fs-2 mb-2'>{value.category53}</h5>
                                    <p style={{ fontSize: "13px" }}>Wireless Earbuds with upto 60 Hours playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</p>
                                    <p className='fs-4' style={{ fontSize: "20px", }}>{value.category54}<span className='fs-6 mx-1' style={{ textDecoration: "line-through" }}>{value.category55} </span> <span style={{color:"green"}}>{value.category56} </span></p>

                                    <h5 className='fs-6'>{value.category57}</h5>

                                    <p className='my-3'><CircleIcon className='mx-1' style={{ fontSize: "40px", color: "black" }} /><CircleIcon className='mx-1' style={{ fontSize: "40px", color: "pink" }} />
                                        <CircleIcon className='mx-1' style={{ fontSize: "40px", color: "darkslategray" }} /><CircleIcon className='mx-1' style={{ fontSize: "40px", color: "darkgreen" }} /></p>
                                    <hr></hr>
                                    <h5 className='my-4' style={{ fontSize: "18px" }}>Free delivery | Fastest delivery by {new Date().getFullYear()}</h5>

                                    <a className='btn2 btn btn-primary bg-blue py-2'>{value.category58}</a>

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


            </div>

            <Footer></Footer>

        </div>
  )
}
