import React, {Component} from 'react';
import {Modal, ModalActions, Button, Form, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {modalToggle} from '../Redux/UIReducer/actions';


class ModelItem extends React.Component{
    constructor(props){
        super(props);
    }
    closeModal=()=>{
        this.setState({open:false});
    }
    render(){
        return(
            <div>
                <Modal size="small" open={this.props.modalState} onClose={this.props.modalToggle}>
                    <Modal.Header>New Post</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.props.modalToggle}>
                            <Form.Field>
                                <label>Caption</label>
                                <input placeholder='caption'></input>
                            </Form.Field>
                            <Form.Field>
                                <label>image</label>
                                <input placeholder='Upload image' type="file"></input>
                            </Form.Field>
                            <Form.Field style={{marginLeft:"30px"}}>
                                <Grid stackable>
                                <Grid.Row>
                                    <Button color="red" type="submit">Upload</Button>
                                    <Button onClick={this.props.modalToggle}>Cancel</Button>
                                </Grid.Row>

                                </Grid>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return{
        modalState:state.app.modalOpen
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        modalToggle:()=>dispatch(modalToggle())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModelItem);