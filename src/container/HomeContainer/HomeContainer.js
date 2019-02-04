import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import Home from '../../screen/Home/Home';

@observer
class HomeContainer extends React.Component {
  render() {
    return (<Home />);
  }
}

export default HomeContainer;
