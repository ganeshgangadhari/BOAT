import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import myapi5 from './Api5';
import { useNavigate } from 'react-router-dom';
import { addneckband } from './Redux/NeckbandSlice';

export default function Neckbands() {

  const dispatch=useDispatch()

  const Navigate= useNavigate()

  const [data, setData] = useState(myapi5)
  return (
    <div>

      <div className='container-fluid py-4 mx-4'>
        <h4>Neckbands</h4>
      </div>
      <div className='container-fluid'>
        <button className='custom-button mx-4 py-2 px-2' style={{borderRadius:"12px"}}><span className='col-md-6'><TuneIcon></TuneIcon>Filter By<ArrowDropDownIcon></ArrowDropDownIcon></span></button>
      </div>
      <br></br>


      <div className='container-fixed d-flex flex-wrap justify-content-between align-items-center'>

        <div className='d-flex flex-wrap justify-content-center'>

        {
          data.map((value, index) => {
            return (<div className=" card mb-3 py-1 px-1 mx-3" style={{ maxWidth:"540", width: "460px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={value.image2} className="img-fluid " alt="..." onClick={()=>Navigate('/Neckbands1')}/>
                    <span className='hours'>{value.playback2}</span>
                  </div>
                  <div className="col-md-8 py-0 px-0">
                    <div className="card-body py-1">
                      <StarIcon style={{color:"#f4c730", fontSize:"20px"}}></StarIcon><span style={{fontSize:"13px"}}> {value.rating2} | {value.reviews2} </span><VerifiedIcon style={{fontSize:"18px"}}></VerifiedIcon>

                      <h5 className="card-title py-1">{value.name2}</h5>
                      <p style={{fontWeight:"bold"}}className='amount1 text-success'>{value.price4}<small className='amount mx-1'>{value.price5}</small><small className='amount2'>{value.off2}</small></p>
                      <hr className='my-4'></hr>
                      <a onClick={()=>dispatch(addneckband(value))} className='d-flex flex-wrap justify-content-center btn bg-blue btn btn-primary py-2 px-15'>Add to Cart</a>
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
