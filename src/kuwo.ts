import * as baseModules from "./base";
import { sourceMap } from "./config";

const { defaultConfig, ...optMethods } = baseModules;
defaultConfig.source = sourceMap.kuwo;

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "阿九KW",
  ...optMethods,
};

export default pluginInstance;
