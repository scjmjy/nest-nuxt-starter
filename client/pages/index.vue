<template>
    <div>
        <h1>index</h1>
        <ul class="user-list">
            <li v-for="(user, i) in users" :key="i">
                <span>{{ user.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
// import { Component, Vue } from "nuxt-property-decorator";
import Vue from "vue";
import { User } from "@common/UserInterface";

export default Vue.extend({
    data() {
        return {
            users: [] as User[],
        };
    },
    async fetch(): Promise<void> {
        this.users = (await this.$axios.get("users"))?.data ?? [];
    },
    head: {
        title: "Index",
    },
});
</script>

<style lang="scss">
.user-list {
    list-style: none;
    padding-left: 0;
}
</style>
