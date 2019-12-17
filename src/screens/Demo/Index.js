import React from 'react'
import { Button, Text, View } from 'react-native'
import { observer } from 'mobx-react'

import { layouts, typography } from '../../Styles'

const Index = observer((props) => {
  const handleToLayout1 = () => {
    props.navigation.navigate('DemoLayout1')
  }

  const handleToLayout2 = () => {
    props.navigation.navigate('DemoLayout2')
  }

  return (
    <View style={layouts.container}>
      <View style={layouts.header}>
        <Text style={[layouts.headerMiddle, typography.textTitle]}>Demos</Text>
      </View>
      <View style={layouts.body}>
        <Button
          onPress={handleToLayout1}
          title='Navigate to Layout1'
        />
        <Button
          onPress={handleToLayout2}
          title='Navigate to Layout2'
        />
      </View>
    </View>
  )
})

export default Index
