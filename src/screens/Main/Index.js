import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { layouts, typography } from '@modyqyw/css-styles/react-native/global'

@observer
class Index extends React.Component {
  constructor (props) {
    super(props)
    bindAll(this, [
      'handleToDemoStack'
    ])
  }

  handleToDemoStack () {
    this.props.navigation.navigate('DemoStack')
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
  navigation: PropTypes.object
}

export default Index
