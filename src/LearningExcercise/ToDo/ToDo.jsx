import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import CurrentToDo from './CurrentToDo';
import './style.css'


const Items = [
    {key: 1, text:"Complete Blockchain Assigment"},
    {key: 2, text:"Prepare for SRS Quiz"},
    {key: 3, text:"Do 2 Leetcodes"},
    {key: 4, text:"Internship Applications"},
    {key: 5, text:"Learn Java and Springboot"},
    {key: 6, text:"Meal Prep"},
]

class ToDo extends React.Component {
    state = {
        selectedItem : "",
        allItems: Items

    }




    setSelectedItem = (e) => {
        

        let s = this.state.allItems.filter((i) => {
             return i.key == e
        })[0]
        let data = this.state.allItems.filter((i) => {
            return i.text != s.text
       })
       data.unshift(s)
        console.log("PARENT CALLED: ", s)
        // print the webpage
        // window.print();
        this.setState({selectedItem: s, allItems: data })

    }
    


    render() {
        return (
            <>

                <h2>ToDo List For Today </h2>
                <br />
                <div className='center-screen'>
                    <CurrentToDo selectedItem={this.state.selectedItem.text} />
                </div>

                <hr />

                <br />

                <ToDoItem allitems={this.state.allItems} setSelectedItem={this.setSelectedItem}/>
            </>
        )
    }
}


export default ToDo