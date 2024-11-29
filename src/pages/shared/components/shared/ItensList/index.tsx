import React from 'react';
import styled from 'styled-components';

interface IItensListProps {
    data: any[];
    title?: string;
    fetchFunction?: () => void;
}

const ProductItem = ({ data }: { data: { name: string, description: string, price: number } }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg item-product">
            <img className="w-full h-24 px-1 product-image" src="/images/product-image-example.png" />
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700">$ {data.price}</span>
                <div className="font-bold text-xl mb-2">{data.name}</div>
                <p className="text-gray-700 text-sm">
                    {data.description}
                </p>
                <button className='bg-primary w-full my-2 rounded details-button'>Ver detalhes</button>
            </div>
        </div>
    );
};

const Container = styled.div`
    .product-image {
        object-fit: cover;
    }
    .details-button{
            color: white;
            height:0px;
    }
    .item-product{
        
        &:hover{
            margin: 0.2rem;
            .details-button{
                height: 2.5rem
            }
        }
    }
`

function ItensList({ data, fetchFunction, title }: IItensListProps) {
    return (
        <Container className="mt-6">
            {title && <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <ProductItem data={item} key={`product-item-${index}`} />
                ))}
            </div>
        </Container>
    );
}

export default ItensList;
