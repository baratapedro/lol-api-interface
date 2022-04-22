import { Background, Container } from "./styles";
import { SearchInput } from "../SearchInput";


export function MainHome() {

    return(
            <Background>
              <Container>
            <h1>OP.GG</h1>
            <SearchInput />
            
            </Container>
            </Background>
    );
}