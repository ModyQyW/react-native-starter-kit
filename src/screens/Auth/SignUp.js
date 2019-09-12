import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import PropTypes from 'prop-types'

import { layouts, typography } from '../globalStyles'

const styles = StyleSheet.create({

})

// handle your sign up logic here
// 在这里处理你的注册逻辑
@observer
class SignUp extends React.Component {
  @observable navi = this.props.navigation;

  handleBack = () => {
    this.navi.goBack()
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
  navigation: PropTypes.any
}

export default SignUp
