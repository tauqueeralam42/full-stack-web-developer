import { useState } from "react";


function LikedButton(){

    let[isLiked, setIsLiked] = useState(false);

    function toggle(){
        setIsLiked(!isLiked);
        console.log(!isLiked);
    }

    return(
        <>
            <p onClick={toggle}>
            {isLiked ? (<span> Hello <i className="fa-solid fa-heart" style = {{color : "red"}}></i> </span>) :  (<i className="fa-regular fa-heart"></i>)}
           </p>
        </>
    );

};

export default LikedButton;