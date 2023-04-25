import styled from 'styled-components';

export const Container = styled.div`
border: 1px solid #000;
border-radius: 10px ;
margin: 137px auto !important;
text-align: center;
display: flex;
justify-content: space-around;
align-items: center;
padding: 82px 40px !important;
max-width: 60%;
gap: 40px;
> div > div {
    margin-top: 40px;
}

.tools {
    > div {
        display: flex;
        gap: 60px;
        justify-content: center;
        align-items: center;
        
        img {
            width: 100%;
            height: 39px;
        }
    }
}
@media (max-width: 1000px) {
    flex-direction: column;
}
`;
