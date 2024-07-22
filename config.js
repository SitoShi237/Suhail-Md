const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sitoshi_user:11LZYT0a7cUDa7mGcWkdlA9b7NqT5hbD@dpg-cqfbss5ds78s73brm8eg-a.oregon-postgres.render.com/sitoshi"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a749b59f17df659487c22.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "█▬█ █ ▀█▀" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237656468700";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_23_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzLFxuICAgICAgICA5LFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NixcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJ3elVhM3FDL1lpOUlLQTBDc3hFV3BuZk43QzJpelBuL0g4YlVBYkF0Umc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZXTHRISUNXUzd5Y19ndEdNSW84cmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzFkYjA1MzItNDQ0Zi00YTM2LWJmYzktNzFjMjRhNjJkMDcyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDE3NixcbiAgICAgIDIzMixcbiAgICAgIDIsXG4gICAgICA0NSxcbiAgICAgIDE0MCxcbiAgICAgIDE2MSxcbiAgICAgIDIwMixcbiAgICAgIDE4MixcbiAgICAgIDEwMixcbiAgICAgIDI1NCxcbiAgICAgIDI1MCxcbiAgICAgIDQ3LFxuICAgICAgMjQ3LFxuICAgICAgNjYsXG4gICAgICAxNTMsXG4gICAgICAyMCxcbiAgICAgIDE0LFxuICAgICAgMTg5LFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMjQ0LFxuICAgICAgMTA5LFxuICAgICAgMTA2LFxuICAgICAgMjE1LFxuICAgICAgNDAsXG4gICAgICAxNTIsXG4gICAgICA0MixcbiAgICAgIDE1NCxcbiAgICAgIDIzNixcbiAgICAgIDg0LFxuICAgICAgMTYwLFxuICAgICAgNjAsXG4gICAgICA4MixcbiAgICAgIDI1MyxcbiAgICAgIDk2LFxuICAgICAgMTg4LFxuICAgICAgMTcyLFxuICAgICAgNTEsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkZFOUREUktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NjQ2ODcwMDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTA4NzMyNzAzOTQ5Njg6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09mNmYwR0VLN0E5YlFHR0ZFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOV2tkZ2V6NElGS0ZnTk1VbGxCYlZwbDM1L0NlVC85eE80Mk1TTWdQeERZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhMMFZDc3N3Q05yVXA2enc4em8zWis4SXZhRGZ4QVhVbTRGZi85NGgrSmtaR2EreWpPVG1ZalRGRFVMcFhycm1VTEovWVFMNFNaYXg3VDN6Uk9HREJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZTdEZQMEhXWGxWVXV1ZlI0WCtyMjJuUUgwdlhkVWFUYk9WNEM5WFVZSGlOUkxFcTlXa2Y4M1N5YjREemxrM2NyQkxHSHdkVHFUTzVxdkRLOVZvMEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1NjQ2ODcwMDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTg5ODEwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝗡.𝗢.𝗩.𝗔" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝙕𝙀𝙉𝙄𝙈𝙀𝙇𝙇𝙀",
  packname: process.env.PACK_NAME || "🤦‍♀️",
  botname : process.env.BOT_NAME  || "𝙉.𝙊.𝙑.𝘼 █▬█ █ ▀█▀",
  ownername:process.env.OWNER_NAME|| "𝙍𝙀𝘿 𝘿𝙍𝞓𝙂𝞡𝙉",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
