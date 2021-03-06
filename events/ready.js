module.exports = async (client, message) => {
    client.user.setActivity("Overlord", {
        type: "WATCHING"
    });
    if (client.user.username !== "Webcomics Manager") client.user.setUsername("Webcomics Manager");

    client.db1.Db.authenticate()
        .then(() => {
            console.log(`${client.config.cliColor("GREEN")}Database connection has been established!${client.config.cliColor("NC")}`);
        })
        .catch(err => {
            console.error(`${client.config.cliColor("RED")}Unable to connect to database!${client.config.cliColor("NC")}`);
            return;
        })
}
