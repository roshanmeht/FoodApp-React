import { useSelector ,useDispatch } from "react-redux";
import CartSubPage from "./cartSubPage";
import { Link } from "react-router-dom";
import { clearCart } from "../common/CartSlice.js";
const Cart = () => {
    const cartItemDetails = useSelector((store) =>{console.log('store',store);return store.cart.cartItems;});
    const clearCartItemDispatcher = useDispatch();
        function clearCartItems(){
           clearCartItemDispatcher(clearCart());
        }
    if (cartItemDetails.length === 0) {
        return (
            <div className="flex items-center justify-center flex-col mt-[100px]">
               <h1 className='text-red-700 p-5 font-serif font-semibold'>Cart is Empty! please Add items to the cart</h1>
               <Link to='/'>
               <button className='bg-red-400 p-2 rounded-lg'>Add FoodItems</button>
               </Link>
             
            </div>
       )
    }
    return(
        <div className="my-[100px] flex flex-col items-center justify-center border-red-500 border-[2px] border-solid ">
        <button className="bg-black text-white rounded px-2 py-1 my-1" onClick={clearCartItems}>Clear Cart</button>
            {cartItemDetails.map((item,index)=>{
                return <CartSubPage cartprop={item} key={item.prop.card.info.id}/>
            })}
        </div>
    )
}

export default Cart;