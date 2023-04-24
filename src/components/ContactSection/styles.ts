import styled from 'styled-components';

export const Container = styled.div`
width: 60%;

h3 {
    margin-top: 110px;
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
p {
    font-size: 17px;
    margin-bottom: 61px;
}

img {
    width: 48px;
    height: 48px;
    margin-bottom: 315px;
}
@media (max-width: 1000px) {
    width: 100%;
}
@media (max-width: 426px) {
    h3 {
        font-size: 22px;
    }
}
`;
