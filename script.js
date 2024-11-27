let form = document.getElementById("frm");
      let ip = document.getElementById("ip");
      let list = document.getElementById("list");

      form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        if (ip.value.trim() === "") return;

        let listItem = document.createElement("li");

        // Create a span to hold the actual text
        let textSpan = document.createElement("span");
        textSpan.innerText = ip.value;

        let editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.innerHTML = "Edit";

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = "Delete";

        // Edit button functionality
        editBtn.addEventListener("click", () => {
          ip.value = textSpan.innerText; // Only edit the text, not button labels
          list.removeChild(listItem); // Remove the list item for editing
        });

        // Delete button functionality
        deleteBtn.addEventListener("click", () => {
          let conFrmBtn= window.confirm("R U Sure")
            if (conFrmBtn) {
                // p1.innerHTML=""
            
            list.removeChild(listItem);
          }

           // Remove the list item
        });

        // Append elements
        listItem.appendChild(textSpan);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        ip.value = ""; // Clear input field
      });
    