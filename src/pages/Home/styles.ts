import styled from 'styled-components'

export const DefaultBackground = styled.div`
     background: url('https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8979808f7798ecf5/6216ee875fe07272a8a2447a/2021_Key_art.jpg') fixed;
    min-height: calc(100vh - 150px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    @media only screen and (max-width: 700px) { 
        min-height: calc(100vh - 100px);
    height: 100%; 
}
`


export const Container = styled.main`
   
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    

    border: 1px solid black;
    border-radius: 5px;
    padding: 55px 0 55px;

    gap: 10px;

    width: 650px;

    background: #4169E1;


    h1 {
        font-size: 80px;
        background: transparent;
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    @media only screen and (max-width: 700px) { 
        width: 100%; 

        h1 {
            font-size: 70px;
        }
}

`


