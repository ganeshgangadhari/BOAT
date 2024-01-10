import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeairpods } from './cartSlice'
import { removewatches } from './watchesSlice'
import { removeneckband } from './NeckbandSlice'
import { removewiredheadphone } from './WiredheadphonesSlice'
import { removewirelessheadphone } from './WirelessHPSlice'
import { removewiredearphones } from './WiredEarphonesSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router-dom'
import {incrementairpodes} from './cartSlice'
import {increamentwatches} from './watchesSlice'
import {incrementneckband} from './NeckbandSlice'
import { incrementwirelessheadphone } from './WirelessHPSlice'
import {incrementwiredheadphone} from './WiredheadphonesSlice'
import { incrementwiredearphones } from './WiredEarphonesSlice'
import { decrementairpodes } from './cartSlice'
import {decrementwatches} from './watchesSlice'
import {decrementneckband} from './NeckbandSlice'
import {decrementwirelessheadphone} from './WirelessHPSlice'
import {decrementwiredheadphone } from './WiredheadphonesSlice'
import { decrementwiredearphones } from './WiredEarphonesSlice'



export default function Cart() {

    const dispatch = useDispatch()

    const Navigate = useNavigate()

    // step 3
    const airpodes = useSelector((state) => state.airpodes.airpodescart);
    const airpodesTotal = useSelector((state) => state.airpodes.airpodesTotal);
    
    const watches = useSelector((state) => state.watches.watchescart)
    const watchestotal = useSelector((state) => state.watches.watchestotal)

    const neckband = useSelector((state) => state.neckband.neckbandcart)
    const neckbandtotal = useSelector((state) => state.neckband.neckbandtotal)

    const wiredheadphone = useSelector((state) => state.wiredheadphone.wiredheadphonecart)
    const wiredheadphonetotal = useSelector((state) => state.wiredheadphone.wiredheadphonetotal)

    const wirelessheadphone = useSelector((state) => state.wirelessheadphone.wirelessheadphonecart)
    const wirelessheadphonetotal = useSelector((state) => state.wirelessheadphone.wirelessheadphonetotal)

    const wiredearphones = useSelector((state) => state.wiredearphones.wiredearphonescart)
    const wiredearphonestotal = useSelector((state) => state.wiredearphones.wiredearphonestotal)

    //const data = useSelector((state) => state.mycart)

    //onClick={()=>(dispatch(incrementairpodes(value)))}


    useEffect(()=>{
        const carddata ={
            airpodes,
            watches,
            neckband,
            wiredheadphone,
            wirelessheadphone,
            wiredearphones
        };

    },[airpodes,watches,neckband,wiredheadphone,wirelessheadphone,wiredearphones]);

    return (
        <div>

            <div className='container-fluid'>
                <section className=" h-custom">
                    <div className="container my-4">
                        <div className=" d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-12  col-xl-12 ">
                                <div className=" bg-light  card-registration card-registration-2 " style={{ borderRadius: 15 }}>
                                    <div className="card-body p-0">


                                        <div className="row g-0">

                                            <div className="col-lg-8  col-xl-8    ">
                                                <div className="p-5">
                                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                        <h6 className="mb-0 text-muted">{airpodes.length + watches.length + neckband.length + wiredheadphone.length + wirelessheadphone.length + wiredearphones.length}</h6>
                                                    </div>
                                                    <hr className="my-4" />
                                                    {
                                                        airpodes?.map((value, index) => {
                                                            return (
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src={value.image1} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                        <span className='hours'>{value.playback1}</span>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2">
                                                                        <h6 className="text-black" style={{fontSize:"18px"}}>{value.name1}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                        <div className="col mx-4" style={{cursor:"pointer"}}>
                                                                            <span style={{fontSize:"30px"}} className='mx-2' onClick={()=>(dispatch(decrementairpodes(value)))}>-</span>
                                                                            <span  className="" style={{fontSize:"20px"}}>
                                                                               {value.airpodesQuantity}
                                                                            </span>
                                                                            <span style={{fontSize:"25px"}} className='mx-2' onClick={()=>(dispatch(incrementairpodes(value)))}>+</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">₹ {value.price2}</h6>

                                                                        <h6 className="mb-0">{value.off1}</h6>
                                                                    </div>
                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a className="text-muted"><DeleteIcon onClick={() => (dispatch(removeairpods(value.id)))} style={{ cursor: "pointer" }}></DeleteIcon></a>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    {
                                                        watches?.map((value, index) => {
                                                            return (
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src={value.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                        <span className='hours'>{value.playback}</span>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2">

                                                                        <h6 className="text-black mb-0">{value.name}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                        <div className="col mx-4 " style={{cursor:"pointer"}}>
                                                                            <span style={{fontSize:"30px"}} className='mx-2' onClick={()=>(dispatch(decrementwatches(value)))} >-</span>
                                                                            <span  className="" style={{fontSize:"23px"}}>
                                                                               {value.watchesQuantity}
                                                                            </span>
                                                                            <span style={{fontSize:"25px"}} className='mx-2' onClick={()=>(dispatch(increamentwatches(value)))}>+</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0"> ₹ {value.price}</h6>

                                                                        <h6 className="mb-0">{value.off}</h6>
                                                                    </div>
                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a className="text-muted"><DeleteIcon onClick={() => (dispatch(removewatches(value.id)))} style={{ cursor: "pointer" }}></DeleteIcon></a>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }


                                                    {
                                                        neckband?.map((value, index) => {
                                                            return (
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src={value.image2} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                        <span className='hours'>{value.playback2}</span>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2">

                                                                        <h6 className="text-black mb-0">{value.name2}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    <div className="col mx-4" style={{cursor:"pointer"}}>
                                                                            <span style={{fontSize:"30px"}} className='mx-2' onClick={()=>(dispatch(decrementneckband(value)))}>-</span>
                                                                            <span  className="" style={{fontSize:"20px"}}>
                                                                               {value.neckbandQuantity}
                                                                            </span>
                                                                            <span style={{fontSize:"25px"}} className='mx-2' onClick={()=>(dispatch(incrementneckband(value)))}>+</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">₹ {value.price4}</h6>

                                                                        <h6 className="mb-0">{value.off2}</h6>
                                                                    </div>
                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a className="text-muted"><DeleteIcon onClick={() => (dispatch(removeneckband(value.id)))} style={{ cursor: "pointer" }}></DeleteIcon></a>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }


                                                    {
                                                        wiredheadphone?.map((value, index) => {
                                                            return (
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src={value.image3} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                        <span className='hours'>{value.playback3}</span>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2">

                                                                        <h6 className="text-black mb-0">{value.name3}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    <div className="col mx-4"style={{cursor:"pointer"}}>
                                                                            <span style={{fontSize:"30px"}} className='mx-2' onClick={()=>(dispatch(decrementwiredheadphone(value)))}>-</span>
                                                                            <span  className="" style={{fontSize:"20px"}}>
                                                                               {value.wiredheadphonesQuantity}
                                                                            </span>
                                                                            <span style={{fontSize:"25px"}} className='mx-2' onClick={()=>(dispatch(incrementwiredheadphone(value)))}>+</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">₹ {value.price6}</h6>
                                                                        <h6 className="mb-0">{value.off3}</h6>
                                                                    </div>
                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a className="text-muted"><DeleteIcon onClick={() => (dispatch(removewiredheadphone(value.id)))} style={{ cursor: "pointer" }}></DeleteIcon></a>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }


                                                    {
                                                        wirelessheadphone?.map((value, index) => {
                                                            return (
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src={value.image4} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                        <span className='hours'>{value.playback4}</span>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2">

                                                                        <h6 className="text-black mb-0">{value.name4}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    <div className="col mx-4"style={{cursor:"pointer"}}>
                                                                            <span style={{fontSize:"30px"}} className='mx-2' onClick={()=>(dispatch(decrementwirelessheadphone(value)))}>-</span>
                                                                            <span  className="" style={{fontSize:"20px"}}>
                                                                               {value.wirelessheadphonesQuantity}
                                                                            </span>
                                                                            <span style={{fontSize:"25px"}} className='mx-2' onClick={()=>(dispatch(incrementwirelessheadphone(value)))}>+</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">₹ {value.price8}</h6>
                                                                        <h6 className="mb-0">{value.off4}</h6>
                                                                    </div>
                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a className="text-muted"><DeleteIcon onClick={() => (dispatch(removewirelessheadphone(value.id)))} style={{ cursor: "pointer" }}></DeleteIcon></a>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }



                                                    {
                                                        wiredearphones?.map((value, index) => {
                                                            return (
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src={value.image5} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                        <span className='hours'>{value.playback5}</span>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2">

                                                                        <h6 className="text-black mb-0">{value.name5}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    <div className="col mx-4"style={{cursor:"pointer"}}>
                                                                            <span style={{fontSize:"30px"}} className='mx-2' onClick={()=>(dispatch(decrementwiredearphones(value)))}>-</span>
                                                                            <span  className="" style={{fontSize:"20px"}}>
                                                                               {value.WiredearphonesQuantity}
                                                                            </span>
                                                                            <span style={{fontSize:"25px"}} className='mx-2' onClick={()=>(dispatch(incrementwiredearphones(value)))}>+</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">₹ {value.price10}</h6>
                                                                        <h6 className="mb-0">{value.off5}</h6>
                                                                    </div>
                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a className="text-muted"><DeleteIcon onClick={() => (dispatch(removewiredearphones(value.id)))} style={{ cursor: "pointer" }}></DeleteIcon></a>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    <div className="pt-5">
                                                        <h6 className="mb-0"><a className="text-body" onClick={() => Navigate("/")} style={{ cursor: "pointer" }}>Back to shop</a></h6>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-4 bg-grey">
                                                <div className="p-5">
                                                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <h5 className="text-uppercase">items {airpodes.length + watches.length + neckband.length + wiredheadphone.length + wirelessheadphone.length + wiredearphones.length}</h5>
                                                        <h5>₹{airpodesTotal + watchestotal + neckbandtotal + wirelessheadphonetotal + wiredheadphonetotal + wiredearphonestotal}</h5>
                                                    </div>
                                                    <h5 className="text-uppercase mb-3">Shipping</h5>
                                                    <div className="mb-4 pb-2">
                                                        <select className="select">
                                                            <option value={1}>Standard-Delivery- ₹5.00</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                            <option value={4}>Four</option>
                                                        </select>
                                                    </div>
                                                    <h5 className="text-uppercase mb-3">Give code</h5>
                                                    <div className="mb-5">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                        </div>
                                                    </div>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between mb-5">
                                                        <h5 className="text-uppercase">Total price</h5>
                                                        <h5>₹{airpodesTotal + watchestotal + neckbandtotal + wirelessheadphonetotal + wiredheadphonetotal + wiredearphonestotal}</h5>
                                                    </div>
                                                    <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" style={{width:"150px"}} onClick={() => Navigate("/order")}>Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>






        </div>
    )
}

