import React, {Component} from "react";
import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./gridstack.css";
import R from "ramda"

class GridStack extends Component {


    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            edit: false
        }
    }

    componentDidMount() {

    }

    change(newValue) {
        this.setState({
            edit: newValue
        });
    }

    render() {

        const {width} = this.props;

        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2},
            {i: 'b', x: 1, y: 0, w: 3, h: 2},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];

        const edit = this.state.edit;
        const convertToElement = (i) => {return edit? <div>{i.i}</div>:<div>Some Content</div>};
        const items = R.map(item => {
            return <div key={item.i} className="widget">{convertToElement(item)}</div>
        }, layout);


        return (
            <div>
                <input type="button" value={"change editable to " + !this.state.edit} onClick={this.change.bind(this, !this.state.edit)}/>
                <ReactGridLayout
                    className="layout" layout={layout} cols={12} rowHeight={30} width={width}
                    isDraggable={this.state.edit}
                    isResizable={this.state.edit}
                >
                    {items}
                </ReactGridLayout>
            </div>
        )

    }
}

export default GridStack;