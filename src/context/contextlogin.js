import React,{useEffect,useState} from "react";
import superagent from "superagent";
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';


export const  Logincontext=React.createContext();
const API='https://gold-team-mid-project.herokuapp.com/signin'
export default function LoginProvider(){
const [login,setlogin]= useState()
const[user,setuser]=useState()
 // initial render
 useEffect(() => {
    const tokenFromCookie = cookie.load('token');
    validateJwtToken(tokenFromCookie);
}, []);
const loginFun=async(username,password)=>{
    const encodedusernameAndPassword=base64.encode(`${username}:${password}`)
    const addthem=await superagent.post(`${API}`)
    .set('authorization',`Basic ${encodedusernameAndPassword}`);
    validateJwtToken(addthem.body.token)

}
function setloginfun(state,token){
    setlogin(state)
    setuser(user)

}

function logout(){
    setloginfun(false,{})
    cookie.remove('token')
}
const validateJwtToken=(token)=>{
    if(token){
        const user=jwt.decode(token)
        setloginfun(true,user)
        cookie.save('token',token)
    }
    else{
        setloginfun(false,{})
    }
    //whay ?.  ?.
    const can = (capability) => {
        return user?.capabilities?.includes(capability);
    };
    const state = {
       user,
       setuser,
       login,
       setlogin,
       can,
       loginFun,
       logout
    }
    return (
        <Logincontext.Provider value={state}>
            {props.children}
        </Logincontext.Provider>
    )

}
}