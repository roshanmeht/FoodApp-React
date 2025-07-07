// import { resturantListURL, resturantListURL1 } from '../common/constant';
// import restaurantList from '../common/mockdata';
import ResturantCard, {resturantCardPromoted} from './ResturantCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import filterLogo from "/src/Images/filter.png";
import useOnlineCheck from '../common/useOnlineCheck';
import useFetchResturantCard from '../common/useFetchResturantCard';



const Body = () => {
    // console.log('body rendered');
    // const [modifyResturantList, setmodifyResturantList] = useState([]);

    //  const [filteredResturantList, setfilteredResturantList] = useState([]);

    //when we use empty dependency array inside useEffect() then it is called only on initial render of component.

    //when we don't use depencdency array inside useEffect() then it is called on every render of component.

    //when we use depencdency array with a  state variable then it is called everytime whenever we modifies state variable.

    //always use react hooks inside functional component and declare it inside top of the component.  (Hooks can only be called inside of the body of a function component).


    //Don't use useState() inside any conditional statement,loop,functions because it can create inconsistency in code.

    //useEffect(() => { fetchAPI() },[]);

    // const fetchAPI = async () => {
    //     let fetchValue = await fetch(resturantListURL1);

    //     let response = await fetchValue.json();

    //     setmodifyResturantList(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    //     setfilteredResturantList(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    //      console.log('useEffect function called');


    //     console.log('Resturant list', response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    // }

    // fetchAPI().then((resp)=>{
    //     // when we do a API call then it returns a json string after receiving the data we use .json() to convert this json data into a json Object and when we do .json() it returns a promise 
    //     let respJson=resp.json();
    //     // console.log(respJson);
    //     return respJson;
    // })
    // .then((val)=>{
    //    console.log(val);
    // })

  
   // it will be called first after that custom hook's useEffect will be called
//    useEffect(()=>{
//     console.log('again useEffect for updating');
//     setmodifyResturantList(modifyResturantLis);
//     setfilteredResturantList(modifyResturantLis);
//    },[]); 


const [searchString, setsearchString] = useState("");

let [modifyResturantList , filteredResturantList ,setmodifyResturantList ,setfilteredResturantList ,fetchAPI] =useFetchResturantCard();
  
    
    if(!useOnlineCheck()){
        return (<h1 className='my-[110px] text-xl italic font-bold mx-4'>Looks like you are Offline! Please Check Your Internet Connection 😢</h1>)
    }

    if (modifyResturantList.length === 0) {
        return (<Shimmer />)
    }

    let PromotedComponent = resturantCardPromoted(ResturantCard);
   

    return (
        <div id='body' className=' my-[98px]'>
            <div className='search py-2'>
                <input className='w-[90vw] px-2 py-1 mx-3 rounded-md border-[2px] border-black border-solid' type='text' placeholder='search your favourite Resturant' value={searchString} onInput={(e) => {
                    setsearchString(e.target.value);
                }}></input>
                <button className='border-[2px] border-solid border-black p-1 rounded-md' onClick={() => {
                    let searchRest = modifyResturantList.filter((rest) => { return rest.info.name.toLowerCase().includes(searchString.toLowerCase()) });
                    setfilteredResturantList(searchRest);
                    console.log(searchRest);
                }}>search</button>
            </div>

            <div className='filter flex justify-start items-center'>
                <button className='filter-btn border-solid border-[2px] border-black mx-3 my-2 px-2 cursor-pointer bg-[pink]' onClick={
                    () => {
                        let x = modifyResturantList.filter(
                            (res) => {

                                return res.info.avgRating > 4.5;
                            });
                        { console.log(x) }
                        setfilteredResturantList(x);

                    }
                }
                >Top Trending Resturant</button>

                {/* filter-remove syntax */}
                <a title='Remove-Filter'>
                    <img  src={filterLogo} alt='filter' className='svg w-[25px] cursor-pointer' onClick={() => { fetchAPI() }}></img>
                </a>

            </div>

            <div className=' flex flex-wrap ml-[60px] '>
              
                {
                    filteredResturantList.map((res) =>
                        <Link to={'/resturant/' + res.info.id} key={res.info.id}>  
                            {(res.info.avgRating>4.3) ?(<PromotedComponent resData={res} />) : ( <ResturantCard resData={res} key={res.info.id} />)}
                           
                        </Link>
                    )

                }

            </div>
        </div>
    )
}
export default Body;

