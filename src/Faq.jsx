import "./Faq.css";
import imgStar from "./assets/static/icon-star.svg";
import imgPlus from "./assets/static/icon-plus.svg";
import imgMinus from "./assets/static/icon-minus.svg";
import {React,useState} from "react";

function Faq() {

    const[flip,setFlip]=useState({
        0:true,
        1:true,
        2:true,
        3:true,
    });


    const handleClick=(index)=>{
        console.log(index);
        
        setFlip((prevstate)=>({
            ...prevstate, [index]: !prevstate[index]
        }));
        console.log(flip);
    }

    return (
        <>

            <div className="outer-cont">
                <div className="header">
                    <img src={imgStar}/>
                    <h1>FAQs</h1>
                </div>

                <div className="queries">
                    <div className="quest">
                        <h3>What is Frontend Mentor, 
                            and how will it help me? 
                            
                        </h3>
                        <img  onClick={()=>handleClick(0)}
                        src={flip[0] ? imgMinus : imgPlus}
                        />
                    </div>

                    {flip[0]?null:<p>Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.
</p>}


                </div>

                <div className="queries">
                    <div className="quest">
                        <h3>Is Frontend Mentor 
                            free? 
                        </h3>
                        <img onClick={()=>handleClick(1)}
                            src=
                            {flip[1] ? imgMinus : imgPlus}
                        />
                    </div>
                    {flip[1]?null
                    :<p>
                        Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
                    </p>}

                </div>

                <div className="queries">
                    <div className="quest">
                        <h3>Can I use Frontend 
                            Mentor projects in 
                            my portfolio?
                        </h3>
                        <img onClick={()=>handleClick(2)}
                            src=
                            {flip[2] ? imgMinus : imgPlus}
                        />
                    </div>

                    {flip[2]?null:<p>  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                        way to showcase your skills to potential employers!</p>}

                </div>
                <div className="queries">

                    <div className="quest">
                            <h3>How can I get 
                                help if I'm stuck 
                                on a Frontend Mentor 
                                challenge?
                            </h3>
                            <img onClick={()=>handleClick(3)}
                            src=
                            {flip[3] ? imgMinus : imgPlus}
                        />
                    </div>

                    {flip[3]?null:<p>  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                        way to showcase your skills to potential employers!</p>}
                </div>
               
            </div>
        </>
    )
}

export default Faq;