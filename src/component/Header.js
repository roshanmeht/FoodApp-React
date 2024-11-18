import { HEADER_LOGO , CART_LOGO} from "../common/constant";
import {Link} from 'react-router-dom';
import useOnlineCheck from "../common/useOnlineCheck";
import UserInfo from "../common/GlobalData";
import { useContext } from "react"; 
import { useSelector } from "react-redux";
import { CartSlice } from "../common/CartSlice";
import { useState } from "react";

const Header = () => {
    // let {user ,setuserName}=useContext(UserInfo);
    // setuserName('salman khan')
    let status=useOnlineCheck();

    const Fooditems= useSelector((store)=>{
        console.log('store',store);
        return store.cart.cartItems;
    });

  console.log('Fooditems',Fooditems);
   
    return (
      
 <div id='header' className='flex justify-between items-center border-solid border-[2px] border-b-[black] bg-[white] fixed top-0 w-[99vw] z-10'>
            <div className='logo'><Link to='/'>
            <img alt='logo' src={HEADER_LOGO} className='w-[95px] ml-3'></img>
            </Link>
                
            </div>
            <div className='nav '>
                <ul className='flex '>
                    <li className='px-3'>Online Status:{status?'✅':'🔴'}</li>
                    <li className='px-3'><Link to='/'>Home</Link></li>
                    <li className='px-3'><Link to='/About'>About</Link></li>
                    <li className='px-3'><Link to='/contact'>Contact</Link></li>
                    <li className='px-3'>
                    <Link to='/cart'>
                    <img src={CART_LOGO} className='w-[30px]'></img><span className='absolute top-1  right-3 border-2 border-red-500 border-solid  rounded-md p-0.5 cursor-pointer'>{Fooditems.length}</span>
                    </Link>
                    </li>
                    {/* <li>{user}</li> */}
                </ul>
            </div>
        </div>
       
       
    )
}

export default Header;