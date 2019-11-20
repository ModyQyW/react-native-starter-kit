import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native'

export const colors = {
  black: '#000',
  white: '#FFF',
  transparent: 'transparent',
  // material design colors
  // https://material.io/design/color/the-color-system.html#tools-for-picking-colors
  mdRed: '#F44336', // error / danger
  mdRed50: '#FFEBEE',
  mdRed100: '#FFCDD2',
  mdRed200: '#EF9A9A',
  mdRed300: '#E57373',
  mdRed400: '#EF5350',
  mdRed500: '#F44336', // error / danger
  mdRed600: '#E53935',
  mdRed700: '#D32F2F',
  mdRed800: '#C62828',
  mdRed900: '#B71C1C',
  mdRedA100: '#FF8A80',
  mdRedA200: '#FF5252',
  mdRedA400: '#FF1744',
  mdRedA700: '#D50000',
  mdPink: '#E91E63',
  mdPink50: '#FCE4EC',
  mdPink100: '#F8BBD0',
  mdPink200: '#F48FB1',
  mdPink300: '#F06292',
  mdPink400: '#EC407A',
  mdPink500: '#E91E63',
  mdPink600: '#D81B60',
  mdPink700: '#C2185B',
  mdPink800: '#AD1457',
  mdPink900: '#880E4F',
  mdPinkA100: '#FF80AB',
  mdPinkA200: '#FF4081',
  mdPinkA400: '#F50057',
  mdPinkA700: '#C51162',
  mdPurple: '#9C27B0',
  mdPurple50: '#F3E5F5',
  mdPurple100: '#E1BEE7',
  mdPurple200: '#CE93D8',
  mdPurple300: '#BA68C8',
  mdPurple400: '#AB47BC',
  mdPurple500: '#9C27B0',
  mdPurple600: '#8E24AA',
  mdPurple700: '#7B1FA2',
  mdPurple800: '#6A1B9A',
  mdPurple900: '#4A148C',
  mdPurpleA100: '#EA80FC',
  mdPurpleA200: '#E040FB',
  mdPurpleA400: '#D500F9',
  mdPurpleA700: '#A0F',
  mdDeepPurple: '#673AB7',
  mdDeepPurple50: '#EDE7F6',
  mdDeepPurple100: '#D1C4E9',
  mdDeepPurple200: '#B39DDB',
  mdDeepPurple300: '#9575CD',
  mdDeepPurple400: '#7E57C2',
  mdDeepPurple500: '#673AB7',
  mdDeepPurple600: '#5E35B1',
  mdDeepPurple700: '#512DA8',
  mdDeepPurple800: '#4527A0',
  mdDeepPurple900: '#311B92',
  mdDeepPurpleA100: '#B388FF',
  mdDeepPurpleA200: '#7C4DFF',
  mdDeepPurpleA400: '#651FFF',
  mdDeepPurpleA700: '#6200EA',
  mdIndigo: '#3F51B5',
  mdIndigo50: '#E8EAF6',
  mdIndigo100: '#C5CAE9',
  mdIndigo200: '#9FA8DA',
  mdIndigo300: '#7986CB',
  mdIndigo400: '#5C6BC0',
  mdIndigo500: '#3F51B5',
  mdIndigo600: '#3949AB',
  mdIndigo700: '#303F9F',
  mdIndigo800: '#283593',
  mdIndigo900: '#1A237E',
  mdIndigoA100: '#8C9EFF',
  mdIndigoA200: '#536DFE',
  mdIndigoA400: '#3D5AFE',
  mdIndigoA700: '#304FFE',
  mdBlue: '#2196F3', // primary
  mdBlue50: '#E3F2FD',
  mdBlue100: '#BBDEFB',
  mdBlue200: '#90CAF9',
  mdBlue300: '#64B5F6',
  mdBlue400: '#42A5F5',
  mdBlue500: '#2196F3', // primary
  mdBlue600: '#1E88E5',
  mdBlue700: '#1976D2',
  mdBlue800: '#1565C0',
  mdBlue900: '#0D47A1',
  mdBlueA100: '#82B1FF',
  mdBlueA200: '#448AFF',
  mdBlueA400: '#2979FF',
  mdBlueA700: '#2962FF',
  mdLightBlue: '#03A9F4',
  mdLightBlue50: '#E1F5FE',
  mdLightBlue100: '#B3E5FC',
  mdLightBlue200: '#81D4FA',
  mdLightBlue300: '#4FC3F7',
  mdLightBlue400: '#29B6F6',
  mdLightBlue500: '#03A9F4',
  mdLightBlue600: '#039BE5',
  mdLightBlue700: '#0288D1',
  mdLightBlue800: '#0277BD',
  mdLightBlue900: '#01579B',
  mdLightBlueA100: '#80D8FF',
  mdLightBlueA200: '#40C4FF',
  mdLightBlueA400: '#00B0FF',
  mdLightBlueA700: '#0091EA',
  mdCyan: '#00BCD4',
  mdCyan50: '#E0F7FA',
  mdCyan100: '#B2EBF2',
  mdCyan200: '#80DEEA',
  mdCyan300: '#4DD0E1',
  mdCyan400: '#26C6DA',
  mdCyan500: '#00BCD4',
  mdCyan600: '#00ACC1',
  mdCyan700: '#0097A7',
  mdCyan800: '#00838F',
  mdCyan900: '#006064',
  mdCyanA100: '#84FFFF',
  mdCyanA200: '#18FFFF',
  mdCyanA400: '#00E5FF',
  mdCyanA700: '#00B8D4',
  mdTeal: '#009688',
  mdTeal50: '#E0F2F1',
  mdTeal100: '#B2DFDB',
  mdTeal200: '#80CBC4',
  mdTeal300: '#4DB6AC',
  mdTeal400: '#26A69A',
  mdTeal500: '#009688',
  mdTeal600: '#00897B',
  mdTeal700: '#00796B',
  mdTeal800: '#00695C',
  mdTeal900: '#004D40',
  mdTealA100: '#A7FFEB',
  mdTealA200: '#64FFDA',
  mdTealA400: '#1DE9B6',
  mdTealA700: '#00BFA5',
  mdGreen: '#4CAF50', // success
  mdGreen50: '#E8F5E9',
  mdGreen100: '#C8E6C9',
  mdGreen200: '#A5D6A7',
  mdGreen300: '#81C784',
  mdGreen400: '#66BB6A',
  mdGreen500: '#4CAF50', // success
  mdGreen600: '#43A047',
  mdGreen700: '#388E3C',
  mdGreen800: '#2E7D32',
  mdGreen900: '#1B5E20',
  mdGreenA100: '#B9F6CA',
  mdGreenA200: '#69F0AE',
  mdGreenA400: '#00E676',
  mdGreenA700: '#00C853',
  mdLightGreen: '#8BC34A',
  mdLightGreen50: '#F1F8E9',
  mdLightGreen100: '#DCEDC8',
  mdLightGreen200: '#C5E1A5',
  mdLightGreen300: '#AED581',
  mdLightGreen400: '#9CCC65',
  mdLightGreen500: '#8BC34A',
  mdLightGreen600: '#7CB342',
  mdLightGreen700: '#689F38',
  mdLightGreen800: '#558B2F',
  mdLightGreen900: '#33691E',
  mdLightGreenA100: '#CCFF90',
  mdLightGreenA200: '#B2FF59',
  mdLightGreenA400: '#76FF03',
  mdLightGreenA700: '#64DD17',
  mdLime: '#CDDC39',
  mdLime50: '#F9FBE7',
  mdLime100: '#F0F4C3',
  mdLime200: '#E6EE9C',
  mdLime300: '#DCE775',
  mdLime400: '#D4E157',
  mdLime500: '#CDDC39',
  mdLime600: '#C0CA33',
  mdLime700: '#AFB42B',
  mdLime800: '#9E9D24',
  mdLime900: '#827717',
  mdLimeA100: '#F4FF81',
  mdLimeA200: '#EEFF41',
  mdLimeA400: '#C6FF00',
  mdLimeA700: '#AEEA00',
  mdYellow: '#FFEB3B', // warning
  mdYellow50: '#FFFDE7',
  mdYellow100: '#FFF9C4',
  mdYellow200: '#FFF59D',
  mdYellow300: '#FFF176',
  mdYellow400: '#FFEE58',
  mdYellow500: '#FFEB3B', // warning
  mdYellow600: '#FDD835',
  mdYellow700: '#FBC02D',
  mdYellow800: '#F9A825',
  mdYellow900: '#F57F17',
  mdYellowA100: '#FFFF8D',
  mdYellowA200: '#FF0',
  mdYellowA400: '#FFEA00',
  mdYellowA700: '#FFD600',
  mdAmber: '#FFC107',
  mdAmber50: '#FFF8E1',
  mdAmber100: '#FFECB3',
  mdAmber200: '#FFE082',
  mdAmber300: '#FFD54F',
  mdAmber400: '#FFCA28',
  mdAmber500: '#FFC107',
  mdAmber600: '#FFB300',
  mdAmber700: '#FFA000',
  mdAmber800: '#FF8F00',
  mdAmber900: '#FF6F00',
  mdAmberA100: '#FFE57F',
  mdAmberA200: '#FFD740',
  mdAmberA400: '#FFC400',
  mdAmberA700: '#FFAB00',
  mdOrange: '#FF9800',
  mdOrange50: '#FFF3E0',
  mdOrange100: '#FFE0B2',
  mdOrange200: '#FFCC80',
  mdOrange300: '#FFB74D',
  mdOrange400: '#FFA726',
  mdOrange500: '#FF9800',
  mdOrange600: '#FB8C00',
  mdOrange700: '#F57C00',
  mdOrange800: '#EF6C00',
  mdOrange900: '#E65100',
  mdOrangeA100: '#FFD180',
  mdOrangeA200: '#FFAB40',
  mdOrangeA400: '#FF9100',
  mdOrangeA700: '#FF6D00',
  mdDeepOrange: '#FF5722',
  mdDeepOrange50: '#FBE9E7',
  mdDeepOrange100: '#FFCCBC',
  mdDeepOrange200: '#FFAB91',
  mdDeepOrange300: '#FF8A65',
  mdDeepOrange400: '#FF7043',
  mdDeepOrange500: '#FF5722',
  mdDeepOrange600: '#F4511E',
  mdDeepOrange700: '#E64A19',
  mdDeepOrange800: '#D84315',
  mdDeepOrange900: '#BF360C',
  mdDeepOrangeA100: '#FF9E80',
  mdDeepOrangeA200: '#FF6E40',
  mdDeepOrangeA400: '#FF3D00',
  mdDeepOrangeA700: '#DD2C00',
  mdBrown: '#795548',
  mdBrown50: '#EFEBE9',
  mdBrown100: '#D7CCC8',
  mdBrown200: '#BCAAA4',
  mdBrown300: '#A1887F',
  mdBrown400: '#8D6E63',
  mdBrown500: '#795548',
  mdBrown600: '#6D4C41',
  mdBrown700: '#5D4037',
  mdBrown800: '#4E342E',
  mdBrown900: '#3E2723',
  mdGray: '#9E9E9E',
  mdGray50: '#FAFAFA',
  mdGray100: '#F5F5F5',
  mdGray200: '#EEE',
  mdGray300: '#E0E0E0',
  mdGray400: '#BDBDBD',
  mdGray500: '#9E9E9E',
  mdGray600: '#757575',
  mdGray700: '#616161',
  mdGray800: '#424242',
  mdGray900: '#212121',
  mdBlueGray: '#607D8B',
  mdBlueGray50: '#ECEFF1',
  mdBlueGray100: '#CFD8DC',
  mdBlueGray200: '#B0BEC5',
  mdBlueGray300: '#90A4AE',
  mdBlueGray400: '#78909C',
  mdBlueGray500: '#607D8B',
  mdBlueGray600: '#546E7A',
  mdBlueGray700: '#455A64',
  mdBlueGray800: '#37474F',
  mdBlueGray900: '#263238',
  mdGrey: '#9E9E9E',
  mdGrey50: '#FAFAFA',
  mdGrey100: '#F5F5F5',
  mdGrey200: '#EEE',
  mdGrey300: '#E0E0E0',
  mdGrey400: '#BDBDBD',
  mdGrey500: '#9E9E9E',
  mdGrey600: '#757575',
  mdGrey700: '#616161',
  mdGrey800: '#424242',
  mdGrey900: '#212121',
  mdBlueGrey: '#607D8B',
  mdBlueGrey50: '#ECEFF1',
  mdBlueGrey100: '#CFD8DC',
  mdBlueGrey200: '#B0BEC5',
  mdBlueGrey300: '#90A4AE',
  mdBlueGrey400: '#78909C',
  mdBlueGrey500: '#607D8B',
  mdBlueGrey600: '#546E7A',
  mdBlueGrey700: '#455A64',
  mdBlueGrey800: '#37474F',
  mdBlueGrey900: '#263238',
  // ant design colors
  // https://ant.design/docs/spec/colors
  adRed: '#F5222D', // error / danger
  adRed1: '#FFF1F0',
  adRed2: '#FFCCC7',
  adRed3: '#FFA39E',
  adRed4: '#FF7875',
  adRed5: '#FF4D4F',
  adRed6: '#F5222D', // error / danger
  adRed7: '#CF1322',
  adRed8: '#A8071A',
  adRed9: '#820014',
  adRed10: '#5C0011',
  adVolcano: '#FF7A45',
  adVolcano1: '#FFF2E8',
  adVolcano2: '#FFD8BF',
  adVolcano3: '#FFBB96',
  adVolcano4: '#FF9C6E',
  adVolcano5: '#FF7A45',
  adVolcano6: '#FA541C',
  adVolcano7: '#D4380D',
  adVolcano8: '#AD2102',
  adVolcano9: '#871400',
  adVolcano10: '#610B00',
  adOrange: '#FA8C16',
  adOrange1: '#FFF7E6',
  adOrange2: '#FFE7BA',
  adOrange3: '#FFD591',
  adOrange4: '#FFC069',
  adOrange5: '#FFA940',
  adOrange6: '#FA8C16',
  adOrange7: '#D46B08',
  adOrange8: '#AD4E00',
  adOrange9: '#873800',
  adOrange10: '#612500',
  adGold: '#FAAD14', // warning
  adGold1: '#FFFBE6',
  adGold2: '#FFF1B8',
  adGold3: '#FFE58F',
  adGold4: '#FFD666',
  adGold5: '#FFC53D',
  adGold6: '#FAAD14', // warning
  adGold7: '#D48806',
  adGold8: '#AD6800',
  adGold9: '#874D00',
  adGold10: '#613400',
  adYellow: '#FADB14',
  adYellow1: '#FEFFE6',
  adYellow2: '#FFFFB8',
  adYellow3: '#FFFB8F',
  adYellow4: '#FFF566',
  adYellow5: '#FFEC3D',
  adYellow6: '#FADB14',
  adYellow7: '#D4B106',
  adYellow8: '#AD8B00',
  adYellow9: '#876800',
  adYellow10: '#614700',
  adLime: '#A0D911',
  adLime1: '#FCFFE6',
  adLime2: '#F4FFB8',
  adLime3: '#EAFF8F',
  adLime4: '#D3F261',
  adLime5: '#BAE637',
  adLime6: '#A0D911',
  adLime7: '#7CB305',
  adLime8: '#5B8C00',
  adLime9: '#3F6600',
  adLime10: '#254000',
  adGreen: '#52C41A', // success
  adGreen1: '#F6FFED',
  adGreen2: '#D9F7BE',
  adGreen3: '#B7EB8F',
  adGreen4: '#95DE64',
  adGreen5: '#73D13D',
  adGreen6: '#52C41A', // success
  adGreen7: '#389E0D',
  adGreen8: '#237804',
  adGreen9: '#135200',
  adGreen10: '#092B00',
  adCyan: '#13C2C2',
  adCyan1: '#E6FFFB',
  adCyan2: '#B5F5EC',
  adCyan3: '#87E8DE',
  adCyan4: '#5CDBD3',
  adCyan5: '#36CFC9',
  adCyan6: '#13C2C2',
  adCyan7: '#08979C',
  adCyan8: '#006D75',
  adCyan9: '#00474F',
  adCyan10: '#002329',
  adBlue: '#1890FF',
  adBlue1: '#E6F7FF',
  adBlue2: '#BAE7FF',
  adBlue3: '#91D5FF',
  adBlue4: '#69C0FF',
  adBlue5: '#40A9FF',
  adBlue6: '#1890FF',
  adBlue7: '#096DD9',
  adBlue8: '#0050B3',
  adBlue9: '#003A8C',
  adBlue10: '#002766',
  adGeekBlue: '#2F54EB',
  adGeekBlue1: '#F0F5FF',
  adGeekBlue2: '#D6E4FF',
  adGeekBlue3: '#ADC6FF',
  adGeekBlue4: '#85A5FF',
  adGeekBlue5: '#597EF7',
  adGeekBlue6: '#2F54EB',
  adGeekBlue7: '#1D39C4',
  adGeekBlue8: '#10239E',
  adGeekBlue9: '#061178',
  adGeekBlue10: '#030852',
  adPurple: '#722ED1',
  adPurple1: '#F9F0FF',
  adPurple2: '#EFDBFF',
  adPurple3: '#D3ADF7',
  adPurple4: '#B37FEB',
  adPurple5: '#9254DE',
  adPurple6: '#722ED1',
  adPurple7: '#531DAB',
  adPurple8: '#391085',
  adPurple9: '#22075E',
  adPurple10: '#120338',
  adMagenta: '#EB2F96',
  adMagenta1: '#FFF0F6',
  adMagenta2: '#FFD6E7',
  adMagenta3: '#FFADD2',
  adMagenta4: '#FF85C0',
  adMagenta5: '#F759AB',
  adMagenta6: '#EB2F96',
  adMagenta7: '#C41D7F',
  adMagenta8: '#9E1068',
  adMagenta9: '#780650',
  adMagenta10: '#520339',
  adGray: '#BFBFBF',
  adGray1: '#FFF',
  adGray2: '#FAFAFA',
  adGray3: '#F5F5F5',
  adGray4: '#E8E8E8',
  adGray5: '#D9D9D9', // border
  adGray6: '#BFBFBF',
  adGray7: '#8C8C8C',
  adGray8: '#595959',
  adGray9: '#262626',
  adGray10: '#000',
  adGrey: '#BFBFBF',
  adGrey1: '#FFF',
  adGrey2: '#FAFAFA',
  adGrey3: '#F5F5F5',
  adGrey4: '#E8E8E8',
  adGrey5: '#D9D9D9', // border
  adGrey6: '#BFBFBF',
  adGrey7: '#8C8C8C',
  adGrey8: '#595959',
  adGrey9: '#262626',
  adGrey10: '#000',
  textTitle: 'rgba(0, 0, 0, 0.85)',
  textTitleLight: 'rgba(0, 0, 0, 0.75)',
  textMain: 'rgba(0, 0, 0, 0.65)',
  textMainLight: 'rgba(0, 0, 0, 0.55)',
  textSecondary: 'rgba(0, 0, 0, 0.45)',
  textDisabled: 'rgba(0, 0, 0, 0.25)',
  border: '#D9D9D9'
}

export const typography = StyleSheet.create({
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
  textNormal: {
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
  text12: {
    fontSize: 12,
    lineHeight: 20
  },
  text13: {
    fontSize: 13,
    lineHeight: 21
  },
  text14: {
    fontSize: 14,
    lineHeight: 22
  },
  text15: {
    fontSize: 15,
    lineHeight: 23
  },
  text16: {
    fontSize: 16,
    lineHeight: 24
  },
  text17: {
    fontSize: 17,
    lineHeight: 25
  },
  text18: {
    fontSize: 18,
    lineHeight: 26
  },
  text19: {
    fontSize: 19,
    lineHeight: 27
  },
  text20: {
    fontSize: 20,
    lineHeight: 28
  },
  text21: {
    fontSize: 21,
    lineHeight: 29
  },
  text22: {
    fontSize: 22,
    lineHeight: 30
  },
  text23: {
    fontSize: 23,
    lineHeight: 31
  },
  text24: {
    fontSize: 24,
    lineHeight: 32
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
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  textDisabled: {
    color: colors.textDisabled
  },
  textSecondary: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 20
  },
  textMainLight: {
    color: colors.textMainLight,
    fontSize: 13,
    lineHeight: 21
  },
  textMain: {
    color: colors.textMain,
    fontSize: 14,
    lineHeight: 22
  },
  textTitleLight: {
    color: colors.textTitleLight,
    fontSize: 16,
    lineHeight: 24
  },
  textTitle: {
    color: colors.textTitle,
    fontSize: 18,
    lineHeight: 26
  }
})

const { height, width } = Dimensions.get('window')

const XWIDTH = 375
const XHEIGHT = 812
const isIos = Platform.OS === 'ios'
const isIphoneX = isIos && width === XWIDTH && height === XHEIGHT

const androidMarginTop = StatusBar.currentHeight
const iphoneXMarginTop = 44
const iosMarginTop = 20

const androidMarginBottom = 0
const iphoneXMarginBottom = 83
const iosMarginBottom = 49

const marginTop = androidMarginTop || (isIphoneX ? iphoneXMarginTop : iosMarginTop)
const marginBottom = isIos
  ? (isIphoneX
    ? iphoneXMarginBottom
    : iosMarginBottom
  )
  : androidMarginBottom
const cutHeight = marginTop + marginBottom

export const layouts = StyleSheet.create({
  // container: View
  // usually the root element of page
  container: {
    width,
    height: height - cutHeight,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop,
    marginBottom
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
    height: 40,
    paddingTop: 0,
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
    textAlign: 'center'
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
    height: 40,
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8
  },
  // body's child: ScrollView / FlatList
  bodyMain: {
    flex: 1,
    width: '100%'
  },
  // footer: View
  footer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    borderTopColor: colors.border,
    borderTopWidth: 1
  }
})

export default { colors, typography, layouts }
