import React, { useContext, useEffect } from 'react';
import { SettingsContext } from './contaxt';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'


export default function Forms() {
  const settingcontext = useContext(SettingsContext);

  function handleChange(e) {

    if (e.target.name == 'number') {
      //to change the itemsPerPage
      settingcontext.setitemsPerPage(e.target.value);
      //store that on local storge 
      localStorage.setItem('number', e.target.value);
    }
    if (e.target.name == 'completed') {
      //to change the show 
      settingcontext.setShow(e.target.value);
      //store inside localstorge
      localStorage.setItem('completed', e.target.value);
    }
  }
  useEffect(() => {
    //get data from localStorge

    const items = parseInt(localStorage.getItem('number'));
    const completed = localStorage.getItem('completed');
    //change the itemsPerPage depend on localstorge
    settingcontext.setitemsPerPage(items);
    settingcontext.setShow(completed);
  }, []);
  return (
    <>
      <div>
        <h4>TO DO Settings 📝 : </h4>



        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>enter number item </Form.Label>
            <Form.Control type="number" onChange={handleChange} min='1' max='10' name='number' value={settingcontext.itemsPerPage} />
            📋✅
            <Form.Select aria-label="Default select example" name='completed' value={settingcontext.show} onChange={handleChange}>

              <option value="true">True</option>
              <option value="false">False</option>

            </Form.Select>
          </Form.Group>

        </Form>



      </div>
    </>
  );
}