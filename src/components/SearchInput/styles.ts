import styled from "styled-components";

export const Search = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    input {
        height: 50px;
        width: 300px;
        font-size: 18px;
        border: none;
        padding: 10px;
        background-color: whitesmoke;
        border-radius: 5px;
    }
    button {
        height: 50px;
        width: 200px;
        background-color: whitesmoke;
        border: none;
        border-radius: 5px;
        font-weight: 500;
        cursor: pointer;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media only screen and (max-width: 700px) { 
        input {
            width: 250px;
        }
        button {
            width: 250px;
        }
}
`