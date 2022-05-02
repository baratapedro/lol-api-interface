import { Data, Container } from "./styles";
import { IParticipants } from "../../interfaces/IParticipants";
import data from '../../champions.json'
import {
    Link
} from "react-router-dom";
import { IMatches } from "../../interfaces/IMatches";


interface CardProps {
    name: string | undefined,
    match: IMatches
}

export const getIcon = (championName: string) => {
    const champion = data.find(champion => champion.name == championName)
    return champion?.icon
}

export function Card({ name, match }: CardProps) {

    const currentSummoner: IParticipants = match.info.participants.find(participant => participant.summonerName == name)!

    const frag = `${currentSummoner.kills}/${currentSummoner.deaths}/${currentSummoner.assists}`

    

    return (
        <Link className="card-text" to={`/summoners/${name}/${match.metadata.matchId}`}>
            <Container win={currentSummoner.win}>

                <Data>
                    <img src={getIcon(currentSummoner.championName)} alt="Campeão" />
                    <strong>{currentSummoner.championName}</strong>
                </Data>
                <Data>
                    <strong>KDA</strong>
                    <strong>{frag}</strong>
                </Data>
                <Data>
                <strong>
                    <a
                    >Click for more Details</a>
                </strong>
                </Data>
            </Container>
        </Link >

    )
}