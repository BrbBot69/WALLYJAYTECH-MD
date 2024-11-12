//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "avenyamakazi8@gmail.com";
global.location = "GAUTENG, South Africa";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/Wallyjaytechh/WALLYJAYTECH-MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/JdlxyNzToBu3h7YwVV0SzQ";
global.website = process.env.GURL || "https://wa.me/27767494368";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://fv5-5.files.fm/down.php?i=xygcscr7dm&view&n=IMG-20241101-WA0062.jpg";
global.devs = "https://t.me/svenanjafrieda";
global.sudo = process.env.SUDO || "27767494368";
global.owner = process.env.OWNER_NUMBER || "27767494368";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://fv5-5.files.fm/down.php?i=xygcscr7dm&view&n=IMG-20241101-WA0062.jpg";
global.waPresence = process.env.WAPRESENCE || "composimg";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "27696620094";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NPQTY1TTk0c0hRSEZsUWoxUktlYjZLckk0VEpTWENuOEY0cDlEaW9Xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG1hWTh1UmxGN08yYmUrYmhFdDIxZ1E1NW81RExoM3l6dVkzcjdXSHBqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQVRZTzBOMFFNOXdwdG0rWVZrL05HS2F4Q0x3U1hTTm03S3VBRXBwSm5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwQzZ4VFlPY3luYk1zb0xuY3MzOGg5UXpCbmthd25HTEVXdGxQN0NHQUd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLRHFLcWRsNDZGaVloeVBFaXFXd29qSHdxZ0hWbGY2VlljNFdnWkVLMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IiszWWtuRVNoV0JXa1lrOFZEbExLazNnbzlFRkh1STN0WGV4a1p5WnpSbHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BjeGQvNWtDaWpXMko4MyttTEFnbUlMN1pjOHhBa2x1UXJsZVBmSVRuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3RHbUtmNzlncytaQWc2Wmt6Wmk4M1BlcUptVlBMczNYR3ZreFl3MkcwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk5bXJXclhQbVpMUlVka1psTzYyMG5GY09WYWlObFMxN3BTMWdkaG9uaFY0U3g4ZTBjRnpWNkNISzVqR3R2dWZ6RVk0eVBvalFDSWxUNHBXbWd5UGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJ6T3RYNUkrWDdsRzF5bXludTdWeVMrbFMrQWM5b0dHSVdnRWZLZzFRYnN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzRnJuMmhUblRtS0hHdXRoWU1SbHd3IiwicGhvbmVJZCI6ImQ5MGMxZmZkLTkyMTMtNDU3Ny04Zjc3LTVmZDlmN2RhMjE5ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmYjNVOXBIVFNMYlBLRE9lWjluL0t0eXZtL2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTFiQ29iY0ZZTDMyMVgyUndXVFpZR256bEx3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkI1UFpaVFdFIiwibWUiOnsiaWQiOiIyNzY5NjYyMDA5NDozMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZOQ8J2Tv/Cdk67wnZOR8J2TuPCdk70ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ003WTNPQURFT0dDejdrR0dCY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImIxdTNJSytRZHBkVG53S3ZIaHp3UTdJc1drMmRIQ0NHTFZDWHh5WUhpQkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitLeDZXV05QTDhncFRrNFVWcG43aUU3NkhrT2QxeUNreGtjbHBYNVRDa2g5bXJtMklvSU9yNnRlZmFuQjluelVhSGtIbWRIOWZoYW5zajhYRXVybUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIT256R01CUzgzZ3Zaei93OXJWYzcybFdmU3htQlJTNTNVVStFb0JncHB1K2t5VzhjSUorclRXMnFrWEVlOFJ3d05ER3dYeDZWWXlFb2xhTDVZTlNqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3Njk2NjIwMDk0OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc5YnR5Q3ZrSGFYVTU4Q3J4NGM4RU95TEZwTm5Sd2doaTFRbDhjbUI0Z1IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE0NDUxMDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2dBIn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0",
  caption: process.env.CAPTION || "INVENTED BY 𝕬𝖛𝖊𝕭𝖔𝖙 𝕸𝕯",
  author: process.env.PACK_AUTHER || "𝕬𝖛𝖊𝕭𝖔𝖙 𝕸𝕯",
  packname: process.env.PACK_NAME || "𝕬𝖛𝖊𝕭𝖔𝖙",
  botname: process.env.BOT_NAME || "𝕬𝖛𝖊𝕭𝖔𝖙 𝕸𝕯",
  ownername: process.env.OWNER_NAME || "𝕬𝖛𝖊",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "dyrbNSNtMf1CE84he61DR7Wx",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WALLYJAYTECH-MD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
