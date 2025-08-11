import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, pluginConfig, ...optMethods } = baseModules;

defaultConfig.source = sourceMap.tencent;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九WY",
  ...pluginConfig,
  ...optMethods,
};

export default pluginInstance;
