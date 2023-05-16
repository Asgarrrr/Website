import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"C:/Users/Asgarrrr/Desktop/test3432/src/static","domains":["i.imgur.com","i.ytimg.com","http.cat","lastfm.freetls.fastly.net","cdn.jsdelivr.net","avatars.githubusercontent.com","proxy.duckduckgo.com","cdn.discordapp.com","cdn.myanimelist.net"],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
