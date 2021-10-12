module.exports = {
    app: {
        px: '=',
        token: 'ODk3MTQ1MzI2MjcwNTY2NDAy.YWRZsQ.r17LK6ehVAtOB_wnBQlbaBPfNvU',
        playing: 'by Aldi'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
