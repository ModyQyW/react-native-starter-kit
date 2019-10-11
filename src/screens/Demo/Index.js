import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { layouts, typography } from '@modyqyw/css-styles/react-native/global'

@observer
class Index extends React.Component {
  @observable navi = this.props.navigation;

  constructor (props) {
    super(props)
    bindAll(this, [
      'handleToLayout1',
      'handleToLayout2'
    ])
  }

  handleToLayout1 () {
    this.navi.navigate('DemoLayout1')
  }

  handleToLayout2 () {
    this.navi.navigate('DemoLayout2')
  }

  render () {
    return (
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Text style={[layouts.headerMiddle, typography.textTitle]}>Demos</Text>
        </View>
        <View style={layouts.body}>
          <Button
            onPress={this.handleToLayout1}
            title='Navigate to Layout1'
          />
          <Button
            onPress={this.handleToLayout2}
            title='Navigate to Layout2'
          />
        </View>
      </View>
    )
  }
}

Index.propTypes = {
  navigation: PropTypes.object
}

export default Index
