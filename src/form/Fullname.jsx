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
    <><form onSubmit={handleSumbmit}>
          <h2>Full Name Display</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                  <label>First Name : </label>
                  <input type="text" name="FirstName" value={formdata.FirstName}
                      onChange={handleChange} required />
              </div>
              <div style={{ display: "flex" }}>
                  <label>Last Name : </label>
                  <input type="text" name="LastName" value={formdata.LastName} onChange={handleChange} required />
              </div>
              <div style={{ display: "flex" }}>
                  <button type="submit">Submit</button>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}

          </div>
      </form> 
              {showName === true ?
                  (<DispayName firstname={formdata.FirstName} lastname={formdata.LastName}></DispayName>)
                  : (<></>)}
           </>
  );
};
const DispayName = ({firstname,lastname}) =>{
    
return (<>
 <div>
    Full Name : {firstname} {lastname}
</div> 
 
</>)
};
export default Fullname;
