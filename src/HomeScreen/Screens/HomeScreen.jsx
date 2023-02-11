import React, {Component} from 'react';
import { Button } from 'antd';
import { withRouter } from '../../Commons/WithRouterWrapper';


class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    routeChange = () => {
        console.log("button clicked")
        this.props.navigate('/Dashboard')
    }
    render() {
        return (
            <>
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1>Hello from Tejaskumar !!!</h1>
                <Button onClick={this.routeChange} type="primary">Start Here</Button>
            </header>
            </>
        )
    }
}
export default withRouter(HomeScreen)



