import React, { useState, useEffect } from 'react';
import { getPlacesById } from '../services/placesApi';
import Loading from '../components/loading/Loading';
import Place from '../components/places/Place';
import { useParams } from 'react-router-dom';

const DetailGetaways = () => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    console.log('id', id);

    useEffect(() => {
        getPlacesById(id)
        .then(setDetail)
        .finally(() => setLoading(false));
    }, []);

    if(loading) return <Loading />;

    return <Place {...detail} />
};

export default DetailGetaways;

