import {
  StyleSheet, Dimensions, StatusBar, Platform,
} from 'react-native';

const grey200 = '#EEE';
const grey500 = '#9E9E9E';

const { height, width } = Dimensions.get('window');

const XWIDTH = 375;
const XHEIGHT = 812;
const isIos = Platform.OS === 'ios';
const isIphoneX = isIos && width === XWIDTH && height === XHEIGHT;

const androidMarginTop = StatusBar.currentHeight;
const iphoneXMarginTop = 44;
const iosMarginTop = 20;

const androidMarginBottom = 0;
const iphoneXMarginBottom = 83;
const iosMarginBottom = 49;

const marginTop = androidMarginTop || (isIphoneX ? iphoneXMarginTop : iosMarginTop);
/* eslint-disable */
const marginBottom = isIos
  ? (isIphoneX ? iphoneXMarginBottom : iosMarginBottom)
  : androidMarginBottom;
/* eslint-enable */
const cutHeight = marginTop + marginBottom;

const styles = StyleSheet.create({
  /*
   * container
   * usually the root element of page
   */
  container: {
    width,
    height: height - cutHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop,
    marginBottom,
  },
  /*
   * header with 1 or 3 item(s)
   * 1 item: title
   * 3 items: arrow-left icon, title, empty /  menu icon
   */
  header: {
    flex: 0,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: grey200,
  },
  // suppose to be an icon
  headerLeft: {
    flex: 0,
    width: 26,
    height: 26,
  },
  // suppose to be a View wrapping a Text
  headerMiddle: {
    flex: 1,
    height: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  // suppose to be an icon
  headerRight: {
    flex: 0,
    width: 26,
    height: 26,
  },
  /* body */
  // for View
  body: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyNav: {
    flex: 0,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
  },
  // for ScrollView and FlatList
  bodyMain: {
    flex: 1,
    width: '100%',
  },
  /* footer */
  footer: {
    flex: 0,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    borderTopWidth: 1,
    borderTopColor: grey200,
  },
  // typography
  textThin: {
    fontWeight: '100',
  },
  textExtraLight: {
    fontWeight: '200',
  },
  textUltraLight: {
    fontWeight: '200',
  },
  textLight: {
    fontWeight: '300',
  },
  textRegular: {
    fontWeight: '400',
  },
  textNormal: {
    fontWeight: '400',
  },
  textMedium: {
    fontWeight: '500',
  },
  textSemiBold: {
    fontWeight: '600',
  },
  textBold: {
    fontWeight: '700',
  },
  textExtraBold: {
    fontWeight: '800',
  },
  textUltraBold: {
    fontWeight: '800',
  },
  textBlack: {
    fontWeight: '900',
  },
  textHeavy: {
    fontWeight: '900',
  },
  text12: {
    fontSize: 12,
    lineHeight: 20,
  },
  text13: {
    fontSize: 13,
    lineHeight: 21,
  },
  text14: {
    fontSize: 14,
    lineHeight: 22,
  },
  text15: {
    fontSize: 15,
    lineHeight: 23,
  },
  text16: {
    fontSize: 16,
    lineHeight: 24,
  },
  text17: {
    fontSize: 17,
    lineHeight: 25,
  },
  text18: {
    fontSize: 18,
    lineHeight: 26,
  },
  text19: {
    fontSize: 19,
    lineHeight: 27,
  },
  text20: {
    fontSize: 20,
    lineHeight: 28,
  },
  text21: {
    fontSize: 21,
    lineHeight: 29,
  },
  text22: {
    fontSize: 22,
    lineHeight: 30,
  },
  text23: {
    fontSize: 23,
    lineHeight: 31,
  },
  text24: {
    fontSize: 24,
    lineHeight: 32,
  },
  textSecondary: {
    fontSize: 12,
    fontWeight: '200',
    lineHeight: 20,
  },
  textMainLight: {
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 21,
  },
  // default text styles
  textMain: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  textTitleLight: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
  },
});

export default styles;
