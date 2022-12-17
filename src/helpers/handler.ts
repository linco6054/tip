import AsyncStorage from "@react-native-async-storage/async-storage";
export const getString = async (key: string) => {
  const val = await AsyncStorage.getItem(key);

  return val != null ? JSON.parse(val) : null;
};

export const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

export const clearAll = async () => await AsyncStorage.clear();

export const setData = async (key: string, value: any) => {
  switch (typeof value) {
    case "string":
      return await AsyncStorage.setItem(key, value.toString());
    case "boolean":
      return await AsyncStorage.setItem(key, value.toString());
    case "object":
      const jsonValue = JSON.stringify(value);
      return await AsyncStorage.setItem(key, jsonValue);
    default:
      throw new Error("Value must be a boolean string , object, number");
  }
};

export const getBoolean = async (key: string) => {
  const val = await AsyncStorage.getItem(key);
  if (!val) return false;
  return Boolean(val);
};
