import React from 'react'
import { Button, View, Text } from 'react-native'
import { observer } from 'mobx-react'

import { layouts, typography } from '../../Styles'

const Index = observer((props) => {
  const handleToDemoStack = () => {
    props.navigation.navigate('DemoStack')
  }

  return (
    <View style={layouts.container}>
      <View style={layouts.header}>
        <Text style={[layouts.headerMiddle, typography.textTitle]}>rn-mobx-starter-kit</Text>
      </View>
      <View style={layouts.body}>
        <Text>Do something to start coding!</Text>
        <Button
          onPress={handleToDemoStack}
          title='Jump to Demo Index'
        />
      </View>
    </View>
  )
})

export default Index
