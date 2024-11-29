import styled from "styled-components"

const Container = styled.div`
    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .content-item{
        min-width: 200px;
        min-height: 100px;

        margin-top: -50px;

        background: white;
    }

    img{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`
const Item = () => {
    return <Container className="rounded">
        <img src="/images/product-image-example.png" className="rounded" alt="fgf" />
        <div className="content-item rounded shadow-2xl flex justify-center items-center flex-col p-10">
            <h3 className="text-primary text-sm">Limpeza</h3>
            <h1 className="font-bold">Limpeza Doméstica</h1>
            <button className='bg-primary w-full mt-6 rounded details-button p-2 text-background text-sm'>Ver detalhes</button>
        </div>
    </Container>
}

const CategoryItemList = () => {
    return <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((e, i) => <Item key={`category-item-${i}`} />)}
    </div>
}

export default CategoryItemList;