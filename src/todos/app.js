import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderPending, renderTodos } from "./use-cases";
const ElementIDs = {
  TodoList: ".todo-list",
  newTodoInput: "#new-todo-input",
  deleteTodos:  '.clear-completed',
  btnFilter : '.filtro',
  PendingCount : '#pending-count'
};

/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    updatePendingCount()
  };

  const updatePendingCount = () =>{
    renderPending(ElementIDs.PendingCount)
  }

  // Cuando la funcion App() se llama
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  const newDescriptionInput = document.querySelector(ElementIDs.newTodoInput);
  const todoListUl = document.querySelector(ElementIDs.TodoList);
  const deleteCompleted = document.querySelector(ElementIDs.deleteTodos);
  const filtersSelected = document.querySelectorAll(ElementIDs.btnFilter)

  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;
    todoStore.addTodo(event.target.value)
    displayTodos()
    event.target.value = ''
  });

  todoListUl.addEventListener('click', (event)=>{
    const element = (event.target.parentNode.parentNode).getAttribute('data-id')
    todoStore.toogleTodo(element)
    displayTodos()
  })

  todoListUl.addEventListener('click', (event)=>{
    const isDestroyElement = event.target.className === 'destroy'
    const element = (event.target.parentNode.parentNode).getAttribute('data-id')
    if(!element || !isDestroyElement) return
        todoStore.deleteTodo(element)   
    displayTodos()
    
  })

  deleteCompleted.addEventListener('click', ()=>{
    todoStore.deleteCompleted() 
    displayTodos()
  })

  
  
  filtersSelected.forEach(filter =>{
      filter.addEventListener('click', (element) =>{
        filtersSelected.forEach(btn => btn.classList.remove('selected'))
        element.target.classList.add('selected')
        switch (element.target.innerText) {
            case 'Todos':
                todoStore.setFilter(Filters.All)
                break
            case 'Pendientes':
                todoStore.setFilter(Filters.Pending)
                break
            case 'Completados':
                todoStore.setFilter(Filters.Completed)
                break
        }
        displayTodos()
    })
    
  })


};
