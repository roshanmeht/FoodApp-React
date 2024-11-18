import React from "react";
import UserInfo from "../common/GlobalData";


//this is a way for creating class based component in react

class UserAbout extends React.Component {
    constructor(props){
        super(props)

        this.state={count:0,age:18};

       
    }
    render() {
        const {name} = this.props;
        let {count ,age} = this.state;
        return (
            <div id='aboutClass' className='my-[110px] mx-4'>
            <div>Name:
            <UserInfo.Consumer>
                {({user})=><h1 className='font-extrabold'>{user}</h1>}
            </UserInfo.Consumer>
            </div>
           
                {/* <h1>About Us</h1>
                <h2>this is a class based component</h2>
                <h3>i am {name} and i am {age} years old</h3> */}
                
            </div>
        )
    }
}
 export default UserAbout;