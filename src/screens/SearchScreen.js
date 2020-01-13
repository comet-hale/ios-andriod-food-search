import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Searchbar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <View style={{ marginLeft: 15, flex: 1 }}>
      <Searchbar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {/* <Text>Search Screen</Text> */}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big spender"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
