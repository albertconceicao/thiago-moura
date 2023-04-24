import styled from 'styled-components';

export const Container = styled.div`
margin-top: 54px;
display: flex;
justify-content: space-around;
align-items: center;
gap: 30px;
img {
    flex: 1;
}
margin-bottom: 374px;

@media (max-width: 1000px) {
    flex-direction: column-reverse;

    img {
        width: 80%;
        height: 80%;
    }
}
`;
export const CurriculumText = styled.div`
margin-top: 119px;
h3 {
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
h3:first-child {
    border-left: 6px solid #003B69;
    padding-left: 16px;
}
p {
    font-size: 17px;
}
h3 + p {
    margin-bottom: 97px;
}
`;