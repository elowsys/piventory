import React from 'react';

const userOutput = (props) => {
    const style = {
        margin: 'auto',
        marginTop: '1em',
        marginBottom: '1em',
        borderRadius: '3px',
        width: '60%',
    };
    const styleA = {
        ...style,
        border: '1px solid green',
        backgroundColor: '#cdc'
    };
    const styleB = {
        ...style,
        border: '1px solid lightblue',
        backgroundColor: '#0088ff'
    };
    return (
        <div className="UserOutput">
            <p style={styleA}>Hi <span>{props.userName}</span> this is paragraph  {props.index}A</p>
            <p style={styleB}>This is paragraph {props.index}B</p>
        </div>
    );
}

export default userOutput;