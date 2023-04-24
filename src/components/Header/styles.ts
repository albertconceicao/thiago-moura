import styled from 'styled-components';

export const Container = styled.div`
    background: ${({theme}) => theme.background};
    padding: 1.25rem 0 ;
    display: flex;
    justify-content: space-between;
    align-items: center;

   > img {
    width: 5.5rem;
    height: 2.875rem;
   }

@media (max-width: 1000px) {
    > img {
        width: 48px;
        height: 48px;
    }
}
`;
export const Navbar = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.75rem;
    
    
    > a {
        color: ${({theme}) => theme.text};
        transition: 0.5s;

        &:hover {
            border-bottom: 1px solid ${({theme}) => theme.text};
        }
        @media (max-width: 768px) {
            font-size: 0.875rem;
        }
    }
    @media (max-width: 1000px) {
        gap: 2rem;
        justify-content: center;
        padding: 0 0 0 1rem;
        align-items: flex-start;

        
    }
    @media (max-width: 768px) {
        gap: 1.25rem;
        justify-content: flex-start;
        align-items: flex-start;
    }

`;