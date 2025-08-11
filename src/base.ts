// import cheerio from "cheerio";
// import cryptojs from "crypto-js";
// import dayjs from "dayjs";
// import bigInt from "big-integer";
// import he from "he";
// import qs from "qs";
import { qualityMap, requestApi, sourceMap } from "./config";

export const defaultConfig = {
  source: sourceMap.netease,
  s: "731FED2C", // 签名
};

export const pluginConfig: Partial<IPlugin.IPluginDefine> = {
  version: "0.0.1",
  defaultSearchType: "music",
  supportedSearchType: ["music", "album", "sheet"],
  srcUrl:
    "https://raw.githubusercontent.com/zyTheGit/MusicFreePluginGd/refs/heads/main/docs/plugins.json",
};

// 注意：不要使用async () => {}，hermes不支持异步箭头函数
export const search: IPlugin.ISearchFunc = async function (
  query,
  page,
  type
): Promise<any> {
  const typeMap = {
    music: defaultConfig.source,
    album: `${defaultConfig.source}_album`,
    sheet: `${defaultConfig.source}_playlist`,
  } as any;
  try {
    const data = await requestApi.search({
      count: 20,
      pages: page,
      name: query,
      types: "search",
      source: typeMap[type] || defaultConfig.source,
      s: defaultConfig.s,
    });
    return {
      data,
      isEnd: data.length === 0,
    };
  } catch (error) {
    console.log("search.error", error);
    return error;
  }
};

// 获取根据音乐信息获取url
export const getMediaSource = async function (
  musicItem: IMusic.IMusicItemPartial,
  quality: IMusic.IQualityKey
): Promise<IPlugin.IMediaSourceResult | null> {
  try {
    const data = await requestApi.getMediaSource({
      types: "url",
      source: defaultConfig.source,
      id: musicItem.id,
      br: qualityMap[quality],
      s: defaultConfig.s,
    });
    console.log(data);
    return {
      url: data.url,
      quality: data.br,
    };
  } catch (error) {
    console.log("getMediaSource.error", error);
    return error;
  }
};

// 获取音乐信息
export const getMusicInfo = async function (
  musicItem: IMusic.IMusicItemPartial
): Promise<Partial<IMusic.IMusicItem> | null> {
  try {
    const data = await requestApi.getMusicInfo({
      types: "info",
      source: defaultConfig.source,
      id: musicItem.pic_id,
      size: 300,
      s: defaultConfig.s,
    });
    console.log(data);
    return {
      artwork: data.url,
    };
  } catch (error) {
    console.log("getMusicInfo.error", error);
    return error;
  }
};

// 获取歌词
export const getLyric = async function (
  musicItem: IMusic.IMusicItemPartial
): Promise<ILyric.ILyricSource | null> {
  try {
    const data = await requestApi.getLyric({
      types: "lyric",
      source: defaultConfig.source,
      id: musicItem.lyric_id,
      s: "5CFA6F10",
    });
    console.log(data);
    return {
      lrc: data.lyric,
      rawLrc: data.tlyric,
    };
  } catch (error) {
    console.log("getLyric.error", error);
    return error;
  }
};
