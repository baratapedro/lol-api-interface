import styled from 'styled-components'

export const Container = styled.header`
    height: 150px;
    background-color: #4169E1;

    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-bottom: 1px solid black;

    h1{
        background: transparent;
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    @media only screen and (max-width: 700px) { 
        text-align: center;
        font-size: 12px;
}
`