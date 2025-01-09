import { useState } from "react";

const Fullname = () => {

    const [formdata,setFormData]=useState({
        FirstName :'',
        LastName:''
    });
    const [error, setError] = useState("");
    const [showName,setshowName]=useState(false);
    const handleSumbmit =(e)=>{
        e.preventDefault();
        setshowName(validateInput(formdata));
        
    }
    function validateInput(names){

        if(names.FirstName.trim()==='')
        {
            setError("FirstName is required!");
            return false;
        }
        else if(names.LastName.trim()===''){
            setError("LastName is required!");
            return false;
        }
        return true;

    }
    const handleChange =(e)=>{
        setError('');
         const {name,value}=e.target;
         console.log(name,value);
         setFormData((prevValue)=>({
            ...prevValue,
            [name]: value,
         }));
    }
  return (
    <form>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <label>FirstName</label>
          <input type="text" name="FirstName"  value={formdata.FirstName}
             onChange={handleChange} required  />
        </div>
        <div style={{ display: "flex" }}>
          <label>LastName</label>
          <input type="text" name="LastName" value={formdata.LastName} onChange={handleChange} required />
        </div>
        <div style={{ display: "flex" }}>
           <button id="btnSave" type="button" value="Submit"   onClick={handleSumbmit} >Submit</button> 
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {showName==true ? 
        (<DispayName firstname={formdata.FirstName} lastname={formdata.LastName}></DispayName>)
        :(<></>)}
      </div>
    </form>
  );
};
const DispayName = ({firstname,lastname}) =>{
    
return (<>
 <div style={{display:"flex"}}>
    Full name : {firstname} {lastname}
</div> 
 
</>)
};
export default Fullname;
