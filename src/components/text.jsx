import React from 'react';
import '../styles/box.css'

export default class Box extends React.Component {
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
            fontWeight, fontSize, lineHeight, marginBottom
        } = this.props;

        return (
            <div className="text container" >
                <input className="inputBox" style={{fontWeight: `${fontWeight}`, fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, marginBottom: `${marginBottom}px`, textAlign: `left`}} placeholder={this.props.initialText} onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }
}