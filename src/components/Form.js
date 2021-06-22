import React, { useState } from "react";

function Form(props) {
  console.log(props);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //place the data user inputted in an object.
    if(firstName.length > 0) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      /**the state variable starts out as an empty array. We want to create a new array thatll render new stuff when value 
       * is put in by user. So we create an array. In that array, we want to put whatever submited data there was at first, then
       * add the new data the user put in. Then that new array gets set as the state variable via its setter function.
       */
      const dataArray = [...submittedData , formData]
      setSubmittedData(dataArray);
      //then to clear the form, we set the fields for names to be blank
      setFirstName("");
      setLastName("");
    } 
    else {
      setErrors(["First name is required!"]);
    }
  }


  //iterate over the sumitted data array and display the first and last name for each submission
  const listOfSubmissions = submittedData.map( (data, index)=>{
    return(
      <>
        <p key={index}>{data.firstName} {data.lastName}</p>
      </>
    );
  } );

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0 ? errors.map( (error, index)=> { return(
      <p key={index} style={{color: "red"}}>{error}</p>
    )} ) : null}
    <h3>Submissions
      {listOfSubmissions}
    </h3>
    </>
  );
}

export default Form;
