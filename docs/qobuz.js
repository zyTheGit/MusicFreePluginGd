var $37ozM$axios = require("axios");
var $37ozM$qs = require("qs");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirebc71"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirebc71"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("l5i2x", function(module, exports) {

$parcel$export(module.exports, "defaultConfig", () => $f48a76a71295956c$export$f84bd70098573c5c);
$parcel$export(module.exports, "pluginConfig", () => $f48a76a71295956c$export$c23fbabe48bd9130);
$parcel$export(module.exports, "search", () => $f48a76a71295956c$export$d76128d007d19019);
$parcel$export(module.exports, "getMediaSource", () => $f48a76a71295956c$export$a92854129bc50f89);
$parcel$export(module.exports, "getMusicInfo", () => $f48a76a71295956c$export$cec695f762a1db32);
$parcel$export(module.exports, "getLyric", () => $f48a76a71295956c$export$dd8877a67b94ca98);
// import cheerio from "cheerio";
// import cryptojs from "crypto-js";
// import dayjs from "dayjs";
// import bigInt from "big-integer";
// import he from "he";
// import qs from "qs";

var $8ItRl = parcelRequire("8ItRl");
const $f48a76a71295956c$export$f84bd70098573c5c = {
    source: (0, $8ItRl.sourceMap).netease,
    s: "731FED2C"
};
const $f48a76a71295956c$export$c23fbabe48bd9130 = {
    version: "0.0.1",
    defaultSearchType: "music",
    supportedSearchType: [
        "music",
        "album",
        "sheet"
    ],
    srcUrl: "https://raw.githubusercontent.com/zyTheGit/MusicFreePluginGd/refs/heads/main/docs/plugins.json"
};
const $f48a76a71295956c$export$d76128d007d19019 = async function(query, page, type) {
    const typeMap = {
        music: $f48a76a71295956c$export$f84bd70098573c5c.source,
        album: `${$f48a76a71295956c$export$f84bd70098573c5c.source}_album`,
        sheet: `${$f48a76a71295956c$export$f84bd70098573c5c.source}_playlist`
    };
    try {
        const data = await (0, $8ItRl.requestApi).search({
            count: 20,
            pages: page,
            name: query,
            types: "search",
            source: typeMap[type] || $f48a76a71295956c$export$f84bd70098573c5c.source,
            s: $f48a76a71295956c$export$f84bd70098573c5c.s
        });
        return {
            data: data,
            isEnd: data.length === 0
        };
    } catch (error) {
        console.log("search.error", error);
        return error;
    }
};
const $f48a76a71295956c$export$a92854129bc50f89 = async function(musicItem, quality) {
    try {
        const data = await (0, $8ItRl.requestApi).getMediaSource({
            types: "url",
            source: $f48a76a71295956c$export$f84bd70098573c5c.source,
            id: musicItem.id,
            br: (0, $8ItRl.qualityMap)[quality],
            s: $f48a76a71295956c$export$f84bd70098573c5c.s
        });
        console.log(data);
        return {
            url: data.url,
            quality: data.br
        };
    } catch (error) {
        console.log("getMediaSource.error", error);
        return error;
    }
};
const $f48a76a71295956c$export$cec695f762a1db32 = async function(musicItem) {
    try {
        const data = await (0, $8ItRl.requestApi).getMusicInfo({
            types: "info",
            source: $f48a76a71295956c$export$f84bd70098573c5c.source,
            id: musicItem.pic_id,
            size: 300,
            s: $f48a76a71295956c$export$f84bd70098573c5c.s
        });
        console.log(data);
        return {
            artwork: data.url
        };
    } catch (error) {
        console.log("getMusicInfo.error", error);
        return error;
    }
};
const $f48a76a71295956c$export$dd8877a67b94ca98 = async function(musicItem) {
    try {
        const data = await (0, $8ItRl.requestApi).getLyric({
            types: "lyric",
            source: $f48a76a71295956c$export$f84bd70098573c5c.source,
            id: musicItem.lyric_id,
            s: "5CFA6F10"
        });
        console.log(data);
        return {
            lrc: data.lyric,
            rawLrc: data.tlyric
        };
    } catch (error) {
        console.log("getLyric.error", error);
        return error;
    }
};

});
parcelRegister("8ItRl", function(module, exports) {

$parcel$export(module.exports, "sourceMap", () => $969787c686ce746c$export$117dd3e0b12ec7ec);
$parcel$export(module.exports, "qualityMap", () => $969787c686ce746c$export$1a81cd0510c0eb4);
$parcel$export(module.exports, "requestApi", () => $969787c686ce746c$export$c5fbcfb2b492c83d);


const $969787c686ce746c$var$GD_SOURCE_URL = "https://music-api.gdstudio.xyz/api.php";
const $969787c686ce746c$export$117dd3e0b12ec7ec = {
    netease: "netease",
    kuwo: "kuwo",
    tencent: "tencent",
    tidal: "Tidal",
    qobuz: "Qobuz",
    spotify: "Spotify"
};
const $969787c686ce746c$export$1a81cd0510c0eb4 = {
    low: "192",
    standard: "320",
    high: "740",
    super: "999"
};
const $969787c686ce746c$export$c5fbcfb2b492c83d = {
    // 搜索
    search: (params)=>(0, ($parcel$interopDefault($37ozM$axios)))({
            method: "POST",
            url: $969787c686ce746c$var$GD_SOURCE_URL,
            data: (0, ($parcel$interopDefault($37ozM$qs))).stringify(params)
        }).then(({ data: data })=>{
            const result = data.map((i)=>{
                const list = i.artist;
                let artist = list.length > 0 ? list[0] : "";
                return {
                    ...i,
                    artist: artist,
                    title: i.name
                };
            });
            return result;
        }),
    // 获取音源
    getMediaSource: (params)=>(0, ($parcel$interopDefault($37ozM$axios)))({
            method: "POST",
            url: $969787c686ce746c$var$GD_SOURCE_URL,
            data: (0, ($parcel$interopDefault($37ozM$qs))).stringify(params)
        }).then(({ data: data })=>data),
    // 获取音乐信息
    getMusicInfo: (params)=>(0, ($parcel$interopDefault($37ozM$axios)))({
            method: "POST",
            url: $969787c686ce746c$var$GD_SOURCE_URL,
            data: (0, ($parcel$interopDefault($37ozM$qs))).stringify(params)
        }).then(({ data: data })=>data),
    // 获取歌词
    getLyric: (params)=>(0, ($parcel$interopDefault($37ozM$axios)))({
            method: "POST",
            url: $969787c686ce746c$var$GD_SOURCE_URL,
            data: (0, ($parcel$interopDefault($37ozM$qs))).stringify(params)
        }).then(({ data: data })=>data)
};

});



$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $31fff9d47e3673fa$export$2e2bcd8739ae039);

var $l5i2x = parcelRequire("l5i2x");

var $8ItRl = parcelRequire("8ItRl");
const { defaultConfig: $31fff9d47e3673fa$var$defaultConfig, pluginConfig: $31fff9d47e3673fa$var$pluginConfig, ...$31fff9d47e3673fa$var$optMethods } = $l5i2x;
$31fff9d47e3673fa$var$defaultConfig.source = (0, $8ItRl.sourceMap).qobuz;
const $31fff9d47e3673fa$var$pluginInstance = {
    platform: "\u963F\u4E5DQOBUZ",
    ...$31fff9d47e3673fa$var$pluginConfig,
    ...$31fff9d47e3673fa$var$optMethods
};
var $31fff9d47e3673fa$export$2e2bcd8739ae039 = $31fff9d47e3673fa$var$pluginInstance;


