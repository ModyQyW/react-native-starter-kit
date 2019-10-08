import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { layouts, typography } from '../globalStyles'

@observer
class Index extends React.Component {
  @observable navi = this.props.navigation;

  handleToDemoStack = () => {
    this.navi.navigate('DemoStack')
  }

  render () {
    return (
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Text style={[layouts.headerMiddle, typography.textTitle]}>rn-mobx-starter-kit</Text>
        </View>
        <View style={layouts.body}>
          <Text>Do something to start coding!</Text>
          <Button
            onPress={this.handleToDemoStack}
            title='Jump to Demo Index'
          />
        </View>
      </View>
    )
  }
}

Index.propTypes = {
  navigation: PropTypes.any
}

export default Index
