import React, { useEffect } from 'react';
import Rentals from '../components/Rentals';

const RentalsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <Rentals />
        </div>
    );
};

export default RentalsPage;
