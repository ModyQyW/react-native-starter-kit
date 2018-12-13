import * as React from 'react';
import { observer, inject } from 'mobx-react/native';
import { observable, action } from 'mobx';

import Home from '../../screens/Home/Home';

export interface Props {
  navigation: any,
}
export interface State {}

@observer
class HomeContainer extends React.Component<Props, State> {
  render() {
    return (<Home />);
  }
}

export default HomeContainer;
