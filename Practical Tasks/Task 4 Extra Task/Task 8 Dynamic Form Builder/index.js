const form = document.getElementById("form");

const formBuild = () => {
  const promptNumber = Number(prompt("Enter the Number: "));

  for (let i = 0; i < promptNumber; i++) {
    let askPromptInput = prompt(`Enter the type of form elements ${i + 1}`);

    form.innerHTML += "";
    if (askPromptInput?.toLowerCase() === "text") {
      const createInput = document.createElement("input");
      createInput.type = "text";
      createInput.placeholder = "Enter Text Here";
      form.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "number") {
      const createInput = document.createElement("input");
      createInput.type = "number";
      createInput.placeholder = "Enter Number Here";
      form.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "email") {
      const createInput = document.createElement("input");
      createInput.type = "email";
      createInput.placeholder = "Enter Email Here";
      form.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "radio") {
      const valueofData = prompt("Enter the Value of Radio");
      const createInput = document.createElement("input");
      const createLabel = document.createElement("label");
      createInput.type = "radio";
      createLabel.innerHTML = valueofData;
      form.appendChild(createLabel);
      createLabel.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "checkbox") {
      const valueofData = prompt("Enter the Value of checkbox");
      const createInput = document.createElement("input");
      const createLabel = document.createElement("label");
      createInput.type = "checkbox";
      createLabel.innerHTML = valueofData;
      form.appendChild(createLabel);
      createLabel.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "button") {
      const createInput = document.createElement("input");
      createInput.type = "submit";
      createInput.innerHTML = "Submit";
      form.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "password") {
      const createInput = document.createElement("input");
      createInput.type = "password";
      createInput.placeholder = "Enter Password Here";
      form.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "date") {
      const createInput = document.createElement("input");
      createInput.type = "date";
      form.appendChild(createInput);
    } else if (askPromptInput?.toLowerCase() === "file") {
      const createInput = document.createElement("input");
      createInput.type = "file";
      form.appendChild(createInput);
    } else {
      form.innerHTML = " Please Enter the type of form elements";
    }
  }
};

formBuild();
