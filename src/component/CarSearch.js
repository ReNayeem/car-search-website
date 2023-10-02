import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarList from './CarList';
import Pagination from './Pagination';
import './CarSearch.css'

const CarSearch = ({ cars }) => {
    const { page } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1);
    const carsPerPage = 6;

    // Filter cars based on the search term
    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate total pages for pagination
    const totalPages = Math.ceil(filteredCars.length / carsPerPage);

    // Get the current page of cars
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Update URL when the page changes
    useEffect(() => {
        window.history.pushState({}, '', `/page/${currentPage}`);
    }, [currentPage]);

    return (
        <div className="car-search">
            <div>
                <div className='car-search-2'>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <CarList cars={currentCars} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default CarSearch;
