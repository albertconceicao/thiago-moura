import styled from 'styled-components';

export const Container = styled.div`
margin: 160px auto;
img {
    margin-left: auto;
    margin-top: -150px;
}
`;

export const TextContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 160px auto;
@media (max-width: 1000px) {
    flex-direction: column;
}
> div, p {
    flex: 1;
}

strong {
    font-weight: 700;
    height: 100%;
}
p {
    font-size: 17px;
}
.line {
    border-bottom: 6px solid #00659E;
    width: 85px;
    margin-top: 10px;
}
.secondaryLine {
    margin-top: -6px;
    margin-bottom: 40px;
    border-bottom: 12px solid rgba(0, 72, 128, 0.17);
    width: 71px;

    &:last-child {
        margin-bottom: 0;
    }
}
.children {
    padding: 20px 40px;
}
li::marker {
    font-size: 34.4px;
    color: #004880;
}
ul > li {
    & + li {
        margin-top: 40px;
    }
}
`;