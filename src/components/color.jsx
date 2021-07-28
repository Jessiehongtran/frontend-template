import React from 'react';
import '../styles/color.css'

export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colors: [],
            pointerX: 56,
            pointerY: 378
        }
    }

    handleDragOver(e){
        e.preventDefault()
    }

    handleDrag(e){
        this.setState({
            pointerX: e.clientX, 
            pointerY: e.clientY
        })
    }

    handleDrop(e){
        
    }

    handleDragStart(e){
        let el = document.createElement('div');
        e.dataTransfer.setDragImage(el, 0, 0);
    }

    render(){

        const colors = []

        for (let r= 0; r < 10; r++){
            let row = []
            for (let c = 0; c < 10; c++){
                row.push({
                    r: r*20 + c*10 + 200,
                    g: r*20 + c*10,
                    b: 20 
                })
            }
            colors.push(row)
        }

        return (
            <div 
                className="color container" 
                onDragOver={(e) => this.handleDragOver(e)}
                onDrop={e => this.handleDrop(e)}
                style={{ marginLeft: '50px'}}>
                <div 
                    className="pointer" 
                    style={{ width: '10px', height: '10px', borderRadius: '50%', position: 'absolute', backgroundColor: 'white', border: '2px solid black', left: `${this.state.pointerX}px`, top: `${this.state.pointerY}px`}}
                    draggable
                    onDrag={(e) => this.handleDrag(e)}
                    onDragStart={e => this.handleDragStart(e)}
                ></div>
                {colors.map((color,i) => 
                    (<div key={i} style={{ display: 'flex'}}>
                    {color.map(subColor => 
                        <div key={subColor.r} className="each-color" style={{width: '20px', height: '20px', backgroundColor: `rgb(${subColor.r}, ${subColor.g}, ${subColor.b})`}}>
                        </div>
                    )}
                    </div>)
                )}
            </div>
        )
    }
}