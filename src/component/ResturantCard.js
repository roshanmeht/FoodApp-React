import { CARD_LOGOInitialURL } from "../common/constant";
const ResturantCard = (props) => {
     const { resData } = props;
     const { name, avgRating, cloudinaryImageId, sla, cuisines,locality } = resData.info;
    return (
        
        <div className='card w-[200px] mx-8 my-5 p-5 hover:bg-[#f0f0f0]  rounded-xl' >
            <img src={CARD_LOGOInitialURL + cloudinaryImageId}
                className='res-img rounded-lg'></img>
            <h3 className='font-bold' style={{ color: 'red', fontStyle: 'italic' }}>{name}</h3>
            <h4 style={{ color: 'green' }}>{avgRating} star</h4>
            <h4 className="italic">{sla.deliveryTime} min</h4>
            <h5 className="font-semibold">{cuisines.slice(0, 2).join(',')}</h5>
            <h5 className='text-[#2b12cd] italic'>{locality}</h5>

        </div>
    )
}

export default ResturantCard;

//Higher order component --> it is an js function which takes component as an input and it retrun a new enhanced component.

export const resturantCardPromoted=(ResturantCard)=>{
    return (props)=>{
        
        return (
            <div>
                <label className='absolute p-1 mx-12 rounded-lg bg-black text-white'>Top Rated</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}