import React from "react";
import { Grid, Modal, Reveal, Icon } from "semantic-ui-react";
import data from "./data.json";
import ImageItem from "./ImageItem";
import {getData} from './../Redux/UIReducer/actions';


import {connect} from 'react-redux';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    console.log(data);
  }
  componentDidMount(){
      this.props.getData();
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column>
            <h2>
              <u>Posts</u>
            </h2>
          </Grid.Column>
        </Grid>
        <Grid columns={4}>
          {this.props.data.map(item => (
            <Grid.Column>
              <ImageItem image={item.Image} likes={item.likes} />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        data:state.app.data
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getData:()=>dispatch(getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
