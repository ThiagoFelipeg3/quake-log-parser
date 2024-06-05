export enum Regex {
    hostName = /sv_hostname\\([a-z A-Z 0-9][^\\]*)/,
    version = /version\\(.*)\\protocol/,
    playerId = /Client(Connect|UserinfoChanged): ([0-9]*)/,
    playerName = /ClientUserinfoChanged: [0-9]* n\\(.*)\\t\\[0-9]+\\model/,
    reference = /^.{0,7}([a-z A-Z][^:]*)/
}