import Image from "next/image"
import styled from "styled-components"

const ImageBackground = styled(Image)`
    width: 100%;
    object-fit: cover;
    height: var(--banner-height);
`

const Container = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    z-index: 15;
    height: var(--banner-height); 


    @media (max-width: 426px) {
        width: 100%;
        justify-content: center;
    }

`

const Content = styled.div`
    padding: 3rem 2rem;
    border-radius: 0.3rem;

    margin-left: 3rem;


    background-color: white;
    width: 540px;

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

    @media (max-width: 768px) {
        width: 60vw;
        
        h1{
            font-size: 1.8rem;  
        }
    }

    @media (max-width: 630px) {
        width: 70vw;

        padding: 2rem 1rem;
        
        h1{
            font-size: 1.5rem; 
        }
        p{
            font-size: 14px;
            color: var(--gray);

            margin:1rem 0;
        }
    }


    @media (max-width: 426px) {
        margin-left: 0px;
        width: 70vw;
        button{
            margin-top: 0.5rem;
            padding: 0.5rem;
        }

        p{
           display: none;
        }
    }



`

interface IBannerProps {
    data: {
        title: string;
        description: string;
        buttonLabel: string;
        imageId: number
    }
    onSubmit: () => void
}

export const Banner = ({ data, onSubmit }: IBannerProps) => {

    return <>
        <Container>
            <Content>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <button onClick={onSubmit}>{data.buttonLabel}</button>
            </Content>
        </Container>
        <ImageBackground src={`/images/banner/banner-image-${data.imageId}.png`}
            alt="Imagem"
            width={500}
            height={200}
            priority />
    </>
}