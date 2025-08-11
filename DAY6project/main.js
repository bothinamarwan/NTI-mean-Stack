let items = JSON.parse(localStorage.getItem("items")) || [];


function Create(item) {
    items.push(item);
    saveAndRender();
    console.log('added:', item);
}

function read() {
    console.log("item list:");
    items.forEach((item, index) => {
        console.log(`${index}:, item`);
    });
}


function update(index, newItem) {
    if (index >= 0 && index < items.length) {
        console.log(update, items[index], "to", newItem);
        items[index] = newItem;
        saveAndRender();
    } else {
        console.log("invalid index");
    }
}

function Delete(index) {
    if (index >= 0 && index < items.length) {
        console.log('delete:', items[index]);
        items.splice(index, 1);
        saveAndRender();
    } else {
        console.log("invalid index");
    }
}


function saveAndRender() {
    localStorage.setItem("items", JSON.stringify(items));
    renderTable();
}

function renderTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; 

    items.forEach((item, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.description}</td>
            <td>
                <button class="update-btn" data-index="${index}">Update</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.onclick = () => {
            const idx = +btn.dataset.index;
            Delete(idx);
        };
    });

    document.querySelectorAll(".update-btn").forEach(btn => {
        btn.onclick = () => {
            const idx = +btn.dataset.index;
            startUpdate(idx);
        };
    });
}


let updateIndex = null;
function startUpdate(index) {
    const item = items[index];
    document.getElementById("username").value = item.name;
    document.getElementById("cat").value = item.category;
    document.getElementById("desc").value = item.description;
    updateIndex = index;
    document.getElementById("subbtn").textContent = "Update";
}

document.getElementById("subbtn").addEventListener("click", () => {
    const name = document.getElementById("username").value.trim();
    const category = document.getElementById("cat").value.trim();
    const description = document.getElementById("desc").value.trim();

    if (!name || !category || !description) {
        alert("Please fill all fields");
        return;
    }

    const newItem = { name, category, description };

    if (updateIndex === null) {
        Create(newItem);
    } else {
        update(updateIndex, newItem);
        updateIndex = null;
        document.getElementById("subbtn").textContent = "Submit";
    }
    
    document.getElementById("username").value = "";
    document.getElementById("cat").value = "";
    document.getElementById("desc").value = "";
});


renderTable();


