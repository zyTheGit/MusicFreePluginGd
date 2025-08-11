import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, pluginConfig, ...optMethods } = baseModules;
defaultConfig.source = sourceMap.qobuz;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九QOBUZ",
  ...pluginConfig,
  ...optMethods,
};

export default pluginInstance;
