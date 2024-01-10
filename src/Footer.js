import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';


    const Footer = () => {

    
  return (
    <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h5>Company Name: Boat</h5>
                    <p>About Us : Brand</p>
                    <p>Contact Us : </p> 
                    <p>Let's get social - <FacebookIcon></FacebookIcon> <InstagramIcon></InstagramIcon> <LinkedInIcon></LinkedInIcon> <YouTubeIcon></YouTubeIcon> <GitHubIcon></GitHubIcon></p>
                </div>

                <div className='col-md-4'>
                    <h5>Shop</h5>
                    <p>True Wireless Earbuds</p>
                    <p>Airdopes</p>
                    <p>smartwatches</p>
                    <p>Wired Headphones</p>
                    <p>Neckbands</p>
                </div>

                <div className='col-md-4'>
                    <h5>Connect with Us</h5>
                    <p>Email: ganeshgangadhari2001@gmail.com</p>
                    <p>Mobile No: +91 8291700253</p>
                </div>
            </div>
        </div>

        <div className='text-center'>
            <p className='my-3'>@ {new Date().getFullYear()} Company, Inc. All rights reserved</p>
            <p>Privacy Policy  .  Terms & Conditions</p>
        </div>
    </footer>
  )
  }

  export default Footer;
