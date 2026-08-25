<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = reactive({ email: '', password: '' });
const showPassword = ref(false); const submitted = ref(false); const loading = ref(false);
const emailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
const submit = () => { submitted.value = true; if (!emailValid() || form.password.length < 6) return; loading.value = true; window.setTimeout(() => { sessionStorage.setItem('loggedIn', 'true'); router.push('/dashboard'); }, 350); };
</script>
<template><main class="login-shell"><section class="intro"><div class="brand-mark">L</div><p class="eyebrow">WELCOME BACK</p><h1>Sign in to your account</h1><p class="subtitle">Manage your day with a clear view of everything that matters.</p></section><form class="login-card" @submit.prevent="submit" novalidate><label for="email">Email address</label><input id="email" v-model="form.email" type="email" placeholder="you@example.com" autocomplete="email"><small v-if="submitted && !emailValid()" class="error">Enter a valid email address.</small><label for="password">Password</label><div class="password-wrap"><input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password" autocomplete="current-password"><button type="button" class="show-button" @click="showPassword = !showPassword">{{ showPassword ? 'Hide' : 'Show' }}</button></div><small v-if="submitted && form.password.length < 6" class="error">Password must be at least 6 characters.</small><button class="primary-button" type="submit" :disabled="loading">{{ loading ? 'Signing in…' : 'Sign in' }}</button><p class="demo-hint">Demo mode · any valid email and 6+ character password</p></form></main></template>
