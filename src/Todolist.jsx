
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const getLocalitem = () =>
    {
        let list= localStorage.getItem('lists');

        if (list){
                return JSON.parse(localStorage.getItem('lists'));
        }
        else{
            return [];
        }
        
    }

function Todolist()
{
    const [Activity, setActivity] = useState(' ');
    const [listdata, setlistdata] = useState(getLocalitem());  
    function addActivity()
    {
        setlistdata([...listdata,Activity])
        setActivity('')
   
    }

    function removeActivity(i)
    {
        const updatedlist = listdata.filter((elem,id)=>{
            return i!=id; 
        })

            setlistdata(updatedlist)
        
    }

    //add data to local storage
    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(listdata))  //here lists is name of setitem
    },[listdata]);

    

    return(
        <div>
            <h1>To Do List App</h1><br/>

        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter what to do..."
          aria-label="Enter what to do..."
          aria-describedby="basic-addon2"
          value= {Activity} onChange={(e)=> {
            setActivity(e.target.value)
        }}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={addActivity}>
          Add
        </Button>
        </InputGroup>

            
            {/* render data using map function  */}
            {listdata!=[] && listdata.map((data,i)=>{
                return (
                    <p key={i}> 
                    <div>
                        
                        <li>{data}
                        <input type="checkbox" className="mx-4"/>
                        <Button variant="outline-secondary" id="button-addon2" size="sm" 
                        className="p-0 px-2 mx-4" 
                        onClick={()=>removeActivity(i)}>Remove</Button></li>
                       
                    
                    </div>
                    
                    </p>
                    
                )
            })}
        </div>
    )
}

export default Todolist; 

