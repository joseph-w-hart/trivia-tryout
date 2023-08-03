<template>
    <section v-bind:class="{
        answers: answered === false,
        correct: result === true,
        incorrect: result === false
    }">
        <p v-on:click="checkAnswer(answer, question.correct_answer)">{{ answer }}</p>
    </section>
</template>

<script>
export default {
    name: "AnswerComponent",
    components: {},
    props: ["answer", "question"],
    data() {
        return {
            answered: false,
            result: undefined,
        }
    },
    methods: {
        checkAnswer(answer, correctAnswer) {
            if (answer === correctAnswer) {
                this.answered = true;
                this.result = true;
                console.log("Correct!");
            } else {
                this.answered = true;
                this.result = false;
                console.log("wrong:(");
            }
        }
    },
}
</script>

<style scoped>
.answers {
    border: 1px solid blue;
    border-radius: 5px;
    cursor: pointer;
    width: 90%;
    margin: 5px auto;
}

.answers:hover {
    background-color: rgba(255, 230, 0, 0.2);
}

.correct {
    border: 1px solid blue;
    border-radius: 5px;
    width: 90%;
    margin: 5px auto;
    background-color: rgba(7, 156, 7, 0.3);
}

.incorrect {
    border: 1px solid blue;
    border-radius: 5px;
    width: 90%;
    margin: 5px auto;
    background-color: rgba(206, 2, 2, 0.3);
}
</style>