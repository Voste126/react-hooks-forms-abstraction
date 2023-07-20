import React, { useState } from "react";

function Form() {
  const [formData , setFormData] = useState({
    firstName: 'john',
    lastName: 'Henry',
    admin: false,
  })
  // function handleFirstNameChange(event) {
  //   setFormData({...formData,
  //   firstName:event.target.value,})
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData,
  //     lastName:event.target.value,})
  // }
function handleChange(event){
  const name = event.target.name;
  let value = event.target.value;

   // use `checked` property of checkboxes instead of `value`
   if (event.target.type === "checkbox") {
    value = event.target.checked;
  }
 setFormData({
  ...formData,[name]: value,
 })
}
function handleSubmit(event) {
  event.preventDefault();
  console.log(formData);
  <ul>{formData}</ul>
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text"name="firstname" onChange={handleChange} value={formData.firstName} />
      <input type="text" last = "lastname" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin}/>
      <button type="submit"onSubmit={handleSubmit}>Submit</button>
    </form>
    
</>
  );
}

export default Form;
