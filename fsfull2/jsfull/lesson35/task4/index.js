const user = '{"name": "Tom"}';
export function parseUser(user) {
  try {
const data = JSON.parse(user);
return data;
  } catch {
    return null;
  }
}
console.log(parseUser(user));