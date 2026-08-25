<script setup>
import { useRouter } from 'vue-router'; import StatCard from '../components/StatCard.vue';
const router = useRouter();
const stats = [{label:'Tasks completed',value:'24',icon:'✓',tone:'success'},{label:'Active projects',value:'08',icon:'▦',tone:'primary'},{label:'Hours focused',value:'18.5',icon:'◷',tone:'warning'},{label:'Team updates',value:'12',icon:'✉',tone:'primary'}];
const actions = [{label:'New task',icon:'＋'},{label:'Projects',icon:'□'},{label:'Activity',icon:'◉'}];
const logout = () => { sessionStorage.removeItem('loggedIn'); router.push('/login'); };
</script>
<template><main class="dashboard"><header><div><p>Good morning,</p><h1>Alex Morgan</h1></div><div class="avatar">AM</div></header><section class="banner"><div><strong>Your progress looks great!</strong><span>Keep your momentum going today.</span></div><b>✦</b></section><div class="section-heading"><h2>Overview</h2><button>This week⌄</button></div><section class="stats"><StatCard v-for="stat in stats" :key="stat.label" :card="stat" /></section><h2>Quick actions</h2><section class="actions"><button v-for="action in actions" :key="action.label"><b>{{ action.icon }}</b><span>{{ action.label }}</span></button></section><button class="logout" @click="logout">Log out</button></main></template>
