import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SwipeCard from './comp/SwipeCard';

const sampleCards = [
  { id: 1, text: 'Doggo 1' },
  { id: 2, text: 'Doggo 2' },
  { id: 3, text: 'Doggo 3' },
];

export default function App() {
  const [cards, setCards] = useState(sampleCards);

  const handleSwipeLeft = (card) => {
    console.log('Disliked', card.text);
    setCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
  };

  const handleSwipeRight = (card) => {
    console.log('Liked', card.text);
    setCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
  };

  return (
    <View style={styles.container}>
      {cards.length > 0 ? (
        cards.map((card) => (
          <SwipeCard
            key={card.id}
            card={card}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        ))
      ) : (
        <Text>No more cards</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c5155',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
