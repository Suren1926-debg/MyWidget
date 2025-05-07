window.onload = function () {
  const dropdown1 = document.getElementById('dropdown1');
  const yesOptions = document.getElementById('yesOptions');
  const noOption = document.getElementById('noOption');

  dropdown1.addEventListener('change', function () {
    const selected = this.value;
    if (selected === 'Yes') {
      yesOptions.style.display = 'block';
      noOption.style.display = 'none';
    } else if (selected === 'No') {
      yesOptions.style.display = 'none';
      noOption.style.display = 'block';
    } else {
      yesOptions.style.display = 'none';
      noOption.style.display = 'none';
    }
  });
};

function save() {
  const data = {
    textbox1: document.getElementById('textbox1').value,
    textbox2: document.getElementById('textbox2').value,
    textarea1: document.getElementById('textarea1').value,
    dropdown1: document.getElementById('dropdown1').value,
  };

  if (data.dropdown1 === 'Yes') {
    data.dropdown2 = document.getElementById('dropdown2').value;
    data.dropdown3 = document.getElementById('dropdown3').value;
  } else if (data.dropdown1 === 'No') {
    data.textarea2 = document.getElementById('textarea2').value;
  }

  // JSON preview in console
  console.log("Submitting JSON:", JSON.stringify(data, null, 2));

  // POST to backend (replace with actual API endpoint)
  fetch('https://your-backend-url.com/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Data saved successfully!');
    } else {
      alert('Save failed: Server error.');
    }
  })
  .catch(err => {
    console.error('Fetch error:', err);
    alert('Network error while saving.');
  });
}

function cancel() {
  // Optional: Clear fields or reset form
  alert('Cancelled.');
}
