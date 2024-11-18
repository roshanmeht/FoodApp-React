import { useRouteError } from "react-router-dom";
//useRouteError is an React hook which is used to handle error occur during routing process.
const Error=()=>{
    let error= useRouteError();
    console.log(error);
    return (
       <div>
        <h1>{error.data}</h1>
        <h2>{error.status } { error.statusText}</h2>
       </div>
    )
}

export default Error;