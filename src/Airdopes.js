import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import myapi1 from './Api1';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import Footer from './Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addairpods } from './Redux/cartSlice';

export default function About() {

  const dispatch=useDispatch()
  
  const Navigate=useNavigate()

  const [data, setData] = useState(myapi1)
  return (
    <div>

      <div className='container-fluid py-4 mx-4'>
        <h4>Airdopes</h4>
      </div>
      <div className='container-fluid'>
        <button className='custom-button mx-4 py-2 px-2' style={{borderRadius:"8px"}}><span className='col-md-6'><TuneIcon></TuneIcon>Filter By<ArrowDropDownIcon></ArrowDropDownIcon></span></button>
      </div>
      <br></br>


      <div className='container-fixed d-flex flex-wrap justify-content-between align-items-center'>

        <div className='d-flex flex-wrap justify-content-center'>

        {
          data.map((value, index) => {
            return (<div className=" card mb-3 py-1 px-1 mx-3" style={{ maxWidth:"540", width: "460px" }}>
                <div className="row g-0">
                  <div className="col-md-4 imgbox">
                    <img src={value.image1} onClick={()=>Navigate('/airdopes1')} className="img-fluid " alt="..." />
                    <span className='hours'>{value.playback1}</span>
                  </div>
                  <div className="col-md-8 py-0 px-0">
                    <div className="card-body py-1">
                      <StarIcon style={{color:"#f4c730", fontSize:"20px"}}></StarIcon><span style={{fontSize:"13px"}}> {value.rating1} | {value.reviews1} </span><VerifiedIcon style={{fontSize:"18px"}}></VerifiedIcon>

                      <h5 className="card-title py-1">{value.name1}</h5>
                      <p style={{fontWeight:"bold"}}className='amount1 text-success'>{value.price2}<small className='amount mx-1'>{value.price3}</small><small className='amount2'>{value.off1}</small></p>
                      <hr className='my-4'></hr>
                      <a onClick={()=>{dispatch(addairpods(value))}} className='d-flex flex-wrap justify-content-center btn bg-blue btn btn-primary py-2 px-15'>Add to Cart</a>
                    </div>
                  </div>
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
