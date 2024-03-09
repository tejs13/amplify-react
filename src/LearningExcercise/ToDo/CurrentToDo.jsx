import React, { Component } from 'react';

import { Card } from 'antd';


class CurrentToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        const {selectedItem} = this.props;
        if (!selectedItem) {
            return <span>Loading !!</span>
        }

        return (
            <Card title="Current ToDo" bordered={false} style={{ width: 300 }}>
                <p>{selectedItem}</p>
            </Card>

        )
    }


}


export default CurrentToDo;