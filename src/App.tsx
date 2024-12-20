import React, { useState } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import StarAnimation from './components/StarAnimation/StarAnimation';
import { Category } from './components/CategoryList/types';
import './App.css';

const App: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>(['1']);

  const categories: Category[] = [
    { id: '1', name: 'Все' },
    { id: '2', name: 'Криптовалюта' },
    { id: '3', name: 'Новости и СМИ' },
    { id: '4', name: 'Экономика' },
    { id: '5', name: 'Технологии' },
    { id: '6', name: 'Спорт' },
  ];

  const handleSelect = (id: string | number) => {
    if (id === '1') {
      setSelectedIds(['1']);
      return;
    }

    setSelectedIds(prev => {
      const filtered = prev.filter(item => item !== '1');
      
      if (prev.includes(id)) {
        return filtered.filter(item => item !== id);
      } else {
        return [...filtered, id];
      }
    });
  };

  return (
    <div style={{ background: '#1A1A1A', minHeight: '100vh', padding: '20px' }}>
      <CategoryList
        categories={categories}
        selectedIds={selectedIds}
        onSelect={handleSelect}
      />
      <div style={{ height: '100%', position: 'relative', marginTop: '20px' }}>
        <StarAnimation />
      </div>
    </div>
  );
};

export default App;