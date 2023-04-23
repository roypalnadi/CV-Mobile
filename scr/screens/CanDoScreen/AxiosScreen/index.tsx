import React, {useEffect, useState} from 'react';
import {FlatList, Linking, StyleSheet, View} from 'react-native';
import TopBar from '../../../components/TopBar';
import ContentBox from '../../../components/ContentBox';
import {Searchbar, Text} from 'react-native-paper';
import {getApi} from '../../../utils/axiosApi';

const AxiosScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await getApi('');
      setData(response?.articles);
    };

    getNews();
  }, []);

  const getNews = async () => {
    const response = await getApi(searchQuery);
    setData(response?.articles);
  };

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    getNews();
  };

  return (
    <View style={styles.container}>
      <TopBar
        data={{
          namePage: 'Axios',
        }}
      />
      <ContentBox
        data={{
          title: 'News API',
        }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{borderRadius: 10}}
        />
      </ContentBox>
      <FlatList
        data={data}
        renderItem={({item}: any) => {
          return (
            <View style={styles.mainContent}>
              <View style={styles.boxStyle}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16}}
                  onPress={() => Linking.openURL(item.url)}>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={() => Math.random().toString(12).substring(0)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },
  mainContent: {
    padding: 10,
  },
  boxStyle: {
    padding: 20,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});

export default AxiosScreen;
