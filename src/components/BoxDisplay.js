import React from 'react';

const BoxDisplay = (props) => {
    const { boxColorList } = props;

    return (
        <div>
            {
                boxColorList.map((box, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        margin: '10px',
                        backgroundColor: box.color,
                        width: box.size,
                        height: box.size
                    }}></div>
                ))
            }
        </div>
    )
}

export default BoxDisplay;