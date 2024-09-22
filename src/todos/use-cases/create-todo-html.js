import { Todo } from "../models/todo.model";

/**
 *
 * @param {Todo} todo
 */
export const createTodoHTML = (todo) => {
  if (!todo) throw new Error("A TODO object is required");
  const li = document.createElement("li");
  li.innerHTML = `
                    <div class="view">
                      <input class="toggle" type="checkbox" ${
                        todo.done ? "checked" : ""
                      }>
                      <label>${todo.description}</label>
                      <button class="destroy"></button>
                    </div>
                
                  `;

  li.setAttribute("data-id", todo.id);
  if(todo.done){
      li.classList.add('completed')
  }
  return li;
};
