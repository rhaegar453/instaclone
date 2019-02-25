/* eslint-disable max-len */
import profilePic from "./../Assets/Picture.jpg";
import { Link } from "react-router-dom";
import {modalToggle} from './../Redux/UIReducer/actions';
import React from "react";
import { Container, Grid, Segment, Button } from "semantic-ui-react";
import {connect} from 'react-redux';

class ContainerExampleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: 270,
      followers: 1000,
      following: 172
    };
  }
  followClicked = () => {
    console.log("Follow button clicked");
  };

  addPost=()=>{
      console.log('Adding post');
      this.props.modalToggle();
   }
  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <div style={{ marginLeft: "20px", padding: "10px" }}>
              <Grid.Column>
                <img
                  src={profilePic}
                  style={{ borderRadius: "100px" }}
                  height={200}
                  width={200}
                />
              </Grid.Column>
            </div>
            <div>
              <Grid.Column style={{ marginLeft: "20px", padding: "10px" }}>
                <div style={{ marginTop: "20px", marginLeft: "40px" }}>
                  <div>
                    <Grid columns="equal">
                      <Grid.Row>
                        <Grid.Column>
                          <h1>Shivaraj Bakale</h1>
                        </Grid.Column>
                        <Grid.Column style={{ marginTop: "20px" }}>
                          <Button
                            color="instagram"
                            onClick={this.followClicked}
                          >
                            {" "}
                            Follow
                          </Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                  <h5>
                    Hello, this is Shivaraj Bakale and I am building an
                    instagram clone
                  </h5>

                  <div>
                    <Grid columns="equal">
                      <Grid.Row>
                        <Grid.Column>
                          <p>
                            <b>{this.state.posts}</b> posts
                          </p>
                        </Grid.Column>
                        <Grid.Column>
                          <p>
                            <b>{this.state.followers}</b> followers
                          </p>
                        </Grid.Column>
                        <Grid.Column>
                          <p>
                            <b>{this.state.following}</b> following
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                      <Button style={{marginLeft:"10px"}} color="twitter" onClick={this.addPost}>Add Post</Button>
                    </Grid>
                  </div>
                </div>
              </Grid.Column>
            </div>
          </Grid.Row>
        </Grid>
        <hr style={{opacity:'0.5'}}></hr>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        modalToggle:()=>dispatch(modalToggle())
    }
}
export default connect(null, mapDispatchToProps)(ContainerExampleContainer);
