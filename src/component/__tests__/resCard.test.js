import ResturantCard from "../ResturantCard";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Mock_Data from "../MockTestdata/mockdata";
import { resturantCardPromoted } from "../ResturantCard";


test("should load resturand card with resturant details" ,()=>{
    
    render(<ResturantCard resData={Mock_Data}/>);

    let resName = screen.getByText('Flurys');

    expect(resName).toBeInTheDocument;


});

test("should load promoted resturant card",()=>{
   let ResPromoted = resturantCardPromoted(ResturantCard);
   render(<ResPromoted  resData={Mock_Data} />)

   let resNamePromoted = screen.getByText('City Centre');
   
   expect(resNamePromoted).toBeInTheDocument();
})