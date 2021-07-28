import React from 'react';
import Text from './text';
import Point from './point';
import '../styles/box.css'

export default class Box extends React.Component {
    


    render(){
        return (
            <div className="box container">
                <div className="line">

                </div>
                <Text initialText={"Title"} fontWeight={600} fontSize={18} lineHeight={24} marginBottom={20}/>
                <Text initialText={"Text"} fontWeight={400} fontSize={16} lineHeight={22} />
                <Point initialText={"Point 1"} fontWeight={400} fontSize={16} lineHeight={22} />
                <Point initialText={"Point 2"} fontWeight={400} fontSize={16} lineHeight={22} />
                <Point initialText={"Point 3"} fontWeight={400} fontSize={16} lineHeight={22} />
            </div>
        )
    }
}