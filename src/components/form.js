import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    
    callback(values);
    console.log( 'ggggggg',callback(values))
  };

  const handleChange = (event) => {
    event.persist();
    console.log('llllllllllllllllllll', event.persist())
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvv', values)
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
