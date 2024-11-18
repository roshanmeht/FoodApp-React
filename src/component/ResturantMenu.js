import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { resImage } from '../common/constant';
import { resMenuURL } from '../common/constant';
import { useParams } from 'react-router-dom';
import starLogo from "../Images/star_icon.png";
import ResCategoryStructure from './ResCategoryStructure';

const ResturantMenu = () => {
    const [resturantMenuInfo, setresturantMenuInfo] = useState([]);
    let resId = useParams();
    // console.log('resid', resId );

    const [showIndex ,setshowIndex] =useState(null);


    useEffect(() => { fetchResturantMenu() }, []);

    async function fetchResturantMenu() {
        let respone = await fetch(resMenuURL + resId["res-id"]);

        let responseJson = await respone.json();
        setresturantMenuInfo(responseJson.data.cards);

    }
    if (resturantMenuInfo.length === 0) return <Shimmer />

   
    const { name, avgRating, city, costForTwoMessage, cuisines, cloudinaryImageId, locality } = resturantMenuInfo[2].card.card.info;

    const { cards } = resturantMenuInfo[4].groupedCard.cardGroupMap.REGULAR;

   

    const filteredMenuItem = cards.filter((items) => {
      return  items.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

    })
   

    return (
        <div className='my-[100px] '>
            <div className='border-b-2 border-gray-500 flex justify-start items-center flex-col'>
                <div className="font-bold text-xl italic">{name}</div>

                <div className="flex" >
                    <span>
                        <img src={starLogo} className="w-[25px]"></img>
                    </span>
                    <span className="font-semibold mx-1">{avgRating}</span>
                </div>
                <div>{cuisines.join(',')}</div>
                <div className='font-bold text-green-500'>{locality}</div>
            </div>

            <div>
            {filteredMenuItem.map((menuItem,index)=>{
               return  <ResCategoryStructure prop={menuItem} key={index}  showItem={index===showIndex?true :false} setShowIndex={()=>{setshowIndex(index)}}/>
            })}
            </div>

        </div>
    )

    // return (
    //     <div id='resMain' className='flex justify-between items-start my-[100px]'>
    //         <div className='ml-4 bg-[#f0f0f0] my-4 rounded-lg w-[240px] p-4'>
    //             <h1 id='resName' className='font-bold text-xl my-1 text-[red] italic'>{name}</h1>
    //             <img className='my-2 rounded-lg' src={resImage + cloudinaryImageId} width='200px' height='140px'></img>
    //             <div className='resInfo flex items-center justify-between w-[206px]'>
    //                 <div className='star'><img src={starLogo} width='20px'></img></div>
    //                 <div style={{ fontWeight: 'bold' }}>{avgRating + ' Rating .' + costForTwoMessage}
    //                 </div>
    //             </div>
    //             <h3 className='font-semibold text-[#0f03ee]'>{city}</h3>
    //             <h4 className='italic text-[#fe6b84]'>{cuisines. join(',')}</h4>
    //         </div>
    //         <div id='menu' className='mx-6 my-3 text-lg'>
    //             <div className='font-bold text-[blue]'>Menu</div>
    //             <h3 className='text-[#7907eb] italic text-xl'>REGULAR</h3>
    //             <ul className='bg-[pink]'>

    //            { (itemCards!==undefined) ?
    //               ( itemCards.map((item) => <li key={item.card.info.id} className='menuList my-1 px-5 py-2'>{item.card.info.name}    -----    {'Rs ' + (item.card.info.price / 100 || item.card.info.defaultPrice / 100)} </li>) ) 

    //               :

    //               (  categories[0].itemCards.map((item) => <li key={item.card.info.id} className='menuList my-1 px-5 py-2'>{item.card.info.name}    -----    {'Rs ' + (item.card.info.price / 100 || item.card.info.defaultPrice / 100)} </li>) )
    //            }

    //             </ul>
    //         </div>
    //     </div>
    // )
}

export default ResturantMenu;