import uniqid from 'uniqid';

import dataFromRepository from '../data';

let data = dataFromRepository[0];

const LOADING_DATA_FROM_REMOTE_SERVICES = false;

const baseUrl = 'http://pets-custom-serer.herokuapp.com/jsonstore';



export const getAll = async () => {
    let result = '';
    if (LOADING_DATA_FROM_REMOTE_SERVICES) {
        try {
            let response = await fetch(`${baseUrl}/pets`);
            if (response.status != 200) {
                throw new Error(response.statusText);
            }

            let pets = await response.json();
            result = Object.values(pets);
            return result;
        } catch (err) {
            return null;
        }
    } else {
        let result = Object.values(data);
        return result;
    }


}

export const getPetById = async (id) => {
    if (LOADING_DATA_FROM_REMOTE_SERVICES) {
        let response = await fetch(`${baseUrl}/pets/${id}`);

        let pets = await response.json();
        return pets;
    } else {
        let result = data[id];
        return result;
    }

}


export const getPetByCategory = async (category) => {
    if (LOADING_DATA_FROM_REMOTE_SERVICES) {
        let response = await fetch(`${baseUrl}/pets`);
        let data = await response.json();
    }

    data = Object.values(data);
    const otherCategory = ['cats', 'dogs', 'parrots', 'reptiles'];

    if (category == 'all') {

        return data;
    } else if (category == 'other') {
        let pets = data.filter(pet => !otherCategory.includes(pet.type.toLowerCase()));

        return pets
    }

    let pets = data.filter(x => x.type.toLowerCase() == category.toLowerCase())

    return pets;


}

export async function createPet(name, description, imageUrl, category) {
    

    if (LOADING_DATA_FROM_REMOTE_SERVICES) {
        const body = {
            name,
            description,
            imageUrl,
            category
        };
        let response = await fetch(`${baseUrl}/pets`,
            {
                method: 'POST',
                'content-type': 'application/json',
                body: JSON.stringify(body)
            }
        );

        return response;
    } else {
        const id = uniqid()
        const body = {
            id: {
                name,
                description,
                imageUrl,
                category
            }
        };
        dataFromRepository.push(body);
        return;
    }
   
}