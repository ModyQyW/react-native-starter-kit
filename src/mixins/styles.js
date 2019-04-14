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
  textMain: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  textSecondary: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});

export default styles;
