
export const getData = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data);

  return data;
}

export const removeData = (key: string) => {
  localStorage.removeItem(key);
}

export const saveData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
}
