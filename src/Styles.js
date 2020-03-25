import { Dimensions, Platform, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

export const colors = {
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  mdRed: '#f44336',
  mdRed50: '#ffebee',
  mdRed100: '#ffcdd2',
  mdRed200: '#ef9a9a',
  mdRed300: '#e57373',
  mdRed400: '#ef5350',
  mdRed500: '#f44336',
  mdRed600: '#e53935',
  mdRed700: '#d32f2f',
  mdRed800: '#c62828',
  mdRed900: '#b71c1c',
  mdRedA100: '#ff8a80',
  mdRedA200: '#ff5252',
  mdRedA400: '#ff1744',
  mdRedA700: '#d50000',
  mdPink: '#e91e63',
  mdPink50: '#fce4ec',
  mdPink100: '#f8bbd0',
  mdPink200: '#f48fb1',
  mdPink300: '#f06292',
  mdPink400: '#ec407a',
  mdPink500: '#e91e63',
  mdPink600: '#d81b60',
  mdPink700: '#c2185b',
  mdPink800: '#ad1457',
  mdPink900: '#880e4f',
  mdPinkA100: '#ff80ab',
  mdPinkA200: '#ff4081',
  mdPinkA400: '#f50057',
  mdPinkA700: '#c51162',
  mdPurple: '#9c27b0',
  mdPurple50: '#f3e5f5',
  mdPurple100: '#e1bee7',
  mdPurple200: '#ce93d8',
  mdPurple300: '#ba68c8',
  mdPurple400: '#ab47bc',
  mdPurple500: '#9c27b0',
  mdPurple600: '#8e24aa',
  mdPurple700: '#7b1fa2',
  mdPurple800: '#6a1b9a',
  mdPurple900: '#4a148c',
  mdPurpleA100: '#ea80fc',
  mdPurpleA200: '#e040fb',
  mdPurpleA400: '#d500f9',
  mdPurpleA700: '#a0f',
  mdDeepPurple: '#673ab7',
  mdDeepPurple50: '#ede7f6',
  mdDeepPurple100: '#d1c4e9',
  mdDeepPurple200: '#b39ddb',
  mdDeepPurple300: '#9575cd',
  mdDeepPurple400: '#7e57c2',
  mdDeepPurple500: '#673ab7',
  mdDeepPurple600: '#5e35b1',
  mdDeepPurple700: '#512da8',
  mdDeepPurple800: '#4527a0',
  mdDeepPurple900: '#311b92',
  mdDeepPurpleA100: '#b388ff',
  mdDeepPurpleA200: '#7c4dff',
  mdDeepPurpleA400: '#651fff',
  mdDeepPurpleA700: '#6200ea',
  mdIndigo: '#3f51b5',
  mdIndigo50: '#e8eaf6',
  mdIndigo100: '#c5cae9',
  mdIndigo200: '#9fa8da',
  mdIndigo300: '#7986cb',
  mdIndigo400: '#5c6bc0',
  mdIndigo500: '#3f51b5',
  mdIndigo600: '#3949ab',
  mdIndigo700: '#303f9f',
  mdIndigo800: '#283593',
  mdIndigo900: '#1a237e',
  mdIndigoA100: '#8c9eff',
  mdIndigoA200: '#536dfe',
  mdIndigoA400: '#3d5afe',
  mdIndigoA700: '#304ffe',
  mdBlue: '#2196f3',
  mdBlue50: '#e3f2fd',
  mdBlue100: '#bbdefb',
  mdBlue200: '#90caf9',
  mdBlue300: '#64b5f6',
  mdBlue400: '#42a5f5',
  mdBlue500: '#2196f3',
  mdBlue600: '#1e88e5',
  mdBlue700: '#1976d2',
  mdBlue800: '#1565c0',
  mdBlue900: '#0d47a1',
  mdBlueA100: '#82b1ff',
  mdBlueA200: '#448aff',
  mdBlueA400: '#2979ff',
  mdBlueA700: '#2962ff',
  mdLightBlue: '#03a9f4',
  mdLightBlue50: '#e1f5fe',
  mdLightBlue100: '#b3e5fc',
  mdLightBlue200: '#81d4fa',
  mdLightBlue300: '#4fc3f7',
  mdLightBlue400: '#29b6f6',
  mdLightBlue500: '#03a9f4',
  mdLightBlue600: '#039be5',
  mdLightBlue700: '#0288d1',
  mdLightBlue800: '#0277bd',
  mdLightBlue900: '#01579b',
  mdLightBlueA100: '#80d8ff',
  mdLightBlueA200: '#40c4ff',
  mdLightBlueA400: '#00b0ff',
  mdLightBlueA700: '#0091ea',
  mdCyan: '#00bcd4',
  mdCyan50: '#e0f7fa',
  mdCyan100: '#b2ebf2',
  mdCyan200: '#80deea',
  mdCyan300: '#4dd0e1',
  mdCyan400: '#26c6da',
  mdCyan500: '#00bcd4',
  mdCyan600: '#00acc1',
  mdCyan700: '#0097a7',
  mdCyan800: '#00838f',
  mdCyan900: '#006064',
  mdCyanA100: '#84ffff',
  mdCyanA200: '#18ffff',
  mdCyanA400: '#00e5ff',
  mdCyanA700: '#00b8d4',
  mdTeal: '#009688',
  mdTeal50: '#e0f2f1',
  mdTeal100: '#b2dfdb',
  mdTeal200: '#80cbc4',
  mdTeal300: '#4db6ac',
  mdTeal400: '#26a69a',
  mdTeal500: '#009688',
  mdTeal600: '#00897b',
  mdTeal700: '#00796b',
  mdTeal800: '#00695c',
  mdTeal900: '#004d40',
  mdTealA100: '#a7ffeb',
  mdTealA200: '#64ffda',
  mdTealA400: '#1de9b6',
  mdTealA700: '#00bfa5',
  mdGreen: '#4caf50',
  mdGreen50: '#e8f5e9',
  mdGreen100: '#c8e6c9',
  mdGreen200: '#a5d6a7',
  mdGreen300: '#81c784',
  mdGreen400: '#66bb6a',
  mdGreen500: '#4caf50',
  mdGreen600: '#43a047',
  mdGreen700: '#388e3c',
  mdGreen800: '#2e7d32',
  mdGreen900: '#1b5e20',
  mdGreenA100: '#b9f6ca',
  mdGreenA200: '#69f0ae',
  mdGreenA400: '#00e676',
  mdGreenA700: '#00c853',
  mdLightGreen: '#8bc34a',
  mdLightGreen50: '#f1f8e9',
  mdLightGreen100: '#dcedc8',
  mdLightGreen200: '#c5e1a5',
  mdLightGreen300: '#aed581',
  mdLightGreen400: '#9ccc65',
  mdLightGreen500: '#8bc34a',
  mdLightGreen600: '#7cb342',
  mdLightGreen700: '#689f38',
  mdLightGreen800: '#558b2f',
  mdLightGreen900: '#33691e',
  mdLightGreenA100: '#ccff90',
  mdLightGreenA200: '#b2ff59',
  mdLightGreenA400: '#76ff03',
  mdLightGreenA700: '#64dd17',
  mdLime: '#cddc39',
  mdLime50: '#f9fbe7',
  mdLime100: '#f0f4c3',
  mdLime200: '#e6ee9c',
  mdLime300: '#dce775',
  mdLime400: '#d4e157',
  mdLime500: '#cddc39',
  mdLime600: '#c0ca33',
  mdLime700: '#afb42b',
  mdLime800: '#9e9d24',
  mdLime900: '#827717',
  mdLimeA100: '#f4ff81',
  mdLimeA200: '#eeff41',
  mdLimeA400: '#c6ff00',
  mdLimeA700: '#aeea00',
  mdYellow: '#ffeb3b',
  mdYellow50: '#fffde7',
  mdYellow100: '#fff9c4',
  mdYellow200: '#fff59d',
  mdYellow300: '#fff176',
  mdYellow400: '#ffee58',
  mdYellow500: '#ffeb3b',
  mdYellow600: '#fdd835',
  mdYellow700: '#fbc02d',
  mdYellow800: '#f9a825',
  mdYellow900: '#f57f17',
  mdYellowA100: '#ffff8d',
  mdYellowA200: '#ff0',
  mdYellowA400: '#ffea00',
  mdYellowA700: '#ffd600',
  mdAmber: '#ffc107',
  mdAmber50: '#fff8e1',
  mdAmber100: '#ffecb3',
  mdAmber200: '#ffe082',
  mdAmber300: '#ffd54f',
  mdAmber400: '#ffca28',
  mdAmber500: '#ffc107',
  mdAmber600: '#ffb300',
  mdAmber700: '#ffa000',
  mdAmber800: '#ff8f00',
  mdAmber900: '#ff6f00',
  mdAmberA100: '#ffe57f',
  mdAmberA200: '#ffd740',
  mdAmberA400: '#ffc400',
  mdAmberA700: '#ffab00',
  mdOrange: '#ff9800',
  mdOrange50: '#fff3e0',
  mdOrange100: '#ffe0b2',
  mdOrange200: '#ffcc80',
  mdOrange300: '#ffb74d',
  mdOrange400: '#ffa726',
  mdOrange500: '#ff9800',
  mdOrange600: '#fb8c00',
  mdOrange700: '#f57c00',
  mdOrange800: '#ef6c00',
  mdOrange900: '#e65100',
  mdOrangeA100: '#ffd180',
  mdOrangeA200: '#ffab40',
  mdOrangeA400: '#ff9100',
  mdOrangeA700: '#ff6d00',
  mdDeepOrange: '#ff5722',
  mdDeepOrange50: '#fbe9e7',
  mdDeepOrange100: '#ffccbc',
  mdDeepOrange200: '#ffab91',
  mdDeepOrange300: '#ff8a65',
  mdDeepOrange400: '#ff7043',
  mdDeepOrange500: '#ff5722',
  mdDeepOrange600: '#f4511e',
  mdDeepOrange700: '#e64a19',
  mdDeepOrange800: '#d84315',
  mdDeepOrange900: '#bf360c',
  mdDeepOrangeA100: '#ff9e80',
  mdDeepOrangeA200: '#ff6e40',
  mdDeepOrangeA400: '#ff3d00',
  mdDeepOrangeA700: '#dd2c00',
  mdBrown: '#795548',
  mdBrown50: '#efebe9',
  mdBrown100: '#d7ccc8',
  mdBrown200: '#bcaaa4',
  mdBrown300: '#a1887f',
  mdBrown400: '#8d6e63',
  mdBrown500: '#795548',
  mdBrown600: '#6d4c41',
  mdBrown700: '#5d4037',
  mdBrown800: '#4e342e',
  mdBrown900: '#3e2723',
  mdGray: '#9e9e9e',
  mdGray50: '#fafafa',
  mdGray100: '#f5f5f5',
  mdGray200: '#eee',
  mdGray300: '#e0e0e0',
  mdGray400: '#bdbdbd',
  mdGray500: '#9e9e9e',
  mdGray600: '#757575',
  mdGray700: '#616161',
  mdGray800: '#424242',
  mdGray900: '#212121',
  mdBlueGray: '#607d8b',
  mdBlueGray50: '#eceff1',
  mdBlueGray100: '#cfd8dc',
  mdBlueGray200: '#b0bec5',
  mdBlueGray300: '#90a4ae',
  mdBlueGray400: '#78909c',
  mdBlueGray500: '#607d8b',
  mdBlueGray600: '#546e7a',
  mdBlueGray700: '#455a64',
  mdBlueGray800: '#37474f',
  mdBlueGray900: '#263238',
  adRed: '#f5222d',
  adRed1: '#fff1f0',
  adRed2: '#ffccc7',
  adRed3: '#ffa39e',
  adRed4: '#ff7875',
  adRed5: '#ff4d4f',
  adRed6: '#f5222d',
  adRed7: '#cf1322',
  adRed8: '#a8071a',
  adRed9: '#820014',
  adRed10: '#5c0011',
  adVolcano: '#fa541c',
  adVolcano1: '#fff2e8',
  adVolcano2: '#ffd8bf',
  adVolcano3: '#ffbb96',
  adVolcano4: '#ff9c6e',
  adVolcano5: '#ff7a45',
  adVolcano6: '#fa541c',
  adVolcano7: '#d4380d',
  adVolcano8: '#ad2102',
  adVolcano9: '#871400',
  adVolcano10: '#610b00',
  adOrange: '#fa8c16',
  adOrange1: '#fff7e6',
  adOrange2: '#ffe7ba',
  adOrange3: '#ffd591',
  adOrange4: '#ffc069',
  adOrange5: '#ffa940',
  adOrange6: '#fa8c16',
  adOrange7: '#d46b08',
  adOrange8: '#ad4e00',
  adOrange9: '#873800',
  adOrange10: '#612500',
  adGold: '#faad14',
  adGold1: '#fffbe6',
  adGold2: '#fff1b8',
  adGold3: '#ffe58f',
  adGold4: '#ffd666',
  adGold5: '#ffc53d',
  adGold6: '#faad14',
  adGold7: '#d48806',
  adGold8: '#ad6800',
  adGold9: '#874d00',
  adGold10: '#613400',
  adYellow: '#fadb14',
  adYellow1: '#feffe6',
  adYellow2: '#ffffb8',
  adYellow3: '#fffb8f',
  adYellow4: '#fff566',
  adYellow5: '#ffec3d',
  adYellow6: '#fadb14',
  adYellow7: '#d4b106',
  adYellow8: '#ad8b00',
  adYellow9: '#876800',
  adYellow10: '#614700',
  adLime: '#a0d911',
  adLime1: '#fcffe6',
  adLime2: '#f4ffb8',
  adLime3: '#eaff8f',
  adLime4: '#d3f261',
  adLime5: '#bae637',
  adLime6: '#a0d911',
  adLime7: '#7cb305',
  adLime8: '#5b8c00',
  adLime9: '#3f6600',
  adLime10: '#254000',
  adGreen: '#52c41a',
  adGreen1: '#f6ffed',
  adGreen2: '#d9f7be',
  adGreen3: '#b7eb8f',
  adGreen4: '#95de64',
  adGreen5: '#73d13d',
  adGreen6: '#52c41a',
  adGreen7: '#389e0d',
  adGreen8: '#237804',
  adGreen9: '#135200',
  adGreen10: '#092b00',
  adCyan: '#13c2c2',
  adCyan1: '#e6fffb',
  adCyan2: '#b5f5ec',
  adCyan3: '#87e8de',
  adCyan4: '#5cdbd3',
  adCyan5: '#36cfc9',
  adCyan6: '#13c2c2',
  adCyan7: '#08979c',
  adCyan8: '#006d75',
  adCyan9: '#00474f',
  adCyan10: '#002329',
  adBlue: '#1890ff',
  adBlue1: '#e6f7ff',
  adBlue2: '#bae7ff',
  adBlue3: '#91d5ff',
  adBlue4: '#69c0ff',
  adBlue5: '#40a9ff',
  adBlue6: '#1890ff',
  adBlue7: '#096dd9',
  adBlue8: '#0050b3',
  adBlue9: '#003a8c',
  adBlue10: '#002766',
  adGeekBlue: '#2f54eb',
  adGeekBlue1: '#f0f5ff',
  adGeekBlue2: '#d6e4ff',
  adGeekBlue3: '#adc6ff',
  adGeekBlue4: '#85a5ff',
  adGeekBlue5: '#597ef7',
  adGeekBlue6: '#2f54eb',
  adGeekBlue7: '#1d39c4',
  adGeekBlue8: '#10239e',
  adGeekBlue9: '#061178',
  adGeekBlue10: '#030852',
  adPurple: '#722ed1',
  adPurple1: '#f9f0ff',
  adPurple2: '#efdbff',
  adPurple3: '#d3adf7',
  adPurple4: '#b37feb',
  adPurple5: '#9254de',
  adPurple6: '#722ed1',
  adPurple7: '#531dab',
  adPurple8: '#391085',
  adPurple9: '#22075e',
  adPurple10: '#120338',
  adMagenta: '#eb2f96',
  adMagenta1: '#fff0f6',
  adMagenta2: '#ffd6e7',
  adMagenta3: '#ffadd2',
  adMagenta4: '#ff85c0',
  adMagenta5: '#f759ab',
  adMagenta6: '#eb2f96',
  adMagenta7: '#c41d7f',
  adMagenta8: '#9e1068',
  adMagenta9: '#780650',
  adMagenta10: '#520339',
  adGray: '#8c8c8c',
  adGray1: '#fff',
  adGray2: '#fafafa',
  adGray3: '#f5f5f5',
  adGray4: '#f0f0f0',
  adGray5: '#d9d9d9',
  adGray6: '#bfbfbf',
  adGray7: '#8c8c8c',
  adGray8: '#595959',
  adGray9: '#434343',
  adGray10: '#262626',
  adGray11: '#1f1f1f',
  adGray12: '#141414',
  adGray13: '#000000',
  title: 'rgba(0, 0, 0, 0.85)',
  titleLight: 'rgba(0, 0, 0, 0.75)',
  main: 'rgba(0, 0, 0, 0.65)',
  mainLight: 'rgba(0, 0, 0, 0.55)',
  secondary: 'rgba(0, 0, 0, 0.45)',
  disabled: 'rgba(0, 0, 0, 0.25)',
  container: '#fff',
  component: 'rgba(0, 0, 0, 0.04)',
  divider: 'rgba(0, 0, 0, 0.06)',
  border: 'rgba(0, 0, 0, .15)',
  titleReverse: 'rgba(255, 255, 255, .85)',
  titleLightReverse: 'rgba(255, 255, 255, 0.75)',
  mainReverse: 'rgba(255, 255, 255, 0.65)',
  mainLightReverse: 'rgba(255, 255, 255, 0.55)',
  secondaryReverse: 'rgba(255, 255, 255, 0.45)',
  disabledReverse: 'rgba(255, 255, 255, 0.30)',
  containerReverse: '#141414',
  componentReverse: 'rgba(255, 255, 255, 0.08)',
  dividerReverse: 'rgba(255, 255, 255, 0.12)',
  borderReverse: 'rgba(255, 255, 255, .2)',
  mask: 'rgba(0, 0, 0, 0.45)',
  shadow: 'rgba(0, 0, 0, 0.45)'
}

export const positioning = StyleSheet.create({
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  },
  top0: {
    top: 0
  },
  topAuto: {
    top: 'auto'
  },
  right0: {
    right: 0
  },
  rightAuto: {
    right: 'auto'
  },
  bottom0: {
    bottom: 0
  },
  bottomAuto: {
    bottom: 'auto'
  },
  left0: {
    left: 0
  },
  leftAuto: {
    left: 'auto'
  },
  inset0: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  insetAuto: {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  },
  insetY0: {
    top: 0,
    bottom: 0
  },
  insetYAuto: {
    top: 'auto',
    bottom: 'auto'
  },
  insetX0: {
    right: 0,
    left: 0
  },
  insetXAuto: {
    right: 'auto',
    left: 'auto'
  },
  z0: {
    zIndex: 0
  },
  z100: {
    zIndex: 100
  },
  z200: {
    zIndex: 200
  },
  z300: {
    zIndex: 300
  },
  z400: {
    zIndex: 400
  },
  z500: {
    zIndex: 500
  },
  z600: {
    zIndex: 600
  },
  z700: {
    zIndex: 700
  },
  z800: {
    zIndex: 800
  },
  z900: {
    zIndex: 900
  },
  z1000: {
    zIndex: 1000
  },
  z1200: {
    zIndex: 1200
  },
  z1400: {
    zIndex: 1400
  },
  z1600: {
    zIndex: 1600
  },
  z1800: {
    zIndex: 1800
  },
  z2000: {
    zIndex: 2000
  },
  z2200: {
    zIndex: 2200
  },
  z2400: {
    zIndex: 2400
  },
  zAuto: {
    zIndex: 0
  },
  zDefault: {
    zIndex: 0
  }
})

export const boxModel = StyleSheet.create({
  flexInit: {
    flex: 1
  },
  flexInitial: {
    flex: 1
  },
  flexDefault: {
    flex: 1
  },
  flexNone: {
    flex: 0
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowReverse: {
    flexDirection: 'row-reverse'
  },
  flexCol: {
    flexDirection: 'column'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexColReverse: {
    flexDirection: 'column-reverse'
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse'
  },
  flexNowrap: {
    flexWrap: 'nowrap'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse'
  },
  alignContentStart: {
    alignContent: 'flex-start'
  },
  alignContentEnd: {
    alignContent: 'flex-end'
  },
  alignContentCenter: {
    alignContent: 'center'
  },
  alignContentSpaceBetween: {
    alignContent: 'space-between'
  },
  alignContentSpaceAround: {
    alignContent: 'space-around'
  },
  alignContentDefault: {
    alignContent: 'flex-start'
  },
  alignItemsStart: {
    alignItems: 'flex-start'
  },
  alignItemsEnd: {
    alignItems: 'flex-end'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsBaseline: {
    alignItems: 'baseline'
  },
  alignItemsStretch: {
    alignItems: 'stretch'
  },
  alignItemsDefault: {
    alignItems: 'flex-start'
  },
  alignSelfAuto: {
    alignSelf: 'auto'
  },
  alignSelfStart: {
    alignSelf: 'flex-start'
  },
  alignSelfEnd: {
    alignSelf: 'flex-end'
  },
  alignSelfCenter: {
    alignSelf: 'center'
  },
  alignSelfBaseline: {
    alignSelf: 'baseline'
  },
  alignSelfStretch: {
    alignSelf: 'stretch'
  },
  alignSelfDefault: {
    alignSelf: 'auto'
  },
  justifyContentStart: {
    justifyContent: 'flex-start'
  },
  justifyContentEnd: {
    justifyContent: 'flex-end'
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between'
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around'
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly'
  },
  justifyContentDefault: {
    justifyContent: 'flex-start'
  },
  width0: {
    width: 0
  },
  width1: {
    width: 1
  },
  // width 1 divided by 2
  width1D2: {
    width: '50%'
  },
  width1D3: {
    width: '33.33333333%'
  },
  width2D3: {
    width: '66.66666667%'
  },
  width1D4: {
    width: '25%'
  },
  width2D4: {
    width: '50%'
  },
  width3D4: {
    width: '75%'
  },
  width1D5: {
    width: '20%'
  },
  width2D5: {
    width: '40%'
  },
  width3D5: {
    width: '60%'
  },
  width4D5: {
    width: '80%'
  },
  width1D6: {
    width: '16.66666667%'
  },
  width2D6: {
    width: '33.33333333%'
  },
  width3D6: {
    width: '50%'
  },
  width4D6: {
    width: '66.66666667%'
  },
  width5D6: {
    width: '83.33333333%'
  },
  width1D8: {
    width: '12.5%'
  },
  width2D8: {
    width: '25%'
  },
  width3D8: {
    width: '37.5%'
  },
  width4D8: {
    width: '50%'
  },
  width5D8: {
    width: '62.5%'
  },
  width6D8: {
    width: '75%'
  },
  width7D8: {
    width: '87.5%'
  },
  width1D12: {
    width: '8.33333333%'
  },
  width2D12: {
    width: '16.66666667%'
  },
  width3D12: {
    width: '25%'
  },
  width4D12: {
    width: '33.33333333%'
  },
  width5D12: {
    width: '41.66666667%'
  },
  width6D12: {
    width: '50%'
  },
  width7D12: {
    width: '58.33333333%'
  },
  width8D12: {
    width: '66.66666667%'
  },
  width9D12: {
    width: '75%'
  },
  width10D12: {
    width: '83.33333333%'
  },
  width11D12: {
    width: '91.66666667%'
  },
  width1D24: {
    width: '4.16666667%'
  },
  width2D24: {
    width: '8.33333333%'
  },
  width3D24: {
    width: '12.5%'
  },
  width4D24: {
    width: '16.66666667%'
  },
  width5D24: {
    width: '20.83333333%'
  },
  width6D24: {
    width: '25%'
  },
  width7D24: {
    width: '29.16666667%'
  },
  width8D24: {
    width: '33.33333333%'
  },
  width9D24: {
    width: '37.5%'
  },
  width10D24: {
    width: '41.66666667%'
  },
  width11D24: {
    width: '45.83333333%'
  },
  width12D24: {
    width: '50%'
  },
  width13D24: {
    width: '54.16666667%'
  },
  width14D24: {
    width: '58.33333333%'
  },
  width15D24: {
    width: '62.5%'
  },
  width16D24: {
    width: '66.66666667%'
  },
  width17D24: {
    width: '70.83333333%'
  },
  width18D24: {
    width: '75%'
  },
  width19D24: {
    width: '79.16666667%'
  },
  width20D24: {
    width: '83.33333333%'
  },
  width21D24: {
    width: '87.5%'
  },
  width22D24: {
    width: '91.66666667%'
  },
  width23D24: {
    width: '95.83333333%'
  },
  widthDevice: {
    width
  },
  widthHalf: {
    width: '50%'
  },
  widthFull: {
    width: '100%'
  },
  minWidth0: {
    minWidth: 0
  },
  minWidthFull: {
    minWidth: '100%'
  },
  maxWidthFull: {
    maxWidth: '100%'
  },
  height0: {
    height: 0
  },
  height1: {
    height: 1
  },
  heightHalf: {
    height: '50%'
  },
  heightFull: {
    height: '100%'
  },
  heightDevice: {
    height
  },
  minHeight0: {
    minHeight: 0
  },
  minHeightFull: {
    minHeight: '100%'
  },
  maxHeightFull: {
    maxHeight: '100%'
  },
  p0: {
    padding: 0
  },
  pY0: {
    paddingTop: 0,
    paddingBottom: 0
  },
  pT0: {
    paddingTop: 0
  },
  pB0: {
    paddingBottom: 0
  },
  pX0: {
    paddingRight: 0,
    paddingLeft: 0
  },
  pR0: {
    paddingRight: 0
  },
  pL0: {
    paddingLeft: 0
  },
  p1: {
    padding: 1
  },
  pY1: {
    paddingTop: 1,
    paddingBottom: 1
  },
  pT1: {
    paddingTop: 1
  },
  pB1: {
    paddingBottom: 1
  },
  pX1: {
    paddingRight: 1,
    paddingLeft: 1
  },
  pR1: {
    paddingRight: 1
  },
  pL1: {
    paddingLeft: 1
  },
  p2: {
    padding: 2
  },
  pY2: {
    paddingTop: 2,
    paddingBottom: 2
  },
  pT2: {
    paddingTop: 2
  },
  pB2: {
    paddingBottom: 0
  },
  pX2: {
    paddingRight: 2,
    paddingLeft: 2
  },
  pR2: {
    paddingRight: 2
  },
  pL2: {
    paddingLeft: 2
  },
  p4: {
    padding: 4
  },
  pY4: {
    paddingTop: 4,
    paddingBottom: 4
  },
  pT4: {
    paddingTop: 4
  },
  pB4: {
    paddingBottom: 4
  },
  pX4: {
    paddingRight: 4,
    paddingLeft: 4
  },
  pR4: {
    paddingRight: 4
  },
  pL4: {
    paddingLeft: 4
  },
  p8: {
    padding: 8
  },
  pY8: {
    paddingTop: 8,
    paddingBottom: 8
  },
  pT8: {
    paddingTop: 8
  },
  pB8: {
    paddingBottom: 8
  },
  pX8: {
    paddingRight: 8,
    paddingLeft: 8
  },
  pR8: {
    paddingRight: 8
  },
  pL8: {
    paddingLeft: 8
  },
  p12: {
    padding: 12
  },
  pY12: {
    paddingTop: 12,
    paddingBottom: 12
  },
  pT12: {
    paddingTop: 12
  },
  pB12: {
    paddingBottom: 12
  },
  pX12: {
    paddingRight: 12,
    paddingLeft: 12
  },
  pR12: {
    paddingRight: 12
  },
  pL12: {
    paddingLeft: 12
  },
  p16: {
    padding: 16
  },
  pY16: {
    paddingTop: 16,
    paddingBottom: 16
  },
  pT16: {
    paddingTop: 16
  },
  pB16: {
    paddingBottom: 16
  },
  pX16: {
    paddingRight: 16,
    paddingLeft: 16
  },
  pR16: {
    paddingRight: 16
  },
  pL16: {
    paddingLeft: 16
  },
  p20: {
    padding: 20
  },
  pY20: {
    paddingTop: 20,
    paddingBottom: 20
  },
  pT20: {
    paddingTop: 20
  },
  pB20: {
    paddingBottom: 20
  },
  pX20: {
    paddingRight: 20,
    paddingLeft: 20
  },
  pR20: {
    paddingRight: 20
  },
  pL20: {
    paddingLeft: 20
  },
  p24: {
    padding: 24
  },
  pY24: {
    paddingTop: 24,
    paddingBottom: 24
  },
  pT24: {
    paddingTop: 24
  },
  pB24: {
    paddingBottom: 24
  },
  pX24: {
    paddingRight: 24,
    paddingLeft: 24
  },
  pR24: {
    paddingRight: 24
  },
  pL24: {
    paddingLeft: 24
  },
  p28: {
    padding: 28
  },
  pY28: {
    paddingTop: 28,
    paddingBottom: 28
  },
  pT28: {
    paddingTop: 28
  },
  pB28: {
    paddingBottom: 28
  },
  pX28: {
    paddingRight: 28,
    paddingLeft: 28
  },
  pR28: {
    paddingRight: 28
  },
  pL28: {
    paddingLeft: 28
  },
  p32: {
    padding: 32
  },
  pY32: {
    paddingTop: 32,
    paddingBottom: 32
  },
  pT32: {
    paddingTop: 32
  },
  pB32: {
    paddingBottom: 32
  },
  pX32: {
    paddingRight: 32,
    paddingLeft: 32
  },
  pR32: {
    paddingRight: 32
  },
  pL32: {
    paddingLeft: 32
  },
  p36: {
    padding: 36
  },
  pY36: {
    paddingTop: 36,
    paddingBottom: 36
  },
  pT36: {
    paddingTop: 36
  },
  pB36: {
    paddingBottom: 36
  },
  pX36: {
    paddingRight: 36,
    paddingLeft: 36
  },
  pR36: {
    paddingRight: 36
  },
  pL36: {
    paddingLeft: 36
  },
  m0: {
    margin: 0
  },
  mY0: {
    marginTop: 0,
    marginBottom: 0
  },
  mT0: {
    marginTop: 0
  },
  mB0: {
    marginBottom: 0
  },
  mX0: {
    marginRight: 0,
    marginLeft: 0
  },
  mR0: {
    marginRight: 0
  },
  mL0: {
    marginLeft: 0
  },
  m1: {
    margin: 1
  },
  mY1: {
    marginTop: 1,
    marginBottom: 1
  },
  mT1: {
    marginTop: 1
  },
  mB1: {
    marginBottom: 1
  },
  mX1: {
    marginRight: 1,
    marginLeft: 1
  },
  mR1: {
    marginRight: 1
  },
  mL1: {
    marginLeft: 1
  },
  m2: {
    margin: 2
  },
  mY2: {
    marginTop: 2,
    marginBottom: 2
  },
  mT2: {
    marginTop: 2
  },
  mB2: {
    marginBottom: 0
  },
  mX2: {
    marginRight: 2,
    marginLeft: 2
  },
  mR2: {
    marginRight: 2
  },
  mL2: {
    marginLeft: 2
  },
  m4: {
    margin: 4
  },
  mY4: {
    marginTop: 4,
    marginBottom: 4
  },
  mT4: {
    marginTop: 4
  },
  mB4: {
    marginBottom: 4
  },
  mX4: {
    marginRight: 4,
    marginLeft: 4
  },
  mR4: {
    marginRight: 4
  },
  mL4: {
    marginLeft: 4
  },
  m8: {
    margin: 8
  },
  mY8: {
    marginTop: 8,
    marginBottom: 8
  },
  mT8: {
    marginTop: 8
  },
  mB8: {
    marginBottom: 8
  },
  mX8: {
    marginRight: 8,
    marginLeft: 8
  },
  mR8: {
    marginRight: 8
  },
  mL8: {
    marginLeft: 8
  },
  m12: {
    margin: 12
  },
  mY12: {
    marginTop: 12,
    marginBottom: 12
  },
  mT12: {
    marginTop: 12
  },
  mB12: {
    marginBottom: 12
  },
  mX12: {
    marginRight: 12,
    marginLeft: 12
  },
  mR12: {
    marginRight: 12
  },
  mL12: {
    marginLeft: 12
  },
  m16: {
    margin: 16
  },
  mY16: {
    marginTop: 16,
    marginBottom: 16
  },
  mT16: {
    marginTop: 16
  },
  mB16: {
    marginBottom: 16
  },
  mX16: {
    marginRight: 16,
    marginLeft: 16
  },
  mR16: {
    marginRight: 16
  },
  mL16: {
    marginLeft: 16
  },
  m20: {
    margin: 20
  },
  mY20: {
    marginTop: 20,
    marginBottom: 20
  },
  mT20: {
    marginTop: 20
  },
  mB20: {
    marginBottom: 20
  },
  mX20: {
    marginRight: 20,
    marginLeft: 20
  },
  mR20: {
    marginRight: 20
  },
  mL20: {
    marginLeft: 20
  },
  m24: {
    margin: 24
  },
  mY24: {
    marginTop: 24,
    marginBottom: 24
  },
  mT24: {
    marginTop: 24
  },
  mB24: {
    marginBottom: 24
  },
  mX24: {
    marginRight: 24,
    marginLeft: 24
  },
  mR24: {
    marginRight: 24
  },
  mL24: {
    marginLeft: 24
  },
  m28: {
    margin: 28
  },
  mY28: {
    marginTop: 28,
    marginBottom: 28
  },
  mT28: {
    marginTop: 28
  },
  mB28: {
    marginBottom: 28
  },
  mX28: {
    marginRight: 28,
    marginLeft: 28
  },
  mR28: {
    marginRight: 28
  },
  mL28: {
    marginLeft: 28
  },
  m32: {
    margin: 32
  },
  mY32: {
    marginTop: 32,
    marginBottom: 32
  },
  mT32: {
    marginTop: 32
  },
  mB32: {
    marginBottom: 32
  },
  mX32: {
    marginRight: 32,
    marginLeft: 32
  },
  mR32: {
    marginRight: 32
  },
  mL32: {
    marginLeft: 32
  },
  m36: {
    margin: 36
  },
  mY36: {
    marginTop: 36,
    marginBottom: 36
  },
  mT36: {
    marginTop: 36
  },
  mB36: {
    marginBottom: 36
  },
  mX36: {
    marginRight: 36,
    marginLeft: 36
  },
  mR36: {
    marginRight: 36
  },
  mL36: {
    marginLeft: 36
  },
  overflowVisible: {
    overflow: 'visible'
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  overflowScroll: {
    overflow: 'scroll'
  }
})

export const typography = StyleSheet.create({
  textXs: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 18
  },
  textSm: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20
  },
  textMd: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22
  },
  textLg: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24
  },
  textXl: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26
  },
  text2Xl: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28
  },
  text3Xl: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32
  },
  text4Xl: {
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36
  },
  text5Xl: {
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 44
  },
  text6Xl: {
    fontSize: 48,
    fontWeight: '400',
    lineHeight: 56
  },
  text7Xl: {
    fontSize: 56,
    fontWeight: '400',
    lineHeight: 64
  },
  text8Xl: {
    fontSize: 64,
    fontWeight: '400',
    lineHeight: 72
  },
  text10: {
    fontSize: 10
  },
  text11: {
    fontSize: 11
  },
  text12: {
    fontSize: 12
  },
  text13: {
    fontSize: 13
  },
  text14: {
    fontSize: 14
  },
  text15: {
    fontSize: 15
  },
  text16: {
    fontSize: 16
  },
  text17: {
    fontSize: 17
  },
  text18: {
    fontSize: 18
  },
  text19: {
    fontSize: 19
  },
  text20: {
    fontSize: 20
  },
  text22: {
    fontSize: 22
  },
  text24: {
    fontSize: 24
  },
  text26: {
    fontSize: 26
  },
  text28: {
    fontSize: 28
  },
  text30: {
    fontSize: 30
  },
  text32: {
    fontSize: 32
  },
  text34: {
    fontSize: 34
  },
  text36: {
    fontSize: 36
  },
  text38: {
    fontSize: 38
  },
  text40: {
    fontSize: 40
  },
  text42: {
    fontSize: 42
  },
  text44: {
    fontSize: 44
  },
  text46: {
    fontSize: 46
  },
  text48: {
    fontSize: 48
  },
  text50: {
    fontSize: 50
  },
  text52: {
    fontSize: 52
  },
  text54: {
    fontSize: 54
  },
  text56: {
    fontSize: 56
  },
  text58: {
    fontSize: 58
  },
  text60: {
    fontSize: 60
  },
  text62: {
    fontSize: 62
  },
  text64: {
    fontSize: 64
  },
  textNormal: {
    fontStyle: 'normal'
  },
  textItalic: {
    fontStyle: 'italic'
  },
  textThin: {
    fontWeight: '100'
  },
  textExtraLight: {
    fontWeight: '200'
  },
  textUltraLight: {
    fontWeight: '200'
  },
  textLight: {
    fontWeight: '300'
  },
  textRegular: {
    fontWeight: '400'
  },
  textMedium: {
    fontWeight: '500'
  },
  textSemiBold: {
    fontWeight: '600'
  },
  textBold: {
    fontWeight: '700'
  },
  textExtraBold: {
    fontWeight: '800'
  },
  textUltraBold: {
    fontWeight: '800'
  },
  textBlack: {
    fontWeight: '900'
  },
  textHeavy: {
    fontWeight: '900'
  },
  textTabularNums: {
    fontVariant: ['tabular-nums']
  },
  lineHeight18: {
    lineHeight: 18
  },
  lineHeight19: {
    lineHeight: 19
  },
  lineHeight20: {
    lineHeight: 20
  },
  lineHeight21: {
    lineHeight: 21
  },
  lineHeight22: {
    lineHeight: 22
  },
  lineHeight23: {
    lineHeight: 23
  },
  lineHeight24: {
    lineHeight: 24
  },
  lineHeight25: {
    lineHeight: 25
  },
  lineHeight26: {
    lineHeight: 26
  },
  lineHeight27: {
    lineHeight: 27
  },
  lineHeight28: {
    lineHeight: 28
  },
  lineHeight30: {
    lineHeight: 30
  },
  lineHeight32: {
    lineHeight: 32
  },
  lineHeight34: {
    lineHeight: 34
  },
  lineHeight36: {
    lineHeight: 36
  },
  lineHeight38: {
    lineHeight: 38
  },
  lineHeight40: {
    lineHeight: 40
  },
  lineHeight42: {
    lineHeight: 42
  },
  lineHeight44: {
    lineHeight: 44
  },
  lineHeight46: {
    lineHeight: 46
  },
  lineHeight48: {
    lineHeight: 48
  },
  lineHeight50: {
    lineHeight: 50
  },
  lineHeight52: {
    lineHeight: 52
  },
  lineHeight54: {
    lineHeight: 54
  },
  lineHeight56: {
    lineHeight: 56
  },
  lineHeight58: {
    lineHeight: 58
  },
  lineHeight60: {
    lineHeight: 60
  },
  lineHeight62: {
    lineHeight: 62
  },
  lineHeight64: {
    lineHeight: 64
  },
  lineHeight66: {
    lineHeight: 66
  },
  lineHeight68: {
    lineHeight: 68
  },
  lineHeight70: {
    lineHeight: 70
  },
  lineHeight72: {
    lineHeight: 72
  },
  textTitle: {
    color: colors.title
  },
  textTitleReverse: {
    color: colors.titleReverse
  },
  textTitleLight: {
    color: colors.titleLight
  },
  textTitleLightReverse: {
    color: colors.titleLightReverse
  },
  textMain: {
    color: colors.main
  },
  textMainReverse: {
    color: colors.mainReverse
  },
  textMainLight: {
    color: colors.mainLight
  },
  textMainLightReverse: {
    color: colors.mainLightReverse
  },
  textSecondary: {
    color: colors.secondary
  },
  textSecondaryReverse: {
    color: colors.secondaryReverse
  },
  textDisabled: {
    color: colors.disabled
  },
  textDisabledReverse: {
    color: colors.disabledReverse
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  textTop: {
    textAlignVertical: 'top'
  },
  textBottom: {
    textAlignVertical: 'bottom'
  },
  textAlignVerticalCenter: {
    textAlignVertical: 'center'
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  textLineThrough: {
    textDecorationLine: 'line-through'
  },
  textNoLine: {
    textDecorationLine: 'none'
  },
  textCapitalize: {
    textTransform: 'capitalize'
  },
  textUpper: {
    textTransform: 'uppercase'
  },
  textUppercase: {
    textTransform: 'uppercase'
  },
  textLower: {
    textTransform: 'lowercase'
  },
  textLowercase: {
    textTransform: 'lowercase'
  },
  textNoTransform: {
    textTransform: 'none'
  },
  noFontPadding: {
    includeFontPadding: false
  },
  includeFontPadding: {
    includeFontPadding: true
  },
  writingDirectionAuto: {
    writingDirection: 'auto'
  },
  writingDirectionRtl: {
    writingDirection: 'rtl'
  },
  writingDirectionLtr: {
    writingDirection: 'ltr'
  }
})

export const visual = StyleSheet.create({
  bgContainer: {
    backgroundColor: colors.container
  },
  bgContainerReverse: {
    backgroundColor: colors.containerReverse
  },
  bgLight: {
    backgroundColor: colors.container
  },
  bgDark: {
    backgroundColor: colors.containerReverse
  },
  bgDefault: {
    backgroundColor: colors.component
  },
  bgDefaultReverse: {
    backgroundColor: colors.componentReverse
  },
  bgDivider: {
    backgroundColor: colors.divider
  },
  bgDividerReverse: {
    backgroundColor: colors.dividerReverse
  },
  bgMask: {
    backgroundColor: colors.mask
  },
  bgShadow: {
    backgroundColor: colors.shadow
  },
  bordered: {
    borderColor: colors.border,
    borderStyle: 'solid',
    borderWidth: 1
  },
  borderedReverse: {
    borderColor: colors.borderReverse,
    borderStyle: 'solid',
    borderWidth: 1
  },
  borderedTop: {
    borderTopColor: colors.border,
    borderStyle: 'solid',
    borderTopWidth: 1
  },
  borderedTopReverse: {
    borderTopColor: colors.borderReverse,
    borderStyle: 'solid',
    borderTopWidth: 1
  },
  borderedRight: {
    borderRightColor: colors.border,
    borderStyle: 'solid',
    borderRightWidth: 1
  },
  borderedRightReverse: {
    borderRightColor: colors.borderReverse,
    borderStyle: 'solid',
    borderRightWidth: 1
  },
  borderedBottom: {
    borderBottomColor: colors.border,
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  borderedBottomReverse: {
    borderBottomColor: colors.borderReverse,
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  borderedLeft: {
    borderLeftColor: colors.border,
    borderStyle: 'solid',
    borderLeftWidth: 1
  },
  borderedLeftReverse: {
    borderLeftColor: colors.borderReverse,
    borderStyle: 'solid',
    borderLeftWidth: 1
  },
  borderedNone: {
    borderWidth: 0
  },
  borderedTopNone: {
    borderTopWidth: 0
  },
  borderedRightNone: {
    borderRightWidth: 0
  },
  borderedBottomNone: {
    borderBottomWidth: 0
  },
  borderedLeftNone: {
    borderLeftWidth: 0
  },
  roundedNone: {
    borderRadius: 0
  },
  rounded3Xs: {
    borderRadius: 1
  },
  rounded2Xs: {
    borderRadius: 2
  },
  roundedXs: {
    borderRadius: 4
  },
  roundedSm: {
    borderRadius: 6
  },
  rounded: {
    borderRadius: 8
  },
  roundedMd: {
    borderRadius: 8
  },
  roundedLg: {
    borderRadius: 10
  },
  roundedXl: {
    borderRadius: 12
  },
  rounded2Xl: {
    borderRadius: 14
  },
  rounded3Xl: {
    borderRadius: 16
  }
})

export const misc = StyleSheet.create({
  opacity0: {
    opacity: 0
  },
  opacity25: {
    opacity: 0.25
  },
  opacity50: {
    opacity: 0.5
  },
  opacity75: {
    opacity: 0.75
  },
  opacity100: {
    opacity: 1
  }
})

// x and xs
const iPhoneXWidth = 375
const iPhoneXHeight = 812
// xr and xs max
const iPhoneXRWidth = 414
const iPhoneXRHeight = 896
const isIOS = Platform.OS === 'ios'
const isIPhoneX = isIOS && ((width === iPhoneXWidth && height === iPhoneXHeight) || (width === iPhoneXRWidth && height === iPhoneXRHeight))

const androidPaddingTop = 0
const iPhoneXPaddingTop = 44
const iOSPaddingTop = 20

const androidPaddingBottom = 34
const iPhoneXPaddingBottom = 34
const iOSPaddingBottom = 0

const paddingTop = isIOS
  ? (isIPhoneX
    ? iPhoneXPaddingTop
    : iOSPaddingTop
  )
  : androidPaddingTop
const paddingBottom = isIOS
  ? (isIPhoneX
    ? iPhoneXPaddingBottom
    : iOSPaddingBottom
  )
  : androidPaddingBottom

export const layouts = StyleSheet.create({
  // container: View
  // usually the root element of page
  container: {
    width,
    height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom
  },
  // background: Image
  background: {
    position: 'absolute',
    width,
    height
  },
  // header with 1 or 3 item(s): View
  // 1 item: title
  // 3 items: arrow-left icon, title, empty /  menu icon
  header: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56 + paddingTop,
    paddingTop,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    borderBottomColor: colors.border,
    borderBottomWidth: 1
  },
  // supposed to be an icon
  headerLeft: {
    flex: 0,
    width: 26,
    height: 26
  },
  // supposed to be a View wrapping a Text
  headerMiddle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    lineHeight: 26,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  // supposed to be an icon
  headerRight: {
    flex: 0,
    width: 26,
    height: 26
  },
  // body: View
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  // body's child: View
  bodyNav: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
    lineHeight: 40,
    textAlignVertical: 'center',
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8
  },
  // body's child: View style
  bodyMain: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingRight: 24,
    paddingLeft: 24
  },
  // footer: View
  footer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 48,
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    borderTopColor: colors.border,
    borderTopWidth: 1
  }
})

export default {
  colors,
  positioning,
  boxModel,
  typography,
  visual,
  misc,
  layouts
}
