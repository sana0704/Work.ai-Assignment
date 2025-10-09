
import React from 'react'
import {useForm} from "react-hook-form"

const ReferralForm = () => {
const{
  register,
  handleSubmit,
  formState: { errors },}=useForm();

// const onsubmit =(data)=> console.log(data)

const onSubmit = async (data) => {
    
    const formData = new FormData();
    formData.append("name", data.Name);
    formData.append("email", data.email);
    formData.append("phone", data.phoneNumber);
    formData.append("jobTitle", data.jobTitle);
    if (data.resume && data.resume.length > 0) {
      formData.append("resume", data.resume[0]); 
    }

    try {
      const response = await fetch("http://localhost:5000/api/candidates", {
        method: "POST",
        body: formData, 
      });

      if (!response.ok) throw new Error("Failed to submit form");
      const result = await response.json();
      alert("Candidate referred successfully!");
    } catch (error) {
      alert("Something went wrong while submitting");
    }
  };

  return (
    <div>
      <h3>Refer a candidate</h3>
     <form onSubmit={handleSubmit(onSubmit)}>

<input type='text' placeholder='Name'{...register("Name",{required: true, minLength:{value: 3,
 message: 'min length is 3'}, maxLength:{value:8,message: 'max length is 8'}})}/>
{errors.Name && <p>{errors.Name.message}</p>}
<br />


<input type="text" placeholder='email@gmail.com'{...register("email" ,{required : {value: true ,message:'this field is required'} })}/>
{errors.email && <p>{errors.email.message}</p>}


<input type='text' placeholder = 'phoneNumber' {...register("phoneNumber",
  { required: "Phone number is required",maxLength:{value:10 ,message: 'max length is 10'} })} />
  {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
<br />

<input type='text' placeholder='JobTitle' {...register("jobTitle",{ required: "Job title is required" })} />
 {errors.jobTitle && <p>{errors.jobTitle.message}</p>}
<br />

<input type='file' accept='.pdf' {...register('resume')}/>
<br/>

<input type='submit' value="submit"/>
     </form>
    </div>
  );
};

export default ReferralForm;
