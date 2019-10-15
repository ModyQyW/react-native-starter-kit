import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { layouts, typography } from '@modyqyw/css-styles/react-native/global'

const styles = StyleSheet.create({

})

// handle your sign up logic here
@observer
class SignUp extends React.Component {
  constructor (props) {
    super(props)
    bindAll(this, [
      'handleBack'
    ])
  }

  handleBack () {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Text style={[layouts.headerMiddle, typography.textTitle]}>SignUp</Text>
        </View>
        <View style={layouts.body}>
          <Text>This is the sign up screen.</Text>
          <Text>The button below is from React Native.</Text>
          <Text>Looks like it is a meterial design icon :D</Text>
          <Button
            onPress={this.handleBack}
            title='Go Back'
          />
        </View>
      </View>
    )
  }
}

SignUp.propTypes = {
  navigation: PropTypes.object
}

export default SignUp
