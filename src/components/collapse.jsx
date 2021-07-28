import React from 'react';

export default class Collapse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    toggle(){
        this.setState({ open: ! this.state.open })
    }

    render(){
        return (
            <div style={{ width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', marginTop: '20px'}}>
                <div className="header" style={{ display: 'flex', justifyContent: 'space-between', width: '300px', backgroundColor: 'orange', padding: '5px'}}>
                    <div className="text">
                        Header
                    </div>
                    <div 
                        className="action" 
                        onClick={() => this.toggle()}
                        style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    >
                        {this.state.open
                        ? <img style={{  width: '20px' }} className="collapse" src="collapse.svg"/>
                        : <img style={{  width: '20px' }} className="expand" src="expand.svg"/>}
                    </div>
                </div>
                {this.state.open
                ? <div className="content" style={{padding: '10px 20px'}}>
                    {this.props.content
                    ? <div>
                        {this.props.content.texts.map(t => <p>{t}</p>)}
                        {this.props.content.points.map(p => <li>{p}</li>)}
                      </div>
                    : null}
                  </div>
                : null}
            </div>
        )
    }
}