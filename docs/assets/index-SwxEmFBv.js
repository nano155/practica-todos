(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(o){if(o.ep)return;o.ep=!0;const d=c(o);fetch(o.href,d)}})();var n=[];for(var T=0;T<256;++T)n.push((T+256).toString(16).slice(1));function L(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}var w,E=new Uint8Array(16);function C(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(E)}var P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const v={randomUUID:P};function A(e,t,c){if(v.randomUUID&&!t&&!e)return v.randomUUID();e=e||{};var a=e.random||(e.rng||C)();return a[6]=a[6]&15|64,a[8]=a[8]&63|128,L(a)}class h{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createdAt=new Date}}const l={All:"all",Completed:"completed",Pending:"pending"},s={todos:[new h("Piedra del alma"),new h("Piedra del infinito"),new h("Piedra del tiempo"),new h("Piedra del poder"),new h("Piedra de la realidad")],filter:l.All},I=()=>{S(),console.log("InitStore 🥑")},S=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=l.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(s))},k=(e=l.All)=>{switch(e){case l.All:return[...s.todos];case l.Completed:return s.todos.filter(t=>t.done);case l.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Options ${e} is not valid.`)}},x=e=>{if(!e)throw new Error("Description is required.");s.todos.push(new h(e)),f()},O=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},U=e=>{if(!e)throw new Error("todoId is required.");s.todos=s.todos.filter(t=>t.id!==e),f()},q=()=>{s.todos=s.todos.filter(e=>!e.done),f()},D=(e=l.All)=>{if(Object.values(l).includes(e)){s.filter=e,f();return}throw new Error("new filter invalid!")},N=()=>s.filter,i={initStore:I,loadStore:S,getTodos:k,addTodo:x,toogleTodo:O,deleteTodo:U,deleteCompleted:q,setFilter:D,getCurrentFilter:N},F=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>
    
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>
    

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="filtro" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`;let g;const H=(e,t)=>{if(g||(g=document.querySelector(e)),!g)throw new Error("ElementHtml not found!");g.innerHTML="",t.forEach(c=>{g.append(M(c))})},M=e=>{if(!e)throw new Error("A TODO object is required");const t=document.createElement("li");return t.innerHTML=`
                    <div class="view">
                      <input class="toggle" type="checkbox" ${e.done?"checked":""}>
                      <label>${e.description}</label>
                      <button class="destroy"></button>
                    </div>
                
                  `,t.setAttribute("data-id",e.id),e.done&&t.classList.add("completed"),t};let b;const R=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error("ElementHtml not found!");b.innerText=i.getTodos(l.Pending).length},m={TodoList:".todo-list",newTodoInput:"#new-todo-input",deleteTodos:".clear-completed",btnFilter:".filtro",PendingCount:"#pending-count"},V=e=>{const t=()=>{const r=i.getTodos(i.getCurrentFilter());H(m.TodoList,r),c()},c=()=>{R(m.PendingCount)};(()=>{const r=document.createElement("div");r.innerHTML=F,document.querySelector(e).append(r),t()})();const a=document.querySelector(m.newTodoInput),o=document.querySelector(m.TodoList),d=document.querySelector(m.deleteTodos),u=document.querySelectorAll(m.btnFilter);a.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(i.addTodo(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const p=r.target.parentNode.parentNode.getAttribute("data-id");i.toogleTodo(p),t()}),o.addEventListener("click",r=>{const p=r.target.className==="destroy",y=r.target.parentNode.parentNode.getAttribute("data-id");!y||!p||(i.deleteTodo(y),t())}),d.addEventListener("click",()=>{i.deleteCompleted(),t()}),u.forEach(r=>{r.addEventListener("click",p=>{switch(u.forEach(y=>y.classList.remove("selected")),p.target.classList.add("selected"),p.target.innerText){case"Todos":i.setFilter(l.All);break;case"Pendientes":i.setFilter(l.Pending);break;case"Completados":i.setFilter(l.Completed);break}t()})})};i.initStore();V("#app");
