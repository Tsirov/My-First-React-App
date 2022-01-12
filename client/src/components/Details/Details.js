import { useParams } from 'react-router-dom';
import * as petServices from '../../services/petServices';
import { useEffect, useState } from 'react';



const Details = () => {
    const { id } = useParams();
    console.log(id);
    let [pet, setPet] = useState({});

    useEffect(async () => {
        const result = await petServices.getPetById(id);
        setPet(pet = result);
    }, []);

   
    console.log(pet.name); 
    
    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i className="fas fa-heart"></i>
                Pet</button></a>
            </p>
            <p className="img"><img src={pet.imageUrl}/></p>
            <p className="description">{pet.description}</p>
        </section>
    );
}

export default Details;