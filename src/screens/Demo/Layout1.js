import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { Icon } from 'react-native-elements'
import { layouts, typography } from '@modyqyw/css-styles/react-native/global'

@observer
class Layout1 extends React.Component {
  @observable navi = this.props.navigation;

  constructor (props) {
    super(props)
    bindAll(this, [
      'handleBack'
    ])
  }

  handleBack () {
    this.navi.goBack()
  }

  render () {
    return (
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Icon
            name='arrow-back'
            size={26}
            onPress={this.handleBack}
          />
          <Text style={[layouts.headerMiddle, typography.textTitle]}>Demo Layout1</Text>
          <View style={layouts.headerRight} />
        </View>
        <ScrollView
          style={layouts.bodyMain}
        >
          <Text>Body</Text>
          <Text style={layouts.textMainLight}>To test scroll, insert lorem below.</Text>
          <Text>
Culpa duis adipisicing cupidatat eiusmod aliqua in. Eu reprehenderit aliquip sunt eiusmod esse. Adipisicing cillum voluptate dolor aute occaecat incididunt pariatur cillum nulla. Proident labore ipsum sit deserunt minim cupidatat enim nisi veniam ullamco duis et. Ea ipsum laborum aute qui elit.

Proident minim quis fugiat sunt sunt pariatur duis ipsum ullamco nostrud in non. Amet dolor qui mollit sint occaecat qui ad deserunt non enim excepteur laboris ut. Laborum eiusmod excepteur officia quis. Aliqua voluptate incididunt quis ipsum esse Lorem id nostrud laborum do Lorem. Aliqua incididunt fugiat veniam Lorem Lorem mollit quis deserunt nulla fugiat sint laboris amet aliqua. Ex exercitation anim ex irure tempor cupidatat enim quis est.

Enim ea commodo nulla nostrud dolore Lorem eu eu. Aliqua ex velit commodo id. Anim officia exercitation dolore voluptate do dolore ipsum. Proident ex Lorem eu Lorem commodo laboris fugiat proident. Aute tempor ullamco duis cillum.

Cupidatat minim id eu dolore cillum labore laborum Lorem reprehenderit velit adipisicing. Ea est in ea qui non aliqua exercitation mollit consequat nisi. Nulla adipisicing ipsum aute id ipsum. Duis esse tempor laborum adipisicing aliquip do minim ipsum aliquip fugiat aliquip aliqua. Ut ipsum pariatur enim laboris pariatur fugiat sit anim sunt.

Ea enim non cillum nisi voluptate fugiat non culpa. Laborum sunt et commodo anim laborum enim eu. Irure mollit nisi voluptate do commodo. Non nulla duis aute fugiat sit fugiat.

Eiusmod ex anim dolor do tempor dolor. Ut culpa laborum sit veniam ad ullamco. Ad sint in et minim occaecat enim adipisicing in. Voluptate proident consequat qui incididunt duis nulla ipsum cupidatat consequat id incididunt pariatur do consectetur. Amet exercitation Lorem est sint Lorem sint. Eiusmod ad dolore pariatur proident sint proident nostrud excepteur minim reprehenderit.

Ullamco sunt consequat Lorem ea culpa qui. Minim ad qui do amet aute et labore non ex eiusmod. Laboris cillum do cupidatat magna qui. Id labore fugiat anim incididunt non adipisicing. Quis laboris tempor consequat in laborum sit. Ut cillum labore commodo dolore amet ea cupidatat exercitation sunt.

Labore dolore Lorem esse labore consequat mollit culpa sint voluptate do aliqua cillum reprehenderit. Reprehenderit irure consectetur labore minim reprehenderit cupidatat qui enim eiusmod pariatur anim ipsum. Magna qui elit ad duis. Lorem proident reprehenderit officia velit sit aute. Eiusmod est voluptate eu aute ipsum duis. Cupidatat laborum nulla labore tempor consequat esse fugiat duis.

Ex magna do tempor consequat eiusmod ullamco esse labore qui consectetur excepteur commodo amet quis. Reprehenderit officia dolore quis magna cupidatat pariatur magna velit. Labore ullamco enim officia deserunt esse esse aute ea nulla eiusmod proident enim exercitation adipisicing. Aliqua est occaecat non elit qui reprehenderit pariatur voluptate sunt ex do laboris. Exercitation sit ut occaecat sint cillum velit labore irure.

Ad laboris culpa et excepteur ut. Eiusmod elit aute in dolore. Voluptate labore labore ex ut. Ad excepteur reprehenderit deserunt irure in Lorem aliqua culpa nisi in irure nisi. Reprehenderit voluptate irure eiusmod ullamco officia irure occaecat tempor occaecat officia reprehenderit eiusmod.
          </Text>
        </ScrollView>
      </View>
    )
  }
}

Layout1.propTypes = {
  navigation: PropTypes.object
}

export default Layout1
