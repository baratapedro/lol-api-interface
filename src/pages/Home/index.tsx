import { SearchInput } from '../../components/SearchInput';
import { Container, DefaultBackground } from './styles';

export function Home() {

    return (
        <DefaultBackground>
            <Container>
                <h1>OP.GG</h1>
                <SearchInput />
            </Container>
        </DefaultBackground>
    );
}