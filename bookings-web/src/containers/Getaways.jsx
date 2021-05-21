import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Loading from '../components/loading/Loading';

const Getaways = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces()
    .then(setPlaces)
    .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;

  return <PlaceList places={places} />;
};

export default Getaways;
