import React, {Component} from 'react';


class Clock extends React.Component {
    state = {}

    


    render(){

        const today = new Date();
                let h = today.getHours();
                let m = today.getMinutes();
                let s = today.getSeconds();
                // m = checkTime(m);
                // s = checkTime(s);

        return (
            <>
            <h1>Clock Here</h1>
            <h1>{new Date().toLocaleDateString()}</h1>
            {
                <h1>{h} : {m} : {s}</h1>
            }
            </>
        )
    }
}


export default Clock