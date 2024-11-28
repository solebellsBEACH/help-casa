import React from 'react';
import styled from 'styled-components';

interface IItensListProps {
    data: any[];
    title?: string;
    fetchFunction?: () => void;
}

const ProductItem = ({ data }: { data: { name: string, description: string, price: number } }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-24 px-1 product-image" src="/images/product-image-example.png" />
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700">$ {data.price}</span>
                <div className="font-bold text-xl mb-2">{data.name}</div>
                <p className="text-gray-700 text-base">
                    {data.description}
                </p>
            </div>
        </div>
    );
};

const Container = styled.div`
    .product-image {
        object-fit: cover;
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
