<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Marca dos veces para completarlo</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        @dblclick="OnDbClick(todo)"
        :key="todo.id"
        class="todo"
        :class="{'is-complete': todo.completed}"
      >
        {{todo.title}}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    OnDbClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.is-complete {
  background: #35495e;
  color: #fff;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
