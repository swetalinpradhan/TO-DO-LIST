document.querySelector('#push').onclick=function()
        {
            if(document.querySelector('#inputtask .textbox').value.length == 0)
            {
                alert("Please Enter A Task");
            }
            else
            {
                document.querySelector('#tasklist').innerHTML+=`<div class="task"><span class="taskname">
                ${document.querySelector('#inputtask .textbox').value}
                </span><button class="delete">X</button></div>`;
            }
            var entry_task=document.querySelectorAll('.delete');
            for (var i = 0; i < entry_task.length; i++) {
                entry_task[i].onclick=function()
                {
                    this.parentNode.remove();
                }
            }

            var tasks=document.querySelectorAll('.taskname');
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].onclick=function()
                {
                    this.classList.toggle('completed');
                }
            }
            document.querySelector('#inputtask .textbox').value="";

        }