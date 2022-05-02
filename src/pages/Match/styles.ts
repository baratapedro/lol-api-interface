import styled from "styled-components"
import { darken, transparentize } from 'polished'


interface MainMatchDetails {
    win?: boolean
}

export const Container = styled.div<MainMatchDetails>`
    background: whitesmoke;
    width: 900px;
    height: 45vw;
    max-height: 600px;
    min-height: 500px;
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

    @media only screen and (max-width: 900px) { 

    width: 100%;
    font-size: 12px;

    img {
    width: 150px;
    height: 150px;
}

}


@media only screen and (max-width: 500px) { 

    padding: 0;

    img {
        width: 100px;
        height: 100px;
    }
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

 @media only screen and (max-width: 900px) { 

    gap: 5px;
    display: flex;
    justify-content: center;

    img {
        width: 40px;
        height: 40px;
    }
}

@media only screen and (max-width: 500px) { 
    width: 100px;

    img {
        width: 30px;
        height: 30px;
    }
}

`


export const DetailedData = styled.div<MainMatchDetails>`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

margin: 0 auto;

height: 80%;

gap: 5px;

h1 {
    font-size: 40px;
    
}

@media only screen and (max-width: 900px) { 


    h1 {
        font-size: 30px;
    }
}

@media only screen and (max-width: 500px) { 

    align-items: flex-start;
    margin: 0;
}


`

export const Data = styled(DetailedData)`
align-items: center;
display: flex;


@media only screen and (max-width: 500px) { 
    text-align: center;
    width: 50px;
    gap: 0;
    width: 100px;

    strong {
        align-self: center;
    }


}
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

    @media only screen and (max-width: 900px) { 

        gap: 40px;
        width: 50%;
}

@media only screen and (max-width: 500px) { 

    font-size: 10px;
    gap: 5px;


    img {
        width: 30px;
        height: 30px;
    }
}

`

export const Team = styled.div`
    margin-top: 10px;

`
