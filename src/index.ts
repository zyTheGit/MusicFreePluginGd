import axios from "axios";
import cheerio from "cheerio";
import cryptojs from "crypto-js";
import dayjs from "dayjs";
import bigInt from "big-integer";
import he from "he";
import qs from "qs";
import { requestApi } from "./api";

// 注意：不要使用async () => {}，hermes不支持异步箭头函数
const search: IPlugin.ISearchFunc = async function (
  query,
  page,
  type
): Promise<any> {
  const typeMap = {
    music: "netease",
    album: "netease_album",
    sheet: "netease_playlist",
  } as any;
  const params = {
    count: 20,
    pages: page,
    name: query,
    types: "search",
    source: typeMap[type] || "netease",
    s: "5CFA6F10",
  };
  try {
    const { data } = await axios({
      method: "POST",
      url: requestApi.base,
      data: qs.stringify(params),
    });
    return {
      isEnd: data.length === 0,
      data: data.map((i) => {
        const list = i.artist;
        let artist = "";
        if (list.length > 0) {
          artist = list[0];
        }
        return {
          ...i,
          artist,
          title: i.name,
          // lrc: `${requestApi.base}?types=lyric&source=netease&id=${i.lyric_id}`,
          // artwork: `${requestApi.base}?types=pic&source=netease&id=${i.pic_id}&size=[300/500]`,
        };
      }),
    };
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

// 获取根据音乐信息获取url
const getMediaSource = async function (
  musicItem: IMusic.IMusicItemPartial,
  quality: IMusic.IQualityKey
): Promise<IPlugin.IMediaSourceResult | null> {
  try {
    const qualityMap = {
      low: "192",
      standard: "320",
      high: "740",
      super: "999",
    } as any;
    const { data } = await axios({
      method: "POST",
      url: requestApi.base,
      data: qs.stringify({
        types: "url",
        source: "netease",
        id: musicItem.id,
        br: qualityMap[quality],
        s: "5CFA6F10",
      }),
    });
    console.log(data);
    return {
      url: data.url,
      quality: data.br,
    };
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const pluginInstance: IPlugin.IPluginDefine = {
  platform: "ajiu_GD音乐台",
  version: "0.0.1",
  search,
  getMediaSource,
};

export default pluginInstance;
