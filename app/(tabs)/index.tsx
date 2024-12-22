import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Maria Silva</Text>
      <Image 
        source={{ uri: 'https://images.tapology.com/letterbox_images/159868/default/29416950_940544456108365_8281143893869723648_n.jpg?1542715436' }} 
        style={styles.postImage} 
      />
      <Text style={styles.postDescription}>
      Role de moto, pode não curar tudo, mais tira extresse e melhora o corpo por completo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  postImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',

  },
});
 