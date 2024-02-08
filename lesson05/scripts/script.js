const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

document.addEventListener("click", function () {
    if (input.value != "") {
        const li = document.createElement('li');
        const deletable = document.createElement("button");
        li.textContent = input.value;
        deletable.textContent = "X";
        li.appendChild(deletable);
        list.appendChild(li);
        deletable.addEventListener("click", function () {
            li.remove();
            input.focus();
        });
        input.focus();
        input.value = "";
    }
});