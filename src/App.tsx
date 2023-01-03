import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { OptionsOrGroups, StylesConfig } from 'react-select/dist/declarations/src';
import { ProductCard } from './components/ProductCard';
import products from './utils/products.json';
import categories from './utils/categories';
import './App.css';
import { CategorySelect } from './components/CategorySelect';
import { SelectProps } from './types/Select';

function App() {
  const { nodes } = products.data;
  const [productsFiltered, setProductsFiltered] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<SelectProps | undefined>(undefined);

  const options: OptionsOrGroups<any, any> = categories.map((category: any) => ({
    label: category.name,
    value: category._id
  }));

  useEffect(() => {
    setProductsFiltered(nodes.filter((product: any) => product.category._id === selectedCategory?.value));
  }, [selectedCategory]);

  return (
    <div className="main">
      <div className="select">
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          options={options}
        />
      </div>
      {productsFiltered?.length > 0 ? (
        <div className="container">
          {productsFiltered?.map((product: any) => (
            <ProductCard
              name={product.name}
              description={product.shortDescription}
              image={
                {
                  url: product.images[0].asset.url,
                  alt: product.images[0].alt
                }
              }
            />
          ))}
        </div>
      ) : (
        <div className="container">
          {nodes.map((product: any) => (
            <ProductCard
              name={product.name}
              description={product.shortDescription}
              image={
                {
                  url: product.images[0].asset.url,
                  alt: product.images[0].alt
                }
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App;
