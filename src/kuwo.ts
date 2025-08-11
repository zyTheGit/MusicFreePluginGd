import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, pluginConfig, ...optMethods } = baseModules;
defaultConfig.source = sourceMap.kuwo;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九KW",
  ...pluginConfig,
  ...optMethods,
};

export default pluginInstance;
