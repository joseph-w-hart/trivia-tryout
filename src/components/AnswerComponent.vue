<template>
    <section class="answers">
        <p>{{ answer }}</p>
    </section>
</template>

<script>
export default {
    name: "AnswerComponent",
    components: {},
    props: ["answer"],
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style scoped>
.answers {
    border: 1px solid red;
    border-radius: 5px;
    cursor: pointer;
    width: 90%;
    margin: 5px auto;
}

.answers:hover {
    background-color: rgba(255, 0, 0, 0.2);
}
</style>