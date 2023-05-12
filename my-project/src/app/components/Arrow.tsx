import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Arrow() {
  return (
    <>
    <div className='absolute left-0 right-0 mx-auto ml-20'>
    <FontAwesomeIcon icon={faChevronDown} height={"110vh"} width={"10vh"} />
    </div>
    </>
  )
}
