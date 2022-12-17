import { getString, setData } from "./handler";

enum StorageKeys {
  MAIN_COLOR = "main_color",
  SUB_COLOR = "sub_color",
}

class AsyncStorageDAta {
  private __getMainColor: string = "#FCA600";
  private __getSubColor: string = "rgba(255, 246, 232, 0.46)";
  public async bootstrap() {
    this.__getMainColor = await getString(StorageKeys.MAIN_COLOR);
    this.__getSubColor = await getString(StorageKeys.SUB_COLOR);
  }

  getMainColor(): string {
    return this.__getMainColor;
  }
  setMainColor(value: string) {
    setData(StorageKeys.MAIN_COLOR, value);
    this.__getMainColor = value;
  }
  getSubColor(): string {
    return this.__getSubColor;
  }
  setSubColor(value: string) {
    setData(StorageKeys.SUB_COLOR, value);
    this.__getSubColor = value;
  }
}

const asyncStorageDAta = new AsyncStorageDAta();
export default asyncStorageDAta;
