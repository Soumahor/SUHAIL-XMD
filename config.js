const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_03_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjksXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDU4LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk40Tkc1bGRHb2xVeWdNWWMyUmN6T1IzT1FnTjR0eENXUnRNdkpSQlRjMkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1OTg4ODg2NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAzMkU2MkI3QThFNzZFREFDRTNFNDRENzA0QzU2N0QyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjY5ODE4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1NnBrVU1GSFMwbVQ3clhIbHZKQmxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjViOGMyZTE5LTYwYjUtNDMxYS1hNWI1LWJiMGJiNTYyNzE5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxNjksXG4gICAgICAxMDYsXG4gICAgICAxOTIsXG4gICAgICAxNTgsXG4gICAgICA4OCxcbiAgICAgIDEwOSxcbiAgICAgIDEzNyxcbiAgICAgIDEyMCxcbiAgICAgIDg4LFxuICAgICAgMTI2LFxuICAgICAgMjE1LFxuICAgICAgMTUyLFxuICAgICAgMjMxLFxuICAgICAgMTA3LFxuICAgICAgMTkzLFxuICAgICAgOTUsXG4gICAgICAyMDcsXG4gICAgICAxNCxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDEsXG4gICAgICAyNDcsXG4gICAgICAxNDEsXG4gICAgICAzOCxcbiAgICAgIDYyLFxuICAgICAgMjI3LFxuICAgICAgMTI1LFxuICAgICAgMTAyLFxuICAgICAgMzEsXG4gICAgICAxMzAsXG4gICAgICAxMjMsXG4gICAgICAyNTUsXG4gICAgICAyNDIsXG4gICAgICAxMDYsXG4gICAgICAzNixcbiAgICAgIDI1NSxcbiAgICAgIDE0LFxuICAgICAgMTc5LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBYNFpCNDIxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU5ODg4ODY2MzoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmYDwnZmhIPCdmYvwnZmn8J2ZpPCdmZvwnZma8J2ZqPCdmaTwnZmnXCIsXG4gICAgXCJsaWRcIjogXCIyMzM5MzM5ODM3Njg2NjY6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRtdDVVR0VNREFtN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5UURwWFNsOWtPc1lWMk1xSmVuUStOVXNiajlkUlBhY0tMSGhIeGV3R1NBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktmU25YOWl6ZHdGZlhCRTMrN2xpY0t1aThNU3IwRGZLT1NvNjYyc3d4L3FxK3hoK2p2Znd5dE9ETWpJUHY1QnFJTGtyaE51NjBGRUtWWFlVc2hrNURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdsNjg2ejNYRnIwMmhZZ1cvMVFuRzI3RnIvWjYrVWFSL2hVUUFxWmNrcmVUcC9RQnZKVDVyYlM4c2VmV3pxb1AwbXNMcDMyaHY5dnVhWUk5b3FJUmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTk4ODg4NjYzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjk4MTgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmErXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYSsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUZGRGaU1JQi92czJzNDlPUkdnanQ2L0VBNi8vWXV1dzl3TFZQS25SYW1nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTU1NjcxODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
