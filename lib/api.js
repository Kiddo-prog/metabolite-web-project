export async function fetchApi(path) {
  const response = await fetch(`http://127.0.0.1:8000/api/${path}`);
  const data = await response.json();
  return data;
}
