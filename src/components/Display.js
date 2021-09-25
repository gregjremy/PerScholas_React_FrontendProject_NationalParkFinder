import React from 'react';

const Display = (props) => {
    // const listOfParks = props.parkDetails.map((park)=>{
    //     return (
    //         <div>
    //             {park.fullname}
    //         </div>
    //     )
    // })
    // console.log(props.parkDetails, "something")


// The ? says "if this exists, map this", if not do nothing
    return props.parkDetails ? props.parkDetails.map((park,index)=>{
        console.log(park.fullName)
        return (
            <div key={index}>
                {park.fullName}
            </div>
        )
    }): null 
};

export default Display;