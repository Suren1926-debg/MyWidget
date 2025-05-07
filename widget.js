function handleDropdownChange() {
  const selection = document.getElementById("mainDropdown").value;
  const container = document.getElementById("additional-fields");
  container.innerHTML = "";

  if (selection === "Yes") {
    const dropdown1 = document.createElement("select");
    dropdown1.innerHTML = `
      <option value="">-- Dropdown 1 --</option>
      <option value="Option A">Option A</option>
      <option value="Option B">Option B</option>`;
    dropdown1.id = "dropdown1";

    const dropdown2 = document.createElement("select");
    dropdown2.innerHTML = `
      <option value="">-- Dropdown 2 --</option>
      <option value="Option X">Option X</option>
      <option value="Option Y">Option Y</option>`;
    dropdown2.id = "dropdown2";

    const label1 = document.createElement("label");
    label1.textContent = "Dropdown 1";
    const label2 = document.createElement("label");
    label2.textContent = "Dropdown 2";

    container.appendChild(label1);
    container.appendChild(dropdown1);
    container.appendChild(label2);
    container.appendChild(dropdown2);

  } else if (selection === "No") {
    const textarea2 = document.createElement("textarea");
    textarea2.id = "textarea2";
    textarea2.rows = 4;

    const label = document.createElement("label");
    label.textContent = "Text Area 2";

    container.appendChild(label);
    container.appendChild(textarea2);
  }
}

function save() {
  alert("Saved!");
}

function cancel() {
  alert("Cancelled.");
}
