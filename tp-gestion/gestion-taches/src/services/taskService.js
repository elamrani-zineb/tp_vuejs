export async function getTasks() {
  const response = await fetch("/listtaches.json")
  return await response.json()
}
