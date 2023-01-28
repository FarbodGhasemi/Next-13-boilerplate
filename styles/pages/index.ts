import styled from 'styled-components'

export const IndexPageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.orange};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .ReadyBoxWrapper {
        text-align: center;
        font-size: 60px;
        font-weight: 600;
    }
`