import { useParams } from 'react-router-dom';
import * as petServices from '../../services/petServices';
import { useEffect, useState } from 'react';

const Details = () => {
    const { category } = useParams();
    let [pet, setPet] = useState(null);

    useEffect(async () => {
        const result = await petServices.getPetByCategory(category);
        setPet(result);
    }, []);


    // function render(){

    // }
    return (function () {

        if (!pet) {
            return <h1 className="detailsOtherPet">Loading....</h1>
        }

        return (

                <section className="detailsOtherPet">
                    { pet.length == 0
                        ? <div>No { category } in this category.</div>
                        : pet.map((x, index) => {
                            return <div key={ index }>
                                <h3>{ x.name }</h3>
                                <p>Pet counter: { x.likes }
                                    <a href="#">
                                        <button className="button">
                                            <i className="fas fa-heart"></i>
                                            Pet
                                        </button>
                                    </a>
                                </p>
                                <p className="img"><img src={ x.imageUrl } /></p>
                                <p className="description">{ x.description }</p>
                            </div>
                        })
                    }


                </section>
        )
    })();
}

export default Details;