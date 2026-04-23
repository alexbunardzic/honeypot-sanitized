module.exports = function sanitizeFormData(formData) {
  if (formData.trim() === "") {
    return "I do not accept an empty string";
  }

  if (formData.length > 15) {
    return "I do not accept a string longer than 15 characters";
  }

  if (formData.includes("http://")) {
    return "I do not accept a URL";
  }

  if (formData.includes("<script>")) {
    return "I do not accept scripts in the form data";
  }

  if (formData.includes("<img src=")) {
    return "I do not accept image tags";
  }

  return "ok";
};
