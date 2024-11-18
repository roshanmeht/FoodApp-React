import { resImage } from "../common/constant";
import starLogo from "../Images/star_icon.png";
import { useDispatch } from "react-redux";
import { addItem } from "../common/CartSlice";
import { CartSlice } from "../common/CartSlice";


const SubCategoryStructure = (props) => {
    const { imageId, price, name, description, ratings, defaultPrice } = props.prop.card.info;
    const { rating } = ratings.aggregatedRating;

    const Dispatcher = useDispatch();


    function AddFoodItems(item) {
        let x = Dispatcher(addItem(item));
    }


    return (
        <div className='flex justify-between item-center mx-1 my-2 border-gray-200 border-b-2 '>

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
                <button className='bg-black text-white my-1 rounded px-2' onClick={() => { AddFoodItems(props)}} > Add+</button>
            </div>

        </div>
    )
}
export default SubCategoryStructure;