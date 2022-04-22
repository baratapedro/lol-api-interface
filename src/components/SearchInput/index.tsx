import { useState } from 'react'
import {
    Link
  } from "react-router-dom";
import { Search } from './styles';

export function SearchInput() {

    const [summoner, setSummoner] = useState('')

    return(
        <Search>
                <input type="text" 
            placeholder="Enter a summoner name"
            onChange={e => setSummoner(e.target.value)}
            value={summoner}/>
            <Link to={`/summoners/${summoner}`}>
            <button
            >Search</button>
            </Link>
        </Search>
    );
}