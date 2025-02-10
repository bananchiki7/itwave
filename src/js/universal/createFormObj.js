export function createFormObj(form) {
  let formData;
  if (form instanceof HTMLElement) {
    formData = new FormData(form);
  } else {
    formData = form;
  }

  const data = {};
  for (let key of formData.entries()) {
    data[key[0]] = key[1];
  }

  return data;
}
