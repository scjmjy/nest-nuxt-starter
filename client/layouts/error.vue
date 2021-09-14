<template>
<div>
    <p>
        {{ errorJson }}
    </p>
    <NuxtLink to="/">
        Home page
    </NuxtLink>
</div>
</template>

<script lang="ts">
export default {
    // layout: "error",
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
    computed: {
        errorJson(): string {
            return JSON.stringify(this.error);
        },
    },
};
</script>
