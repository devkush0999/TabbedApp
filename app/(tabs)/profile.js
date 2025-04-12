import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.avatar}
          defaultSource={require('../../assets/images/adaptive-icon.png')}
        />
        <Text style={styles.name}>Devesh kumar singh</Text>
        <Text style={styles.title}>Software Developer { " "}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>256</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12.4k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>348</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.bioText}>
          Passionate software developer with expertise in mobile application development.
          Love creating intuitive and responsive user interfaces with React Native.
          When I'm not coding, I enjoy  runing.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}>devesh7664@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text style={styles.contactValue}>(+91) 8299206978</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Location: </Text>
          <Text style={styles.contactValue}>varansi, uttar pradesh</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f5f7fa',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 15,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  title: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#3498db',
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  contactLabel: {
    width: 90,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
  },
  contactValue: {
    fontSize: 16,
    color: '#34495e',
    flex: 1,
  },
});