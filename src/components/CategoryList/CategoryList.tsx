import React from 'react';
import styled from 'styled-components';
import { CategoryListProps } from './types';

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
`;

const CategoryItem = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: ${props => props.$isActive ? '#6C5CE7' : '#2D2D2D'};
  color: ${props => props.$isActive ? '#FFFFFF' : '#A0A0A0'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.$isActive ? '#6C5CE7' : '#3D3D3D'};
  }
`;

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedIds,
  onSelect
}) => {
  return (
    <Container>
      <List>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            $isActive={selectedIds.includes(category.id)}
            onClick={() => onSelect(category.id)}
          >
            {category.name}
          </CategoryItem>
        ))}
      </List>
    </Container>
  );
};

export default CategoryList;