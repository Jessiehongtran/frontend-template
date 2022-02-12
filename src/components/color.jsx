import React from 'react';
import '../styles/color.css'

export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colors: [],
            initialX: 56,
            initialY: 378,
            pointerX: 56,
            pointerY: 378,
            currentColor: this.rgbToHex(200, 0, 20)
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
        let row = Math.round((this.state.pointerY - this.state.initialY)/20)
        let col = Math.round((this.state.pointerX - this.state.initialX)/20)

        let r = row*20 + col*10 + 200
        let g   = row*20 + col*10
        let b = 20

        this.setState({
            currentColor: this.rgbToHex(r, g, b)
        })

    }

    handleDragStart(e){
        let el = document.createElement('div');
        el.style.visibility = 'hidden'
        e.dataTransfer.setDragImage(document.getElementById('pointer'), -5, 5);
    }

    componentToHex(c) {
        console.log('c', c)
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
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
            for (let c = 11; c < 20; c++){
                row.push({
                    r: r*20 - c*10 + 200,
                    g: r*20 + c*5,
                    b: 200
                })
            }
            colors.push(row)
            
        }
        for (let r= 10; r < 20; r++){
            let row = []
            for (let c = 0; c < 10; c++){
                row.push({
                    r: r*5 + c*10 + 20,
                    g: r*30 + c*20,
                    b: 200
                })
            }
            for (let c = 11; c < 20; c++){
                row.push({
                    r: r*30 - c*20 + 200,
                    g: r*30 + c*10,
                    b: 200
                })
            }
            colors.push(row)
        }



        return (
            <div 
                className="color container" 
                onDragOver={(e) => this.handleDragOver(e)}
                onDrop={e => this.handleDrop(e)}
                style={{ marginLeft: '50px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div 
                    id="pointer" 
                    style={{ width: '10px', height: '10px', borderRadius: '50%', position: 'absolute', backgroundColor: 'white', border: '2px solid black', left: `${this.state.pointerX}px`, top: `${this.state.pointerY}px`}}
                    draggable
                    onDrag={(e) => this.handleDrag(e)}
                    onDragStart={e => this.handleDragStart(e)}
                ></div>
                <div style={{}}>
                {colors.map((color,i) => 
                    (<div key={i} style={{ display: 'flex'}}>
                    {color.map(subColor => 
                        <div key={subColor.r} className="each-color" style={{width: '20px', height: '20px', backgroundColor: `rgb(${subColor.r}, ${subColor.g}, ${subColor.b})`}}>
                        </div>
                    )}
                    </div>)
                )}
                </div>
                <div>
                    Color: <span>{this.state.currentColor}</span>
                </div>
            </div>
        )
    }
}