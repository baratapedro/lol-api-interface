import { useEffect, useState } from 'react'
import {
    useParams
  } from "react-router-dom";
import { Header } from '../../components/Header';
import { MainMatches } from '../../components/MainMatches';
import axios from 'axios'
import { IUser } from '../../interfaces/IUser'
import { IMatches } from '../../interfaces/IMatches';


export function Summoners() {
  
  const {name} = useParams()


  const [loading, setLoading] = useState(true);

  const [matches, setMatches] = useState<IMatches[]>([])

  useEffect(() => {

    async function searchSummoner() {
    
      const user = await axios.get<IUser>(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-dbe31bf4-3cc7-42b5-9b17-08f4ff07bb3b`)
  
      

      const matchIds = await axios.get<String[]>(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${user.data.puuid}/ids?start=0&count=20&api_key=RGAPI-dbe31bf4-3cc7-42b5-9b17-08f4ff07bb3b`)
  

      const matches = await Promise.all(
        matchIds.data.map(match => axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=RGAPI-dbe31bf4-3cc7-42b5-9b17-08f4ff07bb3b`)
          .then(response => response.data)))   
          
          setMatches(matches)
          
    
      setLoading(false)  
    }
    searchSummoner()
  }, [name])

    return (
        <>
        <Header />         
        <MainMatches loading={loading} name={name} matches={matches}/>       
        </>
    )


  }