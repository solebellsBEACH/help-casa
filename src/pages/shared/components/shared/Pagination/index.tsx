import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const PageButton = styled.button<{ isActive?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: ${({ isActive }) => (isActive ? 'var(--primary)' : '#e5e7eb')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#374151')};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? 'var(--primary)' : '#d1d5db')};
  }

  &:disabled {
    background-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <PaginationContainer>
            <PageButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </PageButton>
            {pageNumbers.map((number) => (
                <PageButton
                    key={number}
                    onClick={() => onPageChange(number)}
                    isActive={number === currentPage}
                >
                    {number}
                </PageButton>
            ))}
            <PageButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Próximo
            </PageButton>
        </PaginationContainer>
    );
};

export default Pagination;
