<template>
    <section class="question">
        <h3>{{ item.category }}</h3>
        <h4>{{ item.question }}</h4>
        <p>{{ item.incorrect_answers[0] }}</p>
        <p>{{ item.incorrect_answers[1] }}</p>
        <p>{{ item.incorrect_answers[2] }}</p>
        <p>{{ item.correct_answer }}</p>
    </section>
</template>

<script>
export default {
    name: "QuestionComponent",
    props: ["item"],
}
</script>
    
<style scoped>
.question {
    width: 50%;
    border: 1px solid blue;
    margin: auto;
}
</style>