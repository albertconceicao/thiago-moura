import styled from 'styled-components';

export const Container = styled.div`
background: #EEF5FF;
> div {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    gap: 14px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
}

`;

export const TextContainer = styled.div`
h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 60px;
}
p {
    font-size: 17px;
    font-weight: 400px;
}
`;