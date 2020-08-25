import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import ListProduct from '../../components/ProductList';
import { Container } from './styles';

const ProdutctList = () => {
  const [layoutMode, setLayoutMode] = useState('vertical');

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [page, setPage] = useState(1);
  const [rowsCount, setRowsCount] = useState(0);
  const [rows, setRows] = useState([
    {
      productId: 1,
      name:
        'Camisa Juventus Away 20/21 s/n° Jogador Adidas Masculina - Marinho',
      price: 349.99,
      sizes: ['P', 'M', 'G', 'GG'],
      photos: [
        'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom1.jpg',
        'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom2.jpg',
        'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom3.jpg',
        'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom4.jpg',
      ],
    },
    {
      productId: 2,
      name:
        'Camisa Arsenal Home 20/21 s/nº Torcedor Adidas Masculina - Vermelho e Branco',
      price: 279.99,
      sizes: ['P', 'M', 'G', 'GG'],
      photos: [
        'https://static.netshoes.com.br/produtos/camisa-arsenal-home-2021-sn-torcedor-adidas-masculina/56/NQQ-1006-056/NQQ-1006-056_zoom1.jpg',
        'https://static.netshoes.com.br/produtos/camisa-arsenal-home-2021-sn-torcedor-adidas-masculina/56/NQQ-1006-056/NQQ-1006-056_zoom2.jpg',
        'https://static.netshoes.com.br/produtos/camisa-arsenal-home-2021-sn-torcedor-adidas-masculina/56/NQQ-1006-056/NQQ-1006-056_zoom3.jpg',
        'https://static.netshoes.com.br/produtos/camisa-arsenal-home-2021-sn-torcedor-adidas-masculina/56/NQQ-1006-056/NQQ-1006-056_zoom4.jpg',
      ],
    },
    {
      productId: 3,
      name:
        'Camisa Real Madrid Away 20/21 s/n° Torcedor Adidas Masculina - Pink',
      price: 279.99,
      sizes: ['EP', 'P', 'M', 'G', 'GG', 'EGG'],
      photos: [
        'https://static.netshoes.com.br/produtos/camisa-real-madrid-away-2021-sn-torcedor-adidas-masculina/38/NQQ-3203-338/NQQ-3203-338_zoom1.jpg',
      ],
    },
    {
      productId: 4,
      name: 'Camisa Barcelona Retrô 1889 Masculina - Azul',
      price: 99.99,
      sizes: ['EP', 'P', 'M', 'G', 'GG', 'EGG'],
      photos: [
        'https://static.netshoes.com.br/produtos/camisa-barcelona-retro-1889-masculina/08/AJM-0289-008/AJM-0289-008_zoom1.jpg',
        'https://static.netshoes.com.br/produtos/camisa-barcelona-retro-1889-masculina/08/AJM-0289-008/AJM-0289-008_zoom3.jpg',
      ],
    },
  ]);

  useEffect(() => {
    const bootstrapAsync = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    bootstrapAsync();
  }, []);

  return (
    <Container>
      <>
        <ListProduct mode={layoutMode} data={rows} loading={loading} />
      </>
    </Container>
  );
};

export default ProdutctList;
