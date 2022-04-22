import { Background, Container, Data, DetailedData, Participants, SpellIcons, Team, Teams } from "./styles";
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
import { ISpellList } from "../../interfaces/ISpellList";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


const override = css`
        display: block;
        margin: 0 auto;
        position: fixed;
        border: 3px solid #4169E1;
    `;


export function MainMatchDetails() {

    const [icon, setIcon] = useState('')
    const [championName, setChampionName] = useState('')
    const [title, setTitle] = useState('')
    const [spellIcon1, setSepllsIcon1] = useState('')
    const [spellIcon2, setSepllsIcon2] = useState('')
    const [role, setRole] = useState('')
    const [kda, setKda] = useState('')
    const [level, setLevel] = useState(0)
    const [farm, setFarm] = useState(0)
    const [time, setTime] = useState('')
    const [win, setWin] = useState('')
    const [booleanWin, setBooleanWin] = useState(false)
    const [iconParticipant1, setIconParticipant1] = useState('')
    const [iconParticipant2, setIconParticipant2] = useState('')
    const [iconParticipant3, setIconParticipant3] = useState('')
    const [iconParticipant4, setIconParticipant4] = useState('')
    const [iconParticipant5, setIconParticipant5] = useState('')
    const [iconParticipant6, setIconParticipant6] = useState('')
    const [iconParticipant7, setIconParticipant7] = useState('')
    const [iconParticipant8, setIconParticipant8] = useState('')
    const [iconParticipant9, setIconParticipant9] = useState('')
    const [iconParticipant10, setIconParticipant10] = useState('')
    const [nameParticipant1, setNameParticipant1] = useState('')
    const [nameParticipant2, setNameParticipant2] = useState('')
    const [nameParticipant3, setNameParticipant3] = useState('')
    const [nameParticipant4, setNameParticipant4] = useState('')
    const [nameParticipant5, setNameParticipant5] = useState('')
    const [nameParticipant6, setNameParticipant6] = useState('')
    const [nameParticipant7, setNameParticipant7] = useState('')
    const [nameParticipant8, setNameParticipant8] = useState('')
    const [nameParticipant9, setNameParticipant9] = useState('')
    const [nameParticipant10, setNameParticipant10] = useState('')

    const [loading, setLoading] = useState(true);

    const { name, match } = useParams()

    useEffect(() => {

        async function getSummonerData() {


            const info = await axios.get<IMatches>(`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=RGAPI-dbe31bf4-3cc7-42b5-9b17-08f4ff07bb3b`).then(response => response.data.info)

            const participants = info.participants

            const currentSummoner: IParticipants = participants.find(participant => participant.summonerName == name)!

            const championsList = championsData

            const spellsList = spellsData
            const selectedChampion: IChampionsList = championsList.find(champion => champion.name == currentSummoner.championName)!

            const currentIcon = selectedChampion.icon
            setIcon(currentIcon)

            const currentChampionName = selectedChampion.name
            setChampionName(currentChampionName)

            const currentChampionTitle = selectedChampion.title
            setTitle(currentChampionTitle)

            const currentSpell1: ISpellList = spellsList.find(spell => Number(spell.key) == currentSummoner.summoner1Id)!
            const iconSpell1 = currentSpell1.icon
            setSepllsIcon1(iconSpell1)


            const currentSpell2: ISpellList = spellsList.find(spell => Number(spell.key) == currentSummoner.summoner2Id)!
            const iconSpell2 = currentSpell2.icon
            setSepllsIcon2(iconSpell2)

            let role;
            if (currentSummoner.individualPosition == 'Invalid') {
                role = ''
            } else if (currentSummoner.individualPosition == 'UTILITY') {
                role = 'SUPPORT'
            } else {
                role = currentSummoner.individualPosition
            }
            setRole(role)

            const kda = `${currentSummoner.kills}/${currentSummoner.deaths}/${currentSummoner.assists}`
            setKda(kda)

            const level = currentSummoner.champLevel
            setLevel(level)

            const farm = currentSummoner.totalMinionsKilled + currentSummoner.neutralMinionsKilled
            setFarm(farm)

            const matchTime = info.gameDuration / 60
            const stringMatchTime = String(matchTime)
            const splitMatchTime = stringMatchTime.split('.')
            const lastSplitMachTime = `0.${splitMatchTime[1]}`
            const lastSplitMachTimeNumber = Number(lastSplitMachTime)
            const seconds = lastSplitMachTimeNumber * 60
            const fixedSeconds = seconds.toPrecision(2)
            let updatedSecond;
            let newUpdatedSecond;
            if (fixedSeconds.includes('.')) {
                updatedSecond = seconds.toPrecision(1)
                newUpdatedSecond = `0${updatedSecond}`
            } else {
                newUpdatedSecond = seconds.toPrecision(2)
            }
            const minutes = splitMatchTime[0]
            const arrayFormattedMatchTime = [minutes, newUpdatedSecond]
            const formattedMatchTime = arrayFormattedMatchTime.join().replace(',', ':')
            setTime(formattedMatchTime)

            let win;
            if (currentSummoner.win) {
                win = 'Victory'
            } else {
                win = 'Defeat'
            }
            setWin(win)

            const booleanWin = currentSummoner.win
            setBooleanWin(booleanWin)

            const participantsName = participants.map(participant => participant.summonerName)
            setNameParticipant1(participantsName[0])
            setNameParticipant2(participantsName[1])
            setNameParticipant3(participantsName[2])
            setNameParticipant4(participantsName[3])
            setNameParticipant5(participantsName[4])
            setNameParticipant6(participantsName[5])
            setNameParticipant7(participantsName[6])
            setNameParticipant8(participantsName[7])
            setNameParticipant9(participantsName[8])
            setNameParticipant10(participantsName[9])


            function showCurrentParticipants(position: number) {
                return championsList.find(champion => champion.name == participants[position].championName)!
            }


            setIconParticipant1(showCurrentParticipants(0)?.icon)
            setIconParticipant2(showCurrentParticipants(1)?.icon)
            setIconParticipant3(showCurrentParticipants(2)?.icon)
            setIconParticipant4(showCurrentParticipants(3)?.icon)
            setIconParticipant5(showCurrentParticipants(4)?.icon)
            setIconParticipant6(showCurrentParticipants(5)?.icon)
            setIconParticipant7(showCurrentParticipants(6)?.icon)
            setIconParticipant8(showCurrentParticipants(7)?.icon)
            setIconParticipant9(showCurrentParticipants(8)?.icon)
            setIconParticipant10(showCurrentParticipants(9)?.icon)

            setLoading(false)

        }

        getSummonerData()
    }, [])


    return (

        <>
            {loading ? <Background>
                <ClipLoader loading={loading} css={override} size={100} />
            </Background> : (
                <Background>
                    <Container win={booleanWin}>



                        <Data>
                            <img src={icon} alt="" />
                            <strong>{championName}</strong>
                            <p>{title}</p>
                            <strong>{role}</strong>
                            <SpellIcons>
                                <img src={spellIcon1} alt="" />
                                <img src={spellIcon2} alt="" />
                            </SpellIcons>
                        </Data>
                        <DetailedData win={booleanWin}>
                            <h1>{win}</h1>
                            <p>KDA: {kda}</p>
                            <p>Level: {level}</p>
                            <p>CS: {farm}</p>
                            <p>Time duration: {time}</p>
                            <Teams>
                                <Team>
                                    <h2>TEAM 1</h2>
                                    <Participants>
                                        <img src={iconParticipant1} alt="" />
                                        <p>{nameParticipant1}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant2} alt="" />
                                        <p>{nameParticipant2}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant3} alt="" />
                                        <p>{nameParticipant3}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant4} alt="" />
                                        <p>{nameParticipant4}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant5} alt="" />
                                        <p>{nameParticipant5}</p>
                                    </Participants>
                                </Team>
                                <Team>
                                    <h2>TEAM 2</h2>
                                    <Participants>
                                        <img src={iconParticipant6} alt="" />
                                        <p>{nameParticipant6}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant7} alt="" />
                                        <p>{nameParticipant7}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant8} alt="" />
                                        <p>{nameParticipant8}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant9} alt="" />
                                        <p>{nameParticipant9}</p>
                                    </Participants>
                                    <Participants>
                                        <img src={iconParticipant10} alt="" />
                                        <p>{nameParticipant10}</p>
                                    </Participants>
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
                </Background>
            )}
        </>






    )

            }