import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme/colors';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password) return setError('Please enter your email and password.');
    if (!emailPattern.test(email.trim())) return setError('Please enter a valid email address.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    setError('');
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 500);
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.brandMark}><Text style={styles.brandMarkText}>L</Text></View>
        <Text style={styles.eyebrow}>WELCOME BACK</Text>
        <Text style={styles.title}>Sign in to your account</Text>
        <Text style={styles.subtitle}>Manage your day with a clear view of everything that matters.</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email address</Text>
          <TextInput value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} keyboardType="email-address" placeholder="you@example.com" placeholderTextColor={colors.muted} style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrap}>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry={!showPassword} placeholder="Enter your password" placeholderTextColor={colors.muted} style={styles.passwordInput} />
            <Pressable onPress={() => setShowPassword((visible) => !visible)}><Text style={styles.showText}>{showPassword ? 'Hide' : 'Show'}</Text></Pressable>
          </View>
          {!!error && <Text style={styles.error}>{error}</Text>}
          <PrimaryButton label="Sign in" onPress={handleLogin} loading={loading} />
          <Text style={styles.demoHint}>Demo mode · any valid email and 6+ character password</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flexGrow: 1, justifyContent: 'center', padding: 28 },
  brandMark: { width: 58, height: 58, borderRadius: 18, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 36 },
  brandMarkText: { color: '#FFF', fontSize: 30, fontWeight: '800' },
  eyebrow: { color: colors.primary, fontSize: 12, fontWeight: '800', letterSpacing: 1.5, marginBottom: 10 },
  title: { color: colors.text, fontSize: 32, lineHeight: 39, fontWeight: '800', marginBottom: 12 },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 23, marginBottom: 36 },
  form: { backgroundColor: colors.surface, borderRadius: 24, padding: 20, shadowColor: '#253052', shadowOpacity: 0.07, shadowRadius: 20, shadowOffset: { width: 0, height: 8 }, elevation: 3 },
  label: { color: colors.text, fontSize: 13, fontWeight: '700', marginBottom: 8, marginTop: 12 },
  input: { height: 52, borderWidth: 1, borderColor: colors.border, borderRadius: 14, paddingHorizontal: 15, color: colors.text, fontSize: 15 },
  passwordWrap: { height: 52, borderWidth: 1, borderColor: colors.border, borderRadius: 14, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' },
  passwordInput: { flex: 1, color: colors.text, fontSize: 15 },
  showText: { color: colors.primary, fontWeight: '700', padding: 15 },
  error: { color: '#D94B5B', fontSize: 13, marginTop: 12 },
  demoHint: { color: colors.muted, fontSize: 11, textAlign: 'center', marginTop: 17 },
});
