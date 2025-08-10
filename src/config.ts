import axios from "axios";
import qs from "qs";

const GD_SOURCE_URL = "https://music-api.gdstudio.xyz/api.php";

export const sourceMap = {
  netease: "netease",
  kuwo: "kuwo",
  tencent: "tencent",
  tidal: "Tidal",
  qobuz: "Qobuz",
  spotify: "Spotify",
};

export const qualityMap = {
  low: "192",
  standard: "320",
  high: "740",
  super: "999",
} as any;

export const requestApi = {
  // 搜索
  search: (params) =>
    axios({
      method: "POST",
      url: GD_SOURCE_URL,
      data: qs.stringify(params),
    }).then(({ data }) => {
      const result = data.map((i) => {
        const list = i.artist;
        let artist = list.length > 0 ? list[0] : "";
        return {
          ...i,
          artist,
          title: i.name,
          // lrc: `${requestApi.base}?types=lyric&source=netease&id=${i.lyric_id}`,
          // artwork: `${requestApi.base}?types=pic&source=netease&id=${i.pic_id}&size=[300/500]`,
        };
      });

      return result;
    }),
  // 获取音源
  getMediaSource: (params) =>
    axios({
      method: "POST",
      url: GD_SOURCE_URL,
      data: qs.stringify(params),
    }).then(({ data }) => data),
  // 获取音乐信息
  getMusicInfo: (params) =>
    axios({
      method: "POST",
      url: GD_SOURCE_URL,
      data: qs.stringify(params),
    }).then(({ data }) => data),
  // 获取歌词
  getLyric: (params) =>
    axios({
      method: "POST",
      url: GD_SOURCE_URL,
      data: qs.stringify(params),
    }).then(({ data }) => data),
};
