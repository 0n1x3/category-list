import React, { useState } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import { Category } from './components/CategoryList/types';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | number>('1');

  const categories: Category[] = [
    { id: '1', name: 'Все' },
    { id: '2', name: 'Криптовалюта' },
    { id: '3', name: 'Новости и СМИ' },
    { id: '4', name: 'Экономика' },
    { id: '5', name: 'Технологии' },
    { id: '6', name: 'Спорт' },
  ];

  return (
    <div style={{ background: '#1A1A1A', minHeight: '100vh', padding: '20px' }}>
      <CategoryList
        categories={categories}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
    </div>
  );
};

export default App;