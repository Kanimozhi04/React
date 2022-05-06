import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {changeEmpName} from './app/Slice';

function Content()
{ 
    const [empName,setempName]=useState("");
    const dispatch=useDispatch();
    const onFormSubmit=(event)=>{
        event.preventDefault();
        dispatch(changeEmpName({empName}));

    };
    
    return(
        
          <div className="content">
            <form  onSubmit={onFormSubmit}>
              <label>Employee Name:</label>
              <input type="text"  onKeyUp={(e)=>{ setempName(e.target.value);}} placeholder="Enter Emp name"/>
              <input className="button" type="submit"/>
    
            </form>
          </div>
        
    );
}
export default Content;