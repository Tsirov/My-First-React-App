import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Navigation from './Navigation/Navigation';
import PetCard from './petCard';

import * as petService from '../../services/petServices';
;
const Dashboard = () => {
    let category = useParams();
    let [pets, setPets] = useState([]);

    useEffect( async () => {
        let result = await petService.getAll();

        if (result == null) {
            pets = []
        } else {
            setPets(pets = result);
            // petService.getAll()
            //     .then(result => {
            //         setPets(pets = result)
            //     })
        }
       
    },[])

    return (

        <section className="dashboard">
            <h1>Dashboard</h1>

            <Navigation />

            <ul className="other-pets-list">
                { pets.map(x => {
                    return <PetCard key={ x._id } pet={ x } />
                   })}
            </ul>
        </section>
    );
}

export default Dashboard;