<script setup lang="ts">
import { fetchData } from '@/services/FetchData'

    const blocks = fetchData()
</script>

<template>
    <main class="mainComp">
        <ReportBlock v-for="block in blocks" :key="block.id" :data="block"/>
    </main>
</template>