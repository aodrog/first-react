import React, {Fragment, useState, useEffect} from 'react';

const initialState = {
    name: '',
}

const Form = (props) => {

    const [fields, setFields] = useState(initialState);

    const handleChangeField = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = (event) => {
        props.addSatellite(fields);
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
                    </label>
                        <br/>
                        <input type='submit' value="Enviar"/>
                </form>
            </div>
        </Fragment>
    );
}

export default Form;
