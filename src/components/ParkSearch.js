import React, {useState, setState} from 'react';
import axios from 'axios'
import Display from './Display';



const ParkSearch = () => {
    const [stateCode, setStateCode] = useState('');
    const [parkDetails, setParkDetails] = useState([])
    const handleChange= (e) => {
        setStateCode(e.target.value)
    }



    const handleSubmit= async(e) => {
        e.preventDefault()
        try {
            const parkData = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&stateCode=&limit=5&start=0&api_key=cD7nBBuNq5qCfPrPUP72fWkILWUORwj1IbJ0qfd3`) 
            // const parkName = parkData.data.data[0].fullName
            // const park = Object.values(parkName)[0]
            // setParkDetails(parkName)

            setParkDetails(parkData.data.data) 


        } catch (error) {
            console.log('error')
        }
    }


    


    return (
        <div>
            <div className='searchBox'>
                <form className='search' onSubmit={(e)=>{return handleSubmit(e)}} >
                    <input onChange={(e)=>{return handleChange(e)}} value={stateCode} placeholder="Enter 2-Letter State Code" type='text' />
                    <button type='submit'>SUBMIT</button>
                </form>
                <Display parkDetails={parkDetails}  />
            </div>
        </div>
    );
};

export default ParkSearch;

