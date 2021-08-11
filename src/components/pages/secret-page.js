import React from "react"
import {Redirect} from "react-router-dom";

const SecretPage = ({isAuth}) => {
    return isAuth ? <h1>This is secret</h1> : <Redirect to='/login' />;
}

export default SecretPage;