<template>
    <div class="">
        <v-system-bar fixed light class="top-nav" color="#EAE0C7">
            <span class="ps-2">Talk</span>
        </v-system-bar>

        <div class="nav-main">
            <TalkList />
        </div>

        <v-bottom-navigation app fixed grow shift background-color="#EAE0C7" v-model="value">
            <v-btn to="/">
                <span>Home</span>
                <v-icon>mdi-home-outline</v-icon>
            </v-btn>

            <v-btn value="Talk" color="#EAE0C7">
                <span>talk</span>
                <v-icon>mdi-chat-processing-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>

    </div>
</template>

<script>
import TalkList from "@/components/TalkList.vue";

export default {
    name: 'talk-view',
    data: () => ({
        value: 'Talk',
    }),
    computed: {
        getLastMsgId() {
            return this.$store.getters['messages/getLatestMsgIdList'];
        },
    },
    components: {
        TalkList,
    }
}
</script>

<style>
@media only screen and (max-width: 37.5rem/* スマホの時 */) {
    .top-nav {
        top: 32px !important;
    }
}
.nav-main{
    height: 100%;
    position: relative;
    margin-top: 24px;
    margin-bottom: 56px;
    box-sizing: border-box;
}
.btm-nav {
    bottom: 32px !important;
}
</style>
