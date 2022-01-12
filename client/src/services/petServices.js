const baseUrl = 'http://pets-custom-serer.herokuapp.com/jsonstore'

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);

    let pets = await response.json();
    let result = Object.values(pets);
    return result;
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
            body:JSON.stringify(body)
        }
    );

    console.log('response',response);
    return response;

}