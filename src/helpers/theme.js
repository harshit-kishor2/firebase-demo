import {Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const R = {
  //for margin and padding
  spacer: {
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    xxl: 64,
    default: 12,
  },
  // for color palletes
  pallates: {
    primary: '#4361ee',
    secondary: '#3f37c9',
    accent: '#4895ef',
    danger: '#f72585',
    success: '#4cc9f0',
    grey: '#adb5bd',
    white: '#ffffff',
  },
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
  percentWidth: widthPercentageToDP,
  percentHeight: heightPercentageToDP,
  iPhoneSize: iPhoneSize,
};

export default R;

// Get iphone size
const iPhoneSize = () => {
  const windowWidth = Dimensions.get('window').width;
  if (windowWidth === 320) {
    return 'small'; // iPhone SE
  }
  if (windowWidth === 414) {
    return 'large'; // iPhone Plus
  }
  return 'medium'; // iPhone 6/7
};
