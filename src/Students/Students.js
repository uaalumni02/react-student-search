import React from 'react';
import Delete from '../Delete/Delete';
import './Students.css';

const Students = (props) => {
    return (
        <div className="students-wrapper">
            {
                props.students.length ?
                    <ul>
                        {
                        props.students.map((student, index) => {
                            return (
                                <li key={ student.id.toString() }>
                                    <div className="students-brief">
                                        <p className="students-name">
                                            <strong> 
                                                { `${student.first_name} ${student.last_name}` } 
                                            </strong>
                                        </p>
                                        <p className="students-phone">
                                            { student.email }
                                        </p> 
                                        <Delete delete={ () => props.delete(index) } />
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                    : <p> This student is not listed </p>
            }
        </div>
    );
}
export default Students;