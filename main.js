(()=>{let t=[];const e=(t,e,o,d,n)=>{const i={title:t,dueDate:e,priority:o,isDone:d,description:n,setPriority:t=>{i.priority=t},switchDone:()=>{i.isDone=!i.isDone}};return i},o=()=>{let t=[];return{addTodo:e=>{t.push(e)},getTodos:()=>t}},d=(()=>{const e=document.querySelector("#project_list"),o=document.querySelector("#todos_list");return{renderProject:function(t){o.textContent="",t.getTodos().forEach((t=>{!function(t){const e=n.buildTodo(t);o.appendChild(e)}(t)}))},renderProjectList:function(){e.textContent="",t.forEach((t=>{!function(t){const o=n.buildProject(t);e.appendChild(o)}(t)}))}}})(),n={buildTodo:function(t){const e=document.createElement("div");e.classList.add("todo");const o=document.createElement("p");o.textContent=t.title;const d=document.createElement("p");d.textContent=t.dueDate;const n=document.createElement("p");n.textContent=t.priority;const i=document.createElement("input");i.type="checkbox",i.checked=t.isDone;const c=document.createElement("button");c.textContent="Expand";const r=document.createElement("button");r.textContent="Edit";const s=document.createElement("button");s.textContent="Delete";const p=document.createElement("div");p.classList.add("todo-desc","hidden");const a=document.createElement("p");return a.textContent=t.description,p.appendChild(a),c.addEventListener("click",(()=>{p.classList.toggle("hidden")})),e.appendChild(o),e.appendChild(d),e.appendChild(n),e.appendChild(i),e.appendChild(c),e.appendChild(r),e.appendChild(s),e.appendChild(p),e},buildProject:function(t){const e=document.createElement("div");e.classList.add("proj");const o=document.createElement("button");return o.addEventListener("click",d.renderProject(t)),e.appendChild(o),e}};todo1=e("a","a",1,!1,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo2=e("b","b",2,!0,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo3=e("c","c",3,!1,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),proj1=o(),proj1.addTodo(todo1),proj1.addTodo(todo2),proj1.addTodo(todo3),t.push(proj1),todo4=e("d","d",4,!0,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo5=e("e","e",5,!0,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo6=e("f","f",6,!1,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),proj2=o(),proj2.addTodo(todo4),proj2.addTodo(todo5),proj2.addTodo(todo6),t.push(proj2),d.renderProject(t[0])})();