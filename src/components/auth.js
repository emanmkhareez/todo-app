import { useContext } from "react";
import { When } from "react-if";
import { Logincontext } from "../context/contextlogin";

export default function Auth(props) {
    const context = useContext(Logincontext);
  
    let render =
      context.login && props.capability
        ? context.user.capabilities.includes(props.capability)
        : false;
  
    return <When condition={render}>{props.children}</When>;
  }