import React, { Component } from 'react';
import { Button, Flex } from 'antd';

const divStyle = {
    display:' flex',
    justifycontent: 'space-between'
} 




class ToDoItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    handleItemClick = (e) => {
        console.log(e, " in child CLICK")
        this.props.setSelectedItem(e);

    }

   

    render(){

        const todoItems = this.props.allitems.map((item) => {
            {console.log(item.key)}
             return <li> <h1 style={{display:'inline-block'}} id={item.key}>{item.text}</h1> &nbsp; &nbsp; &nbsp;<Button id={item.key} key={item.key} style={{display:'inline-block'}} onClick={() => this.handleItemClick(item.key)}>DO-NOW</Button></li>
                    
        })

        
        return(
          
            <div>
            <ol>
                {todoItems}
            </ol>
            </div>
            

            
        
            
          
        )
    }
}


export default ToDoItem