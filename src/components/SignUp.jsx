
import { useDispatch, useSelector } from "react-redux"
import { signupHandler } from "../redux/SignupSlice";
import { useState } from "react";

const SignUp = () => {
    const signupData = useSelector(state => state.signup);
    const dispatch = useDispatch()
    const [signupUserData, setSignupUserData] = useState(signupData)
    
    const signupChange = (e, item)=> {
        // [item] =  e.target.value
        // setSignupUserData(prevState=> ({
        //     ...prevState,
        //     [item]: e.target.value
        // }))
        dispatch((e)=> signupHandler(item))
    }
    
  return (
    <div>
        <div>
            <h1>Sign up </h1>
            <form style={{display: 'flex', padding: "10px", flexDirection: 'column', gap:20}}>
                <div style={{ display: 'flex', gap: "10px"}}>
                <label>Name</label>
                <input type="text" value={signupData.signupName} onChange={signupChange(signupData.signupName)}  />
                </div>
                <div  style={{ display: 'flex', gap: "10px"}} >
                <label>Address</label>
                <input type="text" value={signupData.address}  />
                </div>
                <div  style={{ display: 'flex', gap: "10px"}}>
                <label>Email</label>
                <input type="text" value={signupData.signupEmail}  />
                </div>
                <div  style={{ display: 'flex', gap: "10px"}}>
                <label>Contact</label>
                <input type="number" value={signupData.signupContact}  />
                </div>
                <div  style={{ display: 'flex', gap: "10px"}}>
                <label>Gender</label>
                <input type="text" value={signupData.gender}  />
                </div>
                <div  style={{ display: 'flex', gap: "10px"}}>
                <label>Terms and Conditon</label>
                <input type="checkbox" value={signupData.termsAndCond}  />
                </div>
                <Button variant="contained">Login</Button>
            </form>
        </div>
    </div>
  )
}

export default SignUp