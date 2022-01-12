import { useNavigate } from 'react-router-dom';
import * as petServices from '../../services/petServices';


const Create = () => {
    const navigate = useNavigate();
    
    function onSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        
        const name = formData.get('name');
        const description = formData.get('description');
        const imageURL = formData.get('imageURL');
        const category = formData.get('category');
        
        petServices.createPet(name, description, imageURL, category);

        navigate('/');
    }

    return (
        <section className="create">
            <form onSubmit={onSubmitHandler} method="POST">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label for="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label for="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description" placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label for="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label for="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Parrot</option>
                                <option>Reptile</option>
                                <option>Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
}

export default Create;