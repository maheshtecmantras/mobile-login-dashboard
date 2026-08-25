import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function DashboardCard({ label, value, icon, tone = 'primary' }) {
  const toneStyles = {
    primary: { backgroundColor: colors.softPrimary, iconColor: colors.primary },
    success: { backgroundColor: colors.softSuccess, iconColor: colors.success },
    warning: { backgroundColor: colors.softWarning, iconColor: colors.warning },
  };
  const selected = toneStyles[tone] || toneStyles.primary;
  return (
    <View style={styles.card}>
      <View style={[styles.icon, { backgroundColor: selected.backgroundColor }]}>
        <Text style={[styles.iconText, { color: selected.iconColor }]}>{icon}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, minHeight: 142, backgroundColor: colors.surface, borderRadius: 20, padding: 16, marginBottom: 12, shadowColor: '#253052', shadowOpacity: 0.06, shadowRadius: 14, shadowOffset: { width: 0, height: 5 }, elevation: 2 },
  icon: { width: 38, height: 38, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  iconText: { fontSize: 18, fontWeight: '800' },
  value: { color: colors.text, fontSize: 24, fontWeight: '800', marginBottom: 4 },
  label: { color: colors.muted, fontSize: 13 },
});
