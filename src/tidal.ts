import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, ...optMethods } = baseModules;
defaultConfig.source = sourceMap.tidal;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九TIDAL",
  ...optMethods
};

export default pluginInstance;
