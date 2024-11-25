import Image from "next/image"
import styled from "styled-components"

const ImageBackground = styled(Image)`
    width: 100%;
    object-fit: cover;
    height: var(--banner-height);

    position: absolute;
    z-index: 10;
`

const Container = styled.div`
    padding: 2rem 5rem;

    display: flex;
    align-items: center;

    position: absolute;
    z-index: 15;
    height: var(--banner-height); 
`

const Content = styled.div`
    padding: 3rem 2rem;

    border-radius: 0.3rem;

    background-color: white;
    width: 570px;

    h1{
        font-weight: 600;
        font-size: 2.3rem; 
        color: var(--gray-dark)
    }

    p{
        font-size: 16px;
        color: var(--gray);

        margin:1rem 0;
    }

    button {
        width: 100%;
        background-color: var(--primary);
        padding: 1rem;
        color: white;
        font-weight: 600;

        &:hover{
            padding: 1.2rem;
            font-size: 1.1rem;
        }
    }
`

interface IBannerProps {
    data: {
        title: string;
        description: string;
        buttonLabel: string;
    }
    onSubmit: () => void
}

export const Banner = ({ data, onSubmit }: IBannerProps) => {

    return <>
        <ImageBackground src="/images/banner-image.png"
            alt="Imagem"
            width={500}
            height={200}
            priority />
        <Container>
            <Content>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <button onClick={onSubmit}>{data.buttonLabel}</button>
            </Content>
        </Container>
    </>
}