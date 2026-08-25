import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import DashboardCard from '../components/DashboardCard';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export default function DashboardScreen({ onLogout }) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View><Text style={styles.greeting}>Good morning,</Text><Text style={styles.name}>Alex Morgan</Text></View>
        <View style={styles.avatar}><Text style={styles.avatarText}>AM</Text></View>
      </View>
      <View style={styles.banner}><View><Text style={styles.bannerTitle}>Your progress looks great!</Text><Text style={styles.bannerText}>Keep your momentum going today.</Text></View><Text style={styles.bannerIcon}>✦</Text></View>
      <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Overview</Text><Pressable><Text style={styles.link}>This week⌄</Text></Pressable></View>
      <View style={styles.grid}><DashboardCard label="Tasks completed" value="24" icon="✓" tone="success" /><DashboardCard label="Active projects" value="08" icon="▦" tone="primary" /><DashboardCard label="Hours focused" value="18.5" icon="◷" tone="warning" /><DashboardCard label="Team updates" value="12" icon="✉" tone="primary" /></View>
      <Text style={styles.sectionTitle}>Quick actions</Text>
      <View style={styles.actions}><View style={styles.action}><Text style={styles.actionIcon}>＋</Text><Text style={styles.actionText}>New task</Text></View><View style={styles.action}><Text style={styles.actionIcon}>□</Text><Text style={styles.actionText}>Projects</Text></View><View style={styles.action}><Text style={styles.actionIcon}>◉</Text><Text style={styles.actionText}>Activity</Text></View></View>
      <PrimaryButton label="Log out" onPress={onLogout} variant="secondary" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, paddingBottom: 38 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 },
  greeting: { color: colors.muted, fontSize: 14, marginBottom: 5 },
  name: { color: colors.text, fontSize: 25, fontWeight: '800' },
  avatar: { width: 48, height: 48, borderRadius: 17, backgroundColor: colors.softPrimary, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.primary, fontWeight: '800' },
  banner: { backgroundColor: colors.primary, borderRadius: 22, padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 },
  bannerTitle: { color: '#FFF', fontSize: 16, fontWeight: '800', marginBottom: 7 },
  bannerText: { color: '#DDE0FF', fontSize: 13 },
  bannerIcon: { color: '#FFF', fontSize: 35, marginRight: 5 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { color: colors.text, fontSize: 18, fontWeight: '800', marginBottom: 15 },
  link: { color: colors.primary, fontSize: 13, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 18 },
  actions: { flexDirection: 'row', gap: 12, marginBottom: 25 },
  action: { flex: 1, height: 90, backgroundColor: colors.surface, borderRadius: 18, padding: 14, justifyContent: 'space-between', shadowColor: '#253052', shadowOpacity: 0.05, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
  actionIcon: { color: colors.primary, fontSize: 21, fontWeight: '700' },
  actionText: { color: colors.text, fontSize: 12, fontWeight: '700' },
});
