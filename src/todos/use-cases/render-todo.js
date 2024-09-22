import { Todo } from "../models/todo.model"
import { createTodoHTML } from "./"

let elementHtml;

/**
 * 
 * @param {String} elementId 
 * @param {Todo[]} todos 
 */
export const renderTodos = ( elementId, todos ) => {

    if(!elementHtml) 
        elementHtml = document.querySelector(elementId)
    if(!elementHtml)
        throw new Error('ElementHtml not found!')

     elementHtml.innerHTML = ''

     
    todos.forEach((todo) => {
        elementHtml.append(createTodoHTML(todo))  
    })
    
}