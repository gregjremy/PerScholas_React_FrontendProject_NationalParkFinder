import React from 'react';
import Display from '../components/Display';
import ParkSearch from '../components/ParkSearch';

const ParksByState = () => {
    return (
        <div>
            Type in the two digit abbreviation of the state you would like to search. A list of National Parks in
            that state will be generated. Click the name of the park for more detailed information.

            <ParkSearch />
            <Display />
        </div>
    );
};

export default ParksByState;