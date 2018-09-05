import React from 'react';

const NewStudent = (props) => {
    return (
        <div className='newStudent'>
            <form onSubmit={ props.submit }>
                <label>
                    FirstName:
                <input type="text" name="FirstName" onChange={ props.addFirstName }/>
                    LastName:
                <input type="text" name="LastName" onChange={ props.addLastName} />
                    Email:
                <input type="text" name="Email" onChange={ props.addEmail} />
                </label>
                <input type="submit" value="Submit"  />
            </form>

        </div>

    )
}



export default NewStudent