const ws = require("../modules/webtoon_scraping.js");

exports.run = async (client, msg, args) => {
    let day = args[0];
    ws.scheduleWebtoon(client, msg, day);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
}

exports.help = {
    name: "schedulewebtoon",
    description: "Check for webtoon that update today.",
    usage: "schedulewebtoon <day>"
}
