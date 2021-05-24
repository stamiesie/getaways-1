import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Loading from '../components/loading/Loading';
import PageControls from '../components/controls/PageControls';

const Getaways = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getPlaces(currentPage)
    // .then resultSlicer(currentPage)
    .then(setPlaces)
    // .then(setTotalPages)
    .finally(() => setLoading(false));
  }, [currentPage]);


  const handleDecrementPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setLoading(true);
  };

  const handleIncrementPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  if(loading) return <Loading />;

  return (
    <div>
      <PageControls
        currentPage={currentPage}
        // totalPages={totalPages}
        onDecrementPage={handleDecrementPage}
        onIncrementPage={handleIncrementPage}
        />
      <PlaceList places={places} 
      />
    </div>
  )
};

export default Getaways;
