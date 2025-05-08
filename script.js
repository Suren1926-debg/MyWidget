function executeInitWidget(widget) {
  console.log("Widget initialized with preferences:", widget.getPreference("textPref").value);

  const dropdown1 = document.getElementById("dropdown1");
  const yesOptions = document.getElementById("yesOptions");
  const noOption = document.getElementById("noOption");

  dropdown1.addEventListener("change", function () {
    const selected = this.value;
    if (selected === "Yes") {
      yesOptions.style.display = "block";
      noOption.style.display = "none";
    } else if (selected === "No") {
      yesOptions.style.display = "none";
      noOption.style.display = "block";
    } else {
      yesOptions.style.display = "none";
      noOption.style.display = "none";
    }
  });
}

function save() {
  const data = {
    textbox1: document.getElementById("textbox1").value,
    textbox2: document.getElementById("textbox2").value,
    textarea1: document.getElementById("textarea1").value,
    dropdown1: document.getElementById("dropdown1").value,
  };

  if (data.dropdown1 === "Yes") {
    data.dropdown2 = document.getElementById("dropdown2").value;
    data.dropdown3 = document.getElementById("dropdown3").value;
  } else if (data.dropdown1 === "No") {
    data.textarea2 = document.getElementById("textarea2").value;
  }

  console.log("Prepared JSON:", JSON.stringify(data, null, 2));

  fetch("https://your-backend-url.com/api/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (res.ok) alert("Saved successfully!");
      else alert("Server error while saving.");
    })
    .catch((err) => {
      console.error("Network error:", err);
      alert("Network error.");
    });
}

function cancel() {
  alert("Form reset or cancelled.");
}
