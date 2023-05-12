
'use client';

import React, { useState } from 'react'
import { createServerContext } from 'react';

interface FormData {
    email: string;
    phone: string;
    fullName: string;
    fatherName: string;
    university: string;
    dob: string;
}

const MyForm = () => {

    const [formData, setFormData] = useState<FormData>({
        email: '',
        phone: '',
        fullName: '',
        fatherName: '',
        university: '',
        dob: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      function handleSubmit(e:any){
        console.log(formData,'asjkdhakjsd')
        e.preventDefault()
      }

  return (
    <div>

        <form onSubmit={handleSubmit}>
        <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
        Phone Number:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </label>
        <label>
        Father's Name:
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </label>
        <label>
        University Enrolled In:
        <input type="text" name="university" value={formData.university} onChange={handleChange} />
        </label>
        <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default MyForm;