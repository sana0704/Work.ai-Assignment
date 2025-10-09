
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
      console.log("Server response:", result);
      alert("Candidate referred successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong while submitting");
    }
  };

  return (
    <div>
      <h3>Refer a candidate</h3>
     <form action={handleSubmit(onSubmit)}>

<input placeholder='name' {...register("Name",{required: true,minLength:3,maxLength:10})} 
type='text' />
{errors.Name && <div>There is Some error in name</div>}
<br />


<input placeholder='email@gmail.com'{...register("email")} type='text'/>
<br />
<input placeholder = 'phoneNumber' {...register("phoneNumber")} type='text'/>
<br />
<input placeholder='JobTitle' {...register("jobTitle")} type='text'/>
<br />
<input type='file' placeholder='upload resume' accept='.pdf' {...register('resume')}/>
<br/>
<input type='submit' value="submit"/>
     </form>
    </div>
  )
}

export default ReferralForm;
