import styled from 'styled-components';

export const Container = styled.div`
background: #004880;
height: 439px;
padding: 85px 100px;
`;
export const FooterContent = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;


> img {
    align-self: flex-start;
    width: 5.5rem;
    height: 2.875rem;
    margin-bottom: 17px;
    color: #fff;
}
> .line {
    width: 100%;
    border: 1px solid rgba(243, 243, 243, 0.2);
    margin-bottom: 38px;
}
> h3 {
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 45px;
}
`;