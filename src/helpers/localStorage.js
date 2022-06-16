import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value != null) {
      return value;
      // console.log("async value of "+key+"=="+value)
    } else {
      return '';
    }
  } catch (error) {
    console.log(error);
  }

  return '';
};

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.log(error);
  }
};

//values - [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
const multiSet = async values => {
  try {
    await AsyncStorage.multiSet(values);
  } catch (error) {
    console.log(error);
  }
};

//keys - ['@MyApp_USER_1', '@MyApp_USER_2']
const multiRemove = async keys => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.log(error);
  }
};

const localStorage = {
  getItem,
  setItem,
  removeItem,
  getAllKeys,
  multiSet,
  multiRemove,
};
export default localStorage;
