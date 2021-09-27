import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  
  const handleChange = (event) => {
    //and this return undefined🙂
    event.persist();
    console.log('llllllllllllllllllll', event.persist())
    //setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setValues(values=>({
      ...values,
      [event.target.name]:event.target.value
      
    }))
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvv', values)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // this return undefined why using callback 😥
    callback(values);
    console.log( 'ggggggg',values)
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
