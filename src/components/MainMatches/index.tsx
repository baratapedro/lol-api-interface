import { Card } from "../Card";
import { Background, Container, Loading } from "./styles";
import {
    Link
} from "react-router-dom";
import { IParticipants } from '../../interfaces/IParticipants'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { IMatches } from '../../interfaces/IMatches'

interface MainMatchesProps {
    loading: boolean,
    name: string | undefined,
    matches: IMatches[]
}


const override = css`
        display: block;
        margin: 0 auto;
        position: fixed;
        border: 3px solid #4169E1;
    `;


export function MainMatches({ loading, name, matches }: MainMatchesProps) {

    function getCurrentSummoner(match: IMatches) {
        const currentSummoner: IParticipants = match.info.participants.find(participant => participant.summonerName == name)!
        const kda = `${currentSummoner.kills}/${currentSummoner.deaths}/${currentSummoner.assists}`
        return { kda, currentSummoner }
    }

    return (
        <>
            {loading ? <Background>
                    <ClipLoader loading={loading} css={override} size={100} />
                </Background> : (
                     <Background>

                     <Container>
 
                         {
                             matches.map(match => {
                                 const { kda, currentSummoner } = getCurrentSummoner(match)
                                 return <Link className="card-text" to={`/summoners/${name}/${match.metadata.matchId}`}>
                                     <Card frag={kda} championName={currentSummoner.championName} win={currentSummoner.win} name={name} />
                                 </Link >
                             })
                         }
 
                         <Link to={`/`}>
                             <button
                                 className="button-home"
                             >Home</button>
                         </Link>
                     </Container>
                 </Background>
                )}
        </>
    )


}

