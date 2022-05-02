import styled from "styled-components"

export const Container = styled.div`

    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    width: 700px;


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

    @media only screen and (max-width: 700px) { 
        width: 100%;
}


@media only screen and (max-width: 932px) { 
    margin-top: 50px;

    .button-home {
        top: 165px;
        margin: 0 auto;
        position: absolute;
    }
}

`