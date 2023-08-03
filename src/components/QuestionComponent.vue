<template>
    <section class="question">
        <h3>{{ question.category }}</h3>
        <h4>{{ question.question }}</h4>
        <div class="answers" >
            <AnswerComponent 
                v-for="answer in answers" 
                v-bind:key="answer" 
                v-bind:answer="answer" 
                v-bind:question="question" >
            </AnswerComponent>
        </div>
    </section>
</template>

<script>
import AnswerComponent from "../components/AnswerComponent.vue";

export default {

    name: "QuestionComponent",
    components: { AnswerComponent },
    props: ["question"],
    data() {
        return {
            answers: [],
        }
    },
    methods: {
        
    },
    computed: {

    },
    created() {
        this.answers = [];
        this.answers.push(this.question.correct_answer);
        this.question.incorrect_answers.forEach(element => {
            this.answers.push(element);
        });
        // James Bubb - Fisher-Yates Algorithm
        // https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
        for (let i = this.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.answers[i];
            this.answers[i] = this.answers[j];
            this.answers[j] = temp;
        }
        // return this.answers;
    }
}
</script>
    
<style scoped>
.question {
    width: 70%;
    border: 1px solid blue;
    border-radius: 10px;
    margin: 10px auto;
}
</style>