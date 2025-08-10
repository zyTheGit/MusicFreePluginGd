import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, ...optMethods } = baseModules;
defaultConfig.source = sourceMap.tidal;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九TIDAL",
  version: "0.0.1",
  ...optMethods
};

export default pluginInstance;
