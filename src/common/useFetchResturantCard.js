import {useState , useEffect} from 'react';
import { resturantListURL, resturantListURL1} from './constant';

const useFetchResturantCard=()=>{
    const [modifyResturantList,setmodifyResturantList]=useState([]);

    const[filteredResturantList , setfilteredResturantList] =useState([]);

    useEffect(()=>{fetchAPI()},[]);

    async function fetchAPI(){
        let response= await fetch(resturantListURL1);
        let json_res=await response.json();
        
        // console.log(json_res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

      setmodifyResturantList(json_res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

      setfilteredResturantList(json_res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);


     
    }

    
    return [modifyResturantList,filteredResturantList ,setmodifyResturantList , setfilteredResturantList ,fetchAPI];
    
    
}
export default useFetchResturantCard;

//when we use custom hook inside react component then useEffect hook inside the custom hook will called once our component(it refer the component inside which we use custom hooks) rendered and if inside custom hook we update state variable then it triggers re rendring of that component inside which custom hook being used.