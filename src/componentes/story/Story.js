import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./Story.css";

function Story() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/static/storys.json').then((response) => response.json()).then(setdata);


    }, [])

    if (!data || !data.length) return null;

    return (
        <div className="caixa_story">

        {data.map((item) => {
             const {name, img} = item;
             return ( 
            <div className="espacamento_story">
            <div>
                <button><img src={img} className="img"/></button>
            </div>
               <div>
                  <p className="name">{name}</p>
                </div>
            </div>
                );
            })}

        </div>
        
    );

}

export default Story;
