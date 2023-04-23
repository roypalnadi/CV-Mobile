import axios from 'axios';
import {Alert} from 'react-native';

export const getApi = async (search: string) => {
  try {
    const response = await axios
      .get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'id',
          q: search,
          apiKey: '53a1350c16cd41f7aa25ba2498847fdc',
        },
      })
      .catch(function (error) {
        console.log(error);
      });

    if (response?.status !== 200) {
      Alert.alert('Response', 'Terjadi Kesalahan Pada Response Api');
    }

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
