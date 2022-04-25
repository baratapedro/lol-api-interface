import styled from "styled-components"
import { darken, transparentize } from 'polished'


interface MainMatchDetails {
    win?: boolean
}

export const Container = styled.div<MainMatchDetails>`
    background: whitesmoke;
    width: 60%;
    height: 45vw;
    min-width: 700px;
    min-height: 500px;
    max-height: 600px;
    
    border-radius: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 30px;
    
    border: 2px solid ${props => props.win ? "#81ACFF" : "#E84057"};
    background: ${props => props.win ? "#B3CDFF" : "#FFBAC3"};
    color:  ${props => props.win ? darken(0.2, "#81ACFF") : darken(0.1, "#E84057")};

    img {
        width: 200px;
        height: 200px;

        border-radius: 100px;
        border: 2px solid ${props => props.win ? darken(0.2, "#81ACFF") : darken(0.1, "#E84057")};

        margin-bottom: 30px;
    }

    button {
        background: #e6e6e6;
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 5px;

        cursor: pointer;
        
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .button-back {
        position: fixed;
        left: 1vw;
        top: 20vh;
    }

    .button-home {
        position: fixed;
        right: 1vw;
        bottom: 2vh;
    }
    



`
export const SpellIcons = styled.div`
 display: flex;

 gap: 10px;

 img {
     width: 50px;
     height: 50px;

     margin-top: 20px;
 }
`


export const DetailedData = styled.div<MainMatchDetails>`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

margin-left: 50px;

height: 80%;

gap: 5px;

h1 {
    font-size: 40px;
    
}


`

export const Data = styled(DetailedData)`
align-items: center;
`

export const Participants = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    gap: 5px;

    &:first-child {
        margin-top: 50px;
    }
    
    img {
        width: 40px;
        height: 40px;
        margin: 0;
        
    }
`

export const Teams = styled.div`
    display: flex;
    gap: 80px;

    width: 120%;

`

export const Team = styled.div`
    margin-top: 10px;

`
