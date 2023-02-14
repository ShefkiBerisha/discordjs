const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the bots latency!"),
  execute: async (interaction, client) => {
    let days = Math.floor(client.uptime / 86400000)
    let hours= Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60
    
    const embed = new EmbedBuilder()
        .setTitle(`🤖 **Bot Latency:** \n \`${Date.now() - interaction.createdTimestamp}ms\``)
        .addFields({name:`📱 Websocket Ping:`, value:`\`${client.ws.ping}ms\``})
        .addFields({name:`✅ Uptime:`, value:`\`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes, \`${seconds}\` seconds.`})
        .setColor("Green")
    await interaction.reply({embeds: [embed], ephemeral=true})

  },
};
