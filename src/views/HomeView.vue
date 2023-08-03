<template>
  <section class="home">
    <button v-on:click="loadQuestions">Generate Questions</button>
    <div class="question-list">
      <QuestionComponent 
        v-for="question in this.$store.state.questions" 
        v-bind:key="question.correct_answer"
        v-bind:question="question">
      </QuestionComponent>
    </div>
  </section>
</template>

<script>
import QuestionComponent from '@/components/QuestionComponent.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    QuestionComponent
  },
  data() {
    return {
    }
  },
  methods: {
    loadQuestions() {
      this.$store.commit("LOAD_QUESTIONS");
    }
  },
}
</script>
