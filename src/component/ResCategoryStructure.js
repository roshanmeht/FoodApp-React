import SubCategoryStructure from "./subCategoryStructure";
import { useState } from 'react';

const ResCategoryStructure = (props) => {
    const [collapseItem, setcollapseItem] = useState(false);
    const { showItem, setShowIndex } = props;


    const { itemCards, title } = props.prop.card.card;

    function HideAndShow() {
        setShowIndex();
        setcollapseItem(!collapseItem);

    }

    return (
        <div className='flex flex-col justify-center items-center my-3 mx-4' >
            <div className="flex  justify-between bg-[#f0f0f0] w-[80vw] h-[10vh] items-center px-4 cursor-pointer" onClick={HideAndShow}>
                <div className='font-bold'>{title}</div>
                <div>🔻</div>
            </div>
            <div className='w-[80vw]  px-2 py-1'>




                {
                    (showItem && collapseItem) ?
                        itemCards.map((item, index) => {
                            return <SubCategoryStructure prop={item} key={index} />
                        }) : false

                }



            </div>


        </div>
    )
}
export default ResCategoryStructure;