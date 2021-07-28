import React from 'react';
import '../styles/box.css'

export default class Point extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }


    render(){

        const {
            fontWeight, fontSize, lineHeight, marginTop
        } = this.props;

        return (
            <div className="point container" style={{fontWeight: `${fontWeight}`, fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, marginTop: `${marginTop}px`, textAlign: `left`}}>
                <ul>
                    <li><input className="inputBox" placeholder={this.props.initialText} onChange={(e) => this.handleChange(e)} /></li>
                </ul>
            </div>
        )
    }
}