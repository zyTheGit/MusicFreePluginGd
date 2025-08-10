import plugin from "../src/index";
const { search, getMediaSource } = plugin;
console.log(plugin);

search("童话镇", 1, "music").then((res) => console.log("search", res));
getMediaSource(
  {
    id: 2720146507,
    name: "说书人 小沈阳",
    artist: "ORCA特米",
    album: "",
    pic_id: "109951171367934432",
    url_id: 2720146507,
    lyric_id: 2720146507,
    source: "netease",
    title: "说书人 小沈阳",
    lrc: "https://music-api.gdstudio.xyz/api.php?types=lyric&source=netease&id=2720146507",
    artwork:
      "https://music-api.gdstudio.xyz/api.php?types=pic&source=netease&id=109951171367934432&size=[300/500]",
  },
  "standard"
).then((res) => console.log("getMediaSource", res));


