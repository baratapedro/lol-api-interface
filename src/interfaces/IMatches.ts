import { IParticipants } from "./IParticipants"

export interface IMatches {
    info: {
        participants: IParticipants[],
        gameDuration: number
    },
    metadata: {
        matchId: string
    }
}

