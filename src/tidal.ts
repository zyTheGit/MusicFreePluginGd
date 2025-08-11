import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, pluginConfig, ...optMethods } = baseModules;
defaultConfig.source = sourceMap.tidal;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九TIDAL",
  ...pluginConfig,
  ...optMethods,
};

export default pluginInstance;
