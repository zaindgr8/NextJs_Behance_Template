import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <>
    <div className=' mx-auto container py-20'>
     <div className='flex-row flex justify-between'>

      <div className=''>
      <h1 className='text-black text-bold text-2xl font-bold'>Mike Delfino</h1>
      </div>
      <div className='flex justify-between w-1/2 text-black'>
        <a>About me</a>
        <a>Portfolio</a>
        <a>Price</a>
        <a>Contact</a>
      </div>
      <div className='flex justify-right gap-2 text-black'>
      <FontAwesomeIcon icon={faFacebook} width={25} height={25}/>
      <FontAwesomeIcon icon={faInstagram} width={25} height={25} />
      <FontAwesomeIcon icon={faLinkedin} width={25} height={25} />

      </div>
     </div>
    </div>
    
    </>
  )
}
