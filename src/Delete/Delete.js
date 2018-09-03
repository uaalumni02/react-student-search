import React from 'react';
    const Delete = (props) => {
        return (
            <div className="delete-btn">
                <button onClick= { props.delete }> Delete </button>
            </div>
        );
    }
export default Delete;