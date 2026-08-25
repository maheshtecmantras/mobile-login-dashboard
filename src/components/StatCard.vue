<script setup>
defineProps({ card: { type: Object, required: true } });
</script>
<template><article class="stat-card"><div class="stat-icon" :class="card.tone">{{ card.icon }}</div><strong>{{ card.value }}</strong><span>{{ card.label }}</span></article></template>
