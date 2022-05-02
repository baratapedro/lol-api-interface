import styled from 'styled-components'
import { darken, transparentize } from 'polished'

interface CardProps {
    win: boolean
}

export const Container = styled.main<CardProps>`
    background: ${props => props.win ? "#81ACFF" : "#E84057"};
    &:hover {
        background: ${props => props.win ? darken(0.05 , "#81ACFF") : darken(0.03, "#E84057")};
    }

    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px;
    

    border-radius: 5px;

    color: #FDF5E6;


`

export const Data = styled.div`
    display: flex;
    justify-content: center;   
    flex-direction: column;


    img {
        width: 50px;
        height: 50px;
        border-radius: 30px;
        border: 1px solid #FDF5E6;
    }

    @media only screen and (max-width: 700px) { 
        
        font-size: 14px;
        
        
        
       strong a{
            width: 80px;
            display: flex;
            text-align: center;
        }

    
}


`
