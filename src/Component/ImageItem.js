import React, {Componenet} from 'react';
import {Reveal, Grid, Icon} from 'semantic-ui-react';

class ImageItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Reveal animated="move">
                    <Reveal.Content visible >
                    <img width={220} height={190} src={this.props.image}></img>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                    <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
                        <Icon name="like" size="huge"></Icon>
                    </div>
                    <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
                    <p style={{fontSize:"25px"}}>{this.props.likes}</p>
                    </div>
                    </Reveal.Content>
                </Reveal>
            </div>
        );
    }
}
export default ImageItem;