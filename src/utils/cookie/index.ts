import Cookies from "js-cookie";

export function get(key: string, def: object) {
  const val = Cookies.get(key);
  if (!val) {
    Cookies.set(key, def, { expires: 7 });
    return def;
  }
  return val;
}

export function set(key: string, value: object, time: number) {}

export function getAll(): object {
  return Cookies.get();
}

export function remove(key: string) {
  Cookies.remove(key);
}
