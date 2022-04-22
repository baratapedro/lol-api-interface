import styled from "styled-components";

export const Container = styled.div`
    
    background: url('https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8979808f7798ecf5/6216ee875fe07272a8a2447a/2021_Key_art.jpg') fixed;
    min-height: 82vh;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    position: relative;
    


    .button-home {
        background: #e6e6e6;
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 5px;

        cursor: pointer;

        position: fixed;
        right: 1vw;
        bottom: 2vh;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

    }

    .card-text {
        text-decoration: none;
    }


`

export const Background = styled.div`
    background: url('https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8979808f7798ecf5/6216ee875fe07272a8a2447a/2021_Key_art.jpg') fixed;
    min-height: 82vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    `

export const Loading = styled.div`
    background-color: red;
`
