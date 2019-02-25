import React from "react";
import NavMenu from "./NavMenu";
import Posts from "./Posts";
import ModalItem from './ModalItem';

import { Container } from "semantic-ui-react";

export default class ContainerClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container>
          <NavMenu />
          <ModalItem/>
          <Posts />
        </Container>
      </div>
    );
  }
}
