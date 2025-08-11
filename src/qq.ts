import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, ...optMethods } = baseModules;

defaultConfig.source = sourceMap.tencent;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九QQ",
  ...optMethods
};

export default pluginInstance;
