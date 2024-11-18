import UserInfo from "../common/GlobalData";
import { useContext } from 'react';
const Contact = () => {
    const {user}=useContext(UserInfo)
    return (
        <div className="px-8">
            <h1 className='mt-[110px]  font-bold text-blue-500'>Contact Detail</h1>
            <div>User: {user}</div>
            <div>Email: roshanmehta585.rm@gmail.com</div>
            <div>Contact: 7050398522</div>

        </div>

    )
}

export default Contact;
