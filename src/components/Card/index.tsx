import { Data, Container } from "./styles";
import { IUser } from '../../interfaces/IUser'
import { IParticipants } from "../../interfaces/IParticipants";
import axios from 'axios'
import { useEffect, useState } from "react";
import data from '../../champions.json'


interface CardProps {
    frag: string,
    championName: string,
    win: boolean,
    name: string | undefined
}

export function Card({championName, frag, win}: CardProps) {


    
    const [icon, setIcon] = useState('')


    useEffect(() => {    
            const championsList = data
            
            const currentName = championName
            
              championsList.map(data => {
                if(currentName == data.name) {
                    setIcon(data.icon)  
                                  
                }
            })        
            
    }, [championName])


   
    return(
        
        <Container win={win}>
            
            <Data>
                <img src={icon} alt="Campeão" />
                <strong>{championName}</strong>             
            </Data>
            <Data>
                <strong>KDA</strong>
                <strong>{frag}</strong>
            </Data>

            <strong>
            
            <a
            >Click for more Details</a>
            
            
            </strong>

        </Container>
        
    )
}