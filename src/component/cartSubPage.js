import starLogo from "../Images/star_icon.png";
import { resImage } from "../common/constant";
import { useDispatch } from "react-redux";
import { removeItem } from "../common/CartSlice";
const CartSubPage =(props)=>{
    console.log('cartsubpage ahead');
    console.log('vrr',props);
    const { imageId, price, name, description, ratings, defaultPrice } = props.cartprop.prop.card.info;
    const { rating } = ratings.aggregatedRating;
    console.log('name',name);
     
    let removeItemDispatcher = useDispatch();

    function RemoveFoodItems(){
       removeItemDispatcher(removeItem());
    }
    return (
        <div className='flex justify-between item-center mx-1 my-2 border-gray-200 border-b-2  w-[50vw]'>

            <div className=' py-4 w-9/12' >
                <div className='font-bold'>{name}</div>
                <div>₹{price / 100 || defaultPrice / 100}</div>
                <div className='flex items-center'>
                    <span><img src={starLogo} className='w-[17px]'></img></span>
                    <span className="mx-[2px] text-green-500 text-sm">{rating}</span>
                </div>
                <div className='font-semibold text-xs'>{description}</div>

            </div>
            <div className='flex flex-col justify-center items-center' >
                <img src={resImage + imageId} className='w-[175px] p-1 rounded-xl' ></img>
                <button className='bg-black text-white my-1 rounded px-2' onClick={RemoveFoodItems} > Remove</button>
            </div>

        </div>
    )
}
export default CartSubPage;