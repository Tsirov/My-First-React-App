const baseUrl = 'http://pets-custom-serer.herokuapp.com/jsonstore'

export const getAll = async () => {
    let result = '';
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

}

export const getPetById = async (id) => {
    let response = await fetch(`${baseUrl}/pets/${id}`);

    let pets = await response.json();
    return pets;
}


export async function createPet(name, description, imageUrl, category) {
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

    console.log('response', response);
    return response;

}