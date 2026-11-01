const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const API_BASE_URL = rawBaseUrl.trim().replace(/\/+$/, "");

export function apiUrl(path = "") {
  if (!path) return API_BASE_URL;
  const strPath = String(path).trim();
  if (/^https?:\/\//i.test(strPath)) {
    return strPath;
  }
  const normalizedPath = strPath.replace(/^\/+/, "");
  return normalizedPath ? `${API_BASE_URL}/${normalizedPath}` : API_BASE_URL;
}
