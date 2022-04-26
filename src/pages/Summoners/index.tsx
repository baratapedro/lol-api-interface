import { useEffect, useState } from 'react'
import {
    useParams
  } from "react-router-dom";
import axios from 'axios'
import { IUser } from '../../interfaces/IUser'
import { IMatches } from '../../interfaces/IMatches';
import { DefaultBackground } from '../Home/styles';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from './styles';
import {
  Link
} from "react-router-dom";
import { Card } from '../../components/Card';


const override = css`
        display: block;
        margin: 0 auto;
        position: fixed;
        border: 3px solid #4169E1;
    `;


export function Summoners() {
  
  const {name} = useParams()


  const [loading, setLoading] = useState(true);

  const [matches, setMatches] = useState<IMatches[]>([])

  useEffect(() => {

    async function searchSummoner() {
    
      const key = import.meta.env.VITE_LOL_API_KEY

      const user = await axios.get<IUser>(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${key}`)
  

      const matchIds = await axios.get<String[]>(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${user.data.puuid}/ids?start=0&count=20&api_key=${key}`)
  

      const matches = await Promise.all(
        matchIds.data.map(match => axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${key}`)
          .then(response => response.data)))   
          
          setMatches(matches)
          
    
      setLoading(false)  
    }
    searchSummoner()
  }, [name])


  return (
    <>
        {loading ? <DefaultBackground>
                <ClipLoader loading={loading} css={override} size={100} />
            </DefaultBackground> : (
                 <DefaultBackground>

                 <Container>

                     {
                         matches.map(match => {                         
                             return <Card match={match} name={name} />
                             
                         })
                     }

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