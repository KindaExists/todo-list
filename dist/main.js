(()=>{const t=(t,e,o,d,n)=>{const i={title:t,dueDate:e,priority:o,isDone:d,description:n,setPriority:t=>{i.priority=t},switchDone:()=>{i.isDone=!i.isDone}};return i},e=()=>{let t=[];return{addTodo:e=>{t.push(e)},getTodos:()=>t}},o=(()=>{const t=document.querySelector("#todos_list");return{renderProject:function(e){t.textContent="",e.getTodos().forEach((e=>{!function(e){const o=d.buildTodo(e);t.appendChild(o)}(e)}))}}})(),d={buildTodo:function(t){const e=document.createElement("div");e.classList.add("todo");const o=document.createElement("p");o.textContent=t.title;const d=document.createElement("p");d.textContent=t.dueDate;const n=document.createElement("p");n.textContent=t.priority;const i=document.createElement("p");i.textContent=t.isDone;const c=document.createElement("button");c.textContent="Expand";const r=document.createElement("button");r.textContent="Edit";const s=document.createElement("button");s.textContent="Delete";const p=document.createElement("div");p.classList.add("todo-desc","hidden");const a=document.createElement("p");return a.textContent=t.description,p.appendChild(a),c.addEventListener("click",(()=>{p.classList.toggle("hidden")})),e.appendChild(o),e.appendChild(d),e.appendChild(n),e.appendChild(i),e.appendChild(c),e.appendChild(r),e.appendChild(s),e.appendChild(p),e}};todo1=t("a","a",1,!1,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo2=t("b","b",2,!0,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo3=t("c","c",3,!1,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),proj1=e(),proj1.addTodo(todo1),proj1.addTodo(todo2),proj1.addTodo(todo3),todo4=t("d","d",4,!0,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo5=t("e","e",5,!0,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),todo6=t("f","f",6,!1,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),proj2=e(),proj2.addTodo(todo4),proj2.addTodo(todo5),proj2.addTodo(todo6),o.renderProject(proj1)})();