import {
  StyleSheet, Dimensions, StatusBar, Platform,
} from 'react-native';

import Colors from './colors';

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
const marginBottom = isIos
  ? (isIphoneX ? iphoneXMarginBottom : iosMarginBottom)
  : androidMarginBottom;
const cutHeight = marginTop + marginBottom;

const styles = StyleSheet.create({
  // container
  // usually the root element of page
  container: {
    width,
    height: height - cutHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop,
    marginBottom,
  },
  // header with 1 item
  // usually title
  header1: {
    flex: 0,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
  },
  // header with 2 items
  // usually arrow-left icon and title
  header2: {
    flex: 0,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
  },
  header2Icon: {
    position: 'absolute',
    left: 10,
  },
  // header with 3 items
  // usually arrow-left icon, title and menu icon
  header3: {
    flex: 0,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
  },
  // body without nav bar
  // should be <ScrollView> or <FlatList>
  body: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  // body with 2 items
  // usually bar and main section
  // should be <View>, and its children has <ScrollView> or <FlatList>
  body2: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // should be <View>
  body2Bar: {
    flex: 0,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // should be <ScrollView> or <FlatList>, the main child of bodyWithNav
  body2Main: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  // footer
  footer: {
    flex: 0,
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // default
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
  font12: {
    fontSize: 12,
    lineHeight: 20,
  },
  font14: {
    fontSize: 14,
    lineHeight: 22,
  },
  font16: {
    fontSize: 16,
    lineHeight: 24,
  },
  font18: {
    fontSize: 18,
    lineHeight: 26,
  },
  font20: {
    fontSize: 20,
    lineHeight: 28,
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
  textTitleBold: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
});

export default styles;
