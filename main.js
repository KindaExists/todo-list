(()=>{let e,t=[];const o=(()=>{const e=document.querySelector("#project_list"),o=document.querySelector("#todos_list");return{renderProjects:function(){e.textContent="",t.forEach((t=>{!function(t){const o=n.buildProject(t);e.appendChild(o)}(t)}))},renderTodos:function(e){o.textContent="",e.getTodos().forEach((e=>{!function(e){const t=n.buildTodo(e);o.appendChild(t)}(e)}))}}})(),n={buildTodo:function(e){const t=document.createElement("div");t.classList.add("todo");const o=document.createElement("input");o.classList.add("checkbox"),o.type="checkbox",o.checked=e.isDone;const n=document.createElement("p");n.classList.add("todo-title"),n.textContent=e.title;const d=document.createElement("p");d.classList.add("todo-date"),d.textContent=e.dueDate;const s=document.createElement("p");s.classList.add("todo-priority"),s.textContent=e.priority;const c=document.createElement("button");c.textContent="Expand";const r=document.createElement("button");r.textContent="Delete";const i=document.createElement("div");i.classList.add("todo-desc","hidden");const a=document.createElement("p");return a.textContent=e.description,i.appendChild(a),c.addEventListener("click",(()=>{i.classList.toggle("hidden")})),t.appendChild(o),t.appendChild(n),t.appendChild(d),t.appendChild(s),t.appendChild(c),t.appendChild(r),t.appendChild(i),t},buildProject:function(t){const n=document.createElement("div");n.classList.add("proj");const d=document.createElement("button");return d.addEventListener("click",(()=>{e=t,o.renderTodos(t)})),d.textContent=t.title,d.classList.add("proj-btn"),n.appendChild(d),n}},d=document.querySelector("#todo_form_container"),s=document.forms.todoForm,c=document.querySelector("#new_todo");c.addEventListener("click",(()=>{d.classList.add("form-open"),c.classList.add("form-open")})),s.addEventListener("reset",(()=>{d.classList.remove("form-open"),c.classList.remove("form-open")})),s.addEventListener("keydown",(e=>{"Escape"===e.key&&(d.classList.remove("form-open"),c.classList.remove("form-open"),s.reset())})),s.addEventListener("submit",(()=>{d.classList.remove("form-open"),c.classList.remove("form-open"),s.reset()}));const r=document.querySelector("#proj_form_container"),i=document.forms.projForm,a=document.querySelector("#new_project");a.addEventListener("click",(()=>{r.classList.add("form-open"),a.classList.add("form-open")})),i.addEventListener("keydown",(e=>{"Escape"===e.key&&(r.classList.remove("form-open"),a.classList.remove("form-open"),i.reset())})),i.addEventListener("submit",(()=>{r.classList.remove("form-open"),c.classList.remove("form-open"),i.reset()}))})();