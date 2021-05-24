import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Loading from '../components/loading/Loading';
import PageControls from '../components/controls/PageControls';

const Getaways = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [eachPage, setEachPage] = useState(10);

  useEffect(() => {
    getPlaces()
    .then(setPlaces)
    .then(setTotalPages)
    .finally(() => setLoading(false));
  }, [currentPage]);

  // const page = Math.ceil(places.length / 10)

  const handleDecrementPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleIncrementPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if(loading) return <Loading />;

  return (
    <div>
      <PageControls 
        currentPage={currentPage}
        totalPages={totalPages}
        onDecrementPage={handleDecrementPage}
        onIncrementPage={handleIncrementPage}
        />
      <PlaceList places={places} 
      />
    </div>
  )
};

export default Getaways;
