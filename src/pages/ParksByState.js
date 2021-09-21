import React from 'react';
import Display from '../components/Display';
import ParkSearch from '../components/ParkSearch';

const ParksByState = () => {
    return (
        <div>
            Use our dropdown list to select a state or territory. We'll display a list of parks that can be found in
            the selected locale.

            <ParkSearch />
            <Display />
        </div>
    );
};

export default ParksByState;