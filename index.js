const Discord = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const client = new Discord.Client();
const auth = require('./auth.json');
client.login(auth.key);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
    if (msg.content === '!ads') {
        msg.channel.send('Maoyue Discord https://discord.gg/uQ4UXANnP2');
    }
    if (msg.content === '!invite') {
        msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=980416219830169631&permissions=8&scope=bot');
    }
    if (msg.content === '!bot-info') {
        const InfoEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':crown:本機器人的資訊')
            .addField('機器人id', `${client.user.tag}`, true)
            .addField('群組數', `${client.guilds.cache.size}`, true)
            .addField('CPU占用', `未知`, true)
            .addField('記憶體占用', `未知`, true)
            .setTimestamp()


        msg.channel.send(InfoEmbed);
    }
    if (msg.content === '!help') {
        const HelpEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':printer: 幫助頁面')
            .setDescription('版本:1.0')
            .addField('!help', '幫助頁面', true)
            .addField('!ads', '廣告內容', true)
            .addField('!invite', '邀請本機器人', true)
            .addField('!status', '獲取機器人狀態', true)
            .addField('!poll', '了解如何使用投票功能', true)
            .addField('!server-info', '獲取該伺服器的資訊', true)
            .addField('!user-info', '獲取使用者資訊', true)
            .setFooter('本機器人由 Maoyue負責維護以及編寫');
        msg.channel.send(HelpEmbed);
    }
    if (msg.content === '!status') {
        const StatusEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':chart_with_upwards_trend: 機器人狀態')
            .setDescription('版本:1.0')
            .addField('連線品質', `:white_check_mark: 非常穩定！！！！`, true)
            .setTimestamp()


        msg.channel.send(StatusEmbed);
    }
    if (msg.content === '!server-info') {
        const members = msg.guild.members.cache.array();
        const memberCount = members.length;
        const ServerEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':man_teacher: 此伺服器的資訊')
            .setDescription('版本:1.0')
            .addField('伺服器名稱', `${msg.guild.name}`, true)
            .addField('伺服器人數', `${memberCount}人`, true)
            .addField('擁有者', `${msg.guild.owner}`)
            .addField('創建時間', `${moment.utc(msg.guild.createdAt).format('YYYY/MMM/DD')}`)
            .setTimestamp()


        msg.channel.send(ServerEmbed);
    }
});