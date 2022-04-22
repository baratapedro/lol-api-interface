import { IParticipants } from "./IParticipants"

export interface IInfo {
    gameCreation: number,
    gameDuration: number,
    gameId: number,
    gameMode: string
    gameName: string,
    gameStartTimestamp: number,
    gameType: string,
    gameVersion: string,
    mapId: number,
    participants: IParticipants[],
    platformId: string
    queueId: number
}