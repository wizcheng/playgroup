import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridStack from "./gridstack/gridstack";
import ResizeObserver from 'react-resize-observer';


class App extends Component {

    constructor(props){
        super(props);
        this.changeSize = this.changeSize.bind(this);
        this.state = {
            width: 500
        };
    }

    changeSize(newSize){
        console.log("change width to", newSize);
        this.setState({
            width: newSize
        });
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ResizeObserver
                    onResize={(rect) => {
                        this.changeSize(rect.width);
                        console.log('Resized. New bounds:', rect.width, 'x', rect.height);
                      }}
                                    onPosition={(rect) => {
                        console.log('Moved. New position:', rect.left, 'x', rect.top);
                      }}
                />
                <GridStack width={this.state.width}/>
            </div>
        );
    }
}

export default App;
