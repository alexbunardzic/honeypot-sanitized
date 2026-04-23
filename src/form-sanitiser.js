module.exports = function sanitizeFormData(formData) {
  if (formData.trim() === "") {
    return "I do not accept an empty string";
  }

  if (formData.length > 15) {
    return "I do not accept a string longer than 15 characters";
  }

  return "ok";
};
