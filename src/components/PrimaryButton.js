import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

export default function PrimaryButton({ label, onPress, loading = false, variant = 'primary' }) {
  const isSecondary = variant === 'secondary';
  return (
    <Pressable
      accessibilityRole="button"
      disabled={loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isSecondary && styles.secondary,
        pressed && styles.pressed,
      ]}
    >
      {loading ? <ActivityIndicator color={isSecondary ? colors.primary : '#FFF'} /> : (
        <Text style={[styles.label, isSecondary && styles.secondaryLabel]}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { height: 54, borderRadius: 16, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginTop: 8 },
  secondary: { backgroundColor: colors.softPrimary },
  pressed: { opacity: 0.82 },
  label: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  secondaryLabel: { color: colors.primary },
});
