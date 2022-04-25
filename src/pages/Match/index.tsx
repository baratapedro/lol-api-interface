import { Container, Data, DetailedData, Participants, SpellIcons, Team, Teams } from "./styles";
import championsData from '../../champions.json'
import spellsData from '../../spells.json'
import {
    Link,
    useParams
} from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import { IParticipants } from "../../interfaces/IParticipants";
import { IMatches } from "../../interfaces/IMatches";
import { IChampionsList } from "../../interfaces/IChampionsList";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { DefaultBackground } from "../Home/styles";
import { IInfo } from "../../interfaces/IInfo";
import { getIcon } from "../../components/Card";


const override = css`
        display: block;
        margin: 0 auto;
        position: fixed;
        border: 3px solid #4169E1;
    `;

export function Match() {

    const [loading, setLoading] = useState(true);
    const [selectedChampion, setSelectedChampion] = useState<IChampionsList>({} as IChampionsList)
    const [currentSummoner, setCurrentSummoner] = useState<IParticipants>({} as IParticipants)
    const [info, setInfo] = useState<IInfo>()
    const [team1, setTeam1] = useState<IParticipants[]>()
    const [team2, setTeam2] = useState<IParticipants[]>()
    const { name, match } = useParams()

    const getSpells = (summonerId: number) => {
        return spellsData.find(spell => Number(spell.key) == summonerId)
    }



    useEffect(() => {

        async function getSummonerData() {

            const info = await axios.get<IMatches>(`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=RGAPI-7423e740-fd27-4318-9b53-f242214d377f`).then(response => response.data.info)
            setInfo(info)
            
            const currentSummoner: IParticipants = info.participants.find(participant => participant.summonerName == name)!
            setCurrentSummoner(currentSummoner)

            setSelectedChampion(championsData.find(champion => champion.name == currentSummoner.championName)!)

            setTeam1(info.participants.filter(participant => participant.teamId == currentSummoner.teamId))
            setTeam2(info.participants.filter(participant => participant.teamId != currentSummoner.teamId))

            setLoading(false)

        }

        getSummonerData()
    }, [])

    return (
        <>
            {loading ? <DefaultBackground>
                <ClipLoader loading={loading} css={override} size={100} />
            </DefaultBackground> : (
                <DefaultBackground>
                    <Container win={currentSummoner.win}>
                        <Data>
                            <img src={selectedChampion.icon} alt="" />
                            <strong>{selectedChampion.name}</strong>
                            <p>{selectedChampion.title}</p>
                            <strong>{currentSummoner.individualPosition != 'Invalid' ? currentSummoner.individualPosition : ''}</strong>
                            <SpellIcons>
                                <img src={getSpells(currentSummoner.summoner1Id)?.icon} alt="" />
                                <img src={getSpells(currentSummoner.summoner2Id)?.icon} alt="" />
                            </SpellIcons>
                        </Data>
                        <DetailedData win={currentSummoner.win}>
                            <h1>{currentSummoner.win ? 'Victory' : 'Defeat'}</h1>
                            <p>KDA: {`${currentSummoner.kills}/${currentSummoner.deaths}/${currentSummoner.assists}`}</p>
                            <p>Level: {currentSummoner.champLevel}</p>
                            <p>CS: {currentSummoner.totalMinionsKilled + currentSummoner.neutralMinionsKilled}</p>
                            <p>Time duration: {new Date(Number(info?.gameDuration) * 1000).toISOString().slice(11, 19)}</p>
                            <Teams>
                                <Team>
                                    <h2>TEAM 1</h2>
                                    {
                                        team1?.map(participant => {
                                            return (
                                                <Participants>
                                                    <img src={getIcon(participant.championName)} alt="" />
                                                    <p>{participant.summonerName}</p>
                                                </Participants>
                                            )
                                        })
                                    }
                                </Team>
                                <Team>
                                    <h2>TEAM 2</h2>
                                    {
                                        team2?.map(participant => {
                                            return (
                                                <Participants>
                                                    <img src={getIcon(participant.championName)} alt="" />
                                                    <p>{participant.summonerName}</p>
                                                </Participants>
                                            )
                                        })
                                    }
                                </Team>
                            </Teams>
                        </DetailedData>
                        <Link to={`/summoners/${name}`}>
                            <button
                                className="button-back"
                            >Back</button>
                        </Link>
                        <Link to={`/`}>
                            <button
                                className="button-home"
                            >Home</button>
                        </Link>
                    </Container>
                </DefaultBackground>
            )}
        </>
    )
}