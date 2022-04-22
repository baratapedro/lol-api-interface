import styled from 'styled-components'


export const Container = styled.main`
   
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    

    border: 3px solid black;
    border-radius: 10px;
    padding-bottom: 50px;

    gap: 30px;

    width: 650px;

    background: #4169E1;

    margin-top: 100px;
    

    h1 {
        margin-top: 60px;
        font-size: 80px;
        background: transparent;
        color: white;
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    }

`


export const Background = styled.div`
     background: url('https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8979808f7798ecf5/6216ee875fe07272a8a2447a/2021_Key_art.jpg') fixed;
    min-height: 82vh;
    height: 100%;
    display: flex;
    align-items: center;

    flex-direction: column;
`