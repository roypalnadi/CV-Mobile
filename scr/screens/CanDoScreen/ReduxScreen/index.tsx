import React from 'react';
import {ScrollView} from 'react-native';
import Counter from '../../../components/Counter';
import TopBar from '../../../components/TopBar';
import ContentBox from '../../../components/ContentBox';

const ReduxScreen = () => {
  return (
    <ScrollView>
      <TopBar
        data={{
          namePage: 'Redux',
        }}
      />
      <ContentBox
        data={{
          title: 'Redux Counter',
        }}>
        <Counter />
      </ContentBox>
    </ScrollView>
  );
};

export default ReduxScreen;
