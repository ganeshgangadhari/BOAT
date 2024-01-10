import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './Style.css'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';



export default function Nav() {

  const navigate = useNavigate()

  const airpodes = useSelector((state) => state.airpodes.airpodescart)
  const watches = useSelector((state) => state.watches.watchescart)
  const neckband = useSelector((state) => state.neckband.neckbandcart)
  const wiredheadphone = useSelector((state) => state.wiredheadphone.wiredheadphonecart)
  const wirelessheadphone = useSelector((state) => state.wirelessheadphone.wirelessheadphonecart)
  const wiredearphones = useSelector((state)=> state.wiredearphones.wiredearphonescart)

  const [name, setname] = useState("")
  const [user, setuser] = useState("")

  const handlesubmit = () => {
    if (localStorage.getItem("username")) {
      localStorage.removeItem("username")

    }
    else {
      localStorage.setItem("Username", name)
    }

    navigate("/")

  }
  useEffect(() => {

    const data = localStorage.getItem("Username")

    if (data) {
      //setuser("")
      setuser(data)
    }


  })

  const logout = () => {
    localStorage.removeItem('Username')
    setuser("")
    navigate("/")
  }

  const Navigate = useNavigate()

  return (
    <div>

      <div className='header fs-7 text-center d-flex align-item-center justify-content-center rootelement col-12'>
        <p className='boat my-2'>"Catch the year ultimate crossover"
          <b>Boat X Archieve</b>
          "btrings to you"
          <b>Riverable Rocker</b>
          "Shop Now!"
        </p>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="img container-fluid my-3">
          <div className='img-fluid mx-3' style={{ cursor: "pointer" }}>
            <img src='https://www.boat-lifestyle.com/cdn/shop/files/christmas-logo_small.png?v=1703230694' style={{ height: "35px" }} onClick={() => Navigate('/')} />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li class="nav-item mx-3">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                <ul class="dropdown-menu mx-5" aria-labelledby="navbarDropdown">
                  <table className='my-3 mx-3' style={{ cursor: "pointer" }}>
                    <tr>
                      <td onClick={() => Navigate('Airdopes')}>
                        <img src='https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062' className='my-2 mx-2' style={{ height: "80px" }} />
                        <a style={{ fontSize: "13px" }}>Airdopes</a>
                      </td>

                      <td onClick={() => Navigate('Neckbands')}>
                        <img src='https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287' className='mx-2' style={{ height: "80px" }} />
                        <a style={{ fontSize: "13px" }}>Neckbands</a>
                      </td>

                      <td onClick={() => Navigate('Wirelessheadphones')}>
                        <img src='https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854' className='mx-2' style={{ height: "80px" }} />
                        <a style={{ fontSize: "13px" }}>Wireless Headphones</a>
                      </td>
                    </tr>

                    <tr>
                      <td onClick={() => Navigate('Smartwatches')}>
                        <img src='https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668' className='my-4 mx-2' style={{ height: "80px" }} />
                        <a style={{ fontSize: "13px" }}>Smartwatches</a>
                      </td>

                      <td onClick={() => Navigate('Wiredheadphones')}>
                        <img src='https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853' className='mx-2' style={{ height: "80px" }} />
                        <a style={{ fontSize: "13px" }}>Wired Headphones</a>
                      </td>

                      <td onClick={() => Navigate('WiredEarphones')} >
                        <img src='https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854' className='mx-2' style={{ height: "80px" }} />
                        <a style={{ fontSize: "13px" }}>Wired Earphones</a>
                      </td>
                    </tr>

                  </table>
                </ul>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" style={{ cursor: "pointer" }} onClick={() => Navigate("/BoattrulyYours")} >boAt Truly Yours</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#"> Gift with boAt</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Corporate Orders</a>
              </li>

            </ul>
            <form class="d-flex mx-2">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success " type="submit">Search</button>
            </form>


            <div className="login dropdown">
              <button className="btn btn-white" data-bs-toggle="dropdown">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989" style={{ cursor: "pointer", height: "26px" }}></img>
              </button>
              <ul className=" text-center dropdown-menu" aria-labelledby="dropdownMenuButton1">

                <button type="button" className="btn-close d-flex" style={{ fontSize: "13px", float: "right" }}></button>

                <li><p className="fs-5 fw-italic" style={{ marginTop: "15px" }} >Hi {user ? (user) : (<>boAt!</>)}</p></li>


                {
                  user ? (
                    <>
                      <a class="btn btn-dark px-5" onClick={logout} role="button">LogOut</a>

                    </>

                  ) : (

                    <>
                      <li><a class=" btn btn-dark px-5" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Login</a></li>

                    </>

                  )

                }



              </ul>
            </div>
            <button type="button" className='' style={{border:"none"}}>
            <LocalMallOutlinedIcon  style={{ cursor: "pointer", fontSize: "30px" }} onClick={() => { Navigate("/cart") }}></LocalMallOutlinedIcon>
              <span className=" top-0 start-100 translate-middle badge bg-danger" style={{fontSize:"10px"}}>
              {airpodes.length + watches.length + neckband.length + wirelessheadphone.length + wiredearphones.length + wiredheadphone.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button> 


            
          </div>
        </div>
      </nav>

      <>
        <form >
          <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <a><h5 className="modal-title" style={{ marginLeft: "170px" }} id="exampleModalToggleLabel">Get <b>Started</b></h5></a>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>


                <p style={{ fontFamily: "sans-serif", marginLeft: "100px" }} className=' my-3'>Please Enter Your Name to Continue </p>
                <div className="modal-body">

                  <p className='my-1'><h5>Please Enter Your Name: <input type="text" placeholder='Username' onChange={(e) => { setname(e.target.value) }} style={{ borderRadius: "5px", height: "30px" }} /></h5></p>

                  <button type="button" className='my-4 btn btn-success' data-bs-dismiss="modal" onClick={handlesubmit} style={{ marginLeft: "180px", width: "100px", borderRadius: "8px", fontSize: "20px", fontFamily: "sans-serif" }}>Submit</button>

                  <p className='text-center' style={{ fontSize: "12px" }}>By Confirming, you agree to boAt's Terms and Conditions and <p className='text-center'>Privacy Policy.</p></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>

    </div>
  )
}
