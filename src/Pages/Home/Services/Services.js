import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className="row row-cols-1 row-cols-lg-3 bg-white m-2 row-cols-md-2 g-3">

            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;