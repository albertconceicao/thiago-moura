import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
margin: 87px 0 110px 0;
`;

export const ProjectContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 80px 0;
div {
    flex: 1;
    
    h3 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 1.90625rem;
        max-width: 33.625rem;
    }
}
&:nth-child(odd) {
    flex-direction: row-reverse;
}

@media (max-width: 1000px) {
    flex-direction: column;
    &:nth-child(odd) {
        flex-direction: column;
    }
    img {
        flex: 1;
    }
}
`;
