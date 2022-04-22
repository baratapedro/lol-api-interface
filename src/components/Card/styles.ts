import styled from 'styled-components'
import { darken, transparentize } from 'polished'

interface CardProps {
    win: boolean
}

export const Container = styled.main<CardProps>`
    width: 700px;
    margin: 0 auto;
    background: ${props => props.win ? "#81ACFF" : "#E84057"};
    &:hover {
        background: ${props => props.win ? darken(0.05 , "#81ACFF") : darken(0.03, "#E84057")};
    }
    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px;
    
    margin-top: 30px;

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

`
