import React, {Fragment, useState, useEffect} from 'react';

const initialState = {
    name: '',
    description: '',
    url: '',
    img_url: ''
}

const Form = (props) => {

    const [fields, setFields] = useState(initialState);

    const handleChangeField = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = (event) => {
        props.addPlanet(fields);
        event.preventDefault();
        setFields(initialState);
    }

    return ( 
        <Fragment>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input name="name" id="name" type='text' value={fields.name} onChange={handleChangeField}/>
                        <br/>
                        Descrição:
                        <input name="description" id="description" type='text' value={fields.description} onChange={handleChangeField}/>
                        <br/>
                        URL:
                        <input name="url" id="url" type='text' value={fields.url} onChange={handleChangeField}/>
                        <br/>
                        IMG URL:
                        <input name="img_url" id="img_url" type='text' value={fields.img_url} onChange={handleChangeField}/>
                    </label>
                        <br/>
                        <input type='submit' value="Enviar"/>
                </form>
            </div>
        </Fragment>
    );
}

export default Form;
