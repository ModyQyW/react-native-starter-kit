import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { layouts, typography } from '../../Styles'

@observer
class Index extends React.Component {
  constructor (props) {
    super(props)
    bindAll(this, [
      'handleToLayout1',
      'handleToLayout2'
    ])
  }

  handleToLayout1 () {
    this.props.navigation.navigate('DemoLayout1')
  }

  handleToLayout2 () {
    this.props.navigation.navigate('DemoLayout2')
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
