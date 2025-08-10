import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, ...optMethods } = baseModules;
defaultConfig.source = sourceMap.qobuz;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九QOBUZ",
  version: "0.0.1",
  ...optMethods
};

export default pluginInstance;
