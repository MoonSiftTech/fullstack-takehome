export const getDomain = (url: string) => {
  const urlObj = new URL(url);
  const host = urlObj.hostname;

  if (host.startsWith("www.")) {
    return host.slice(4);
  }
  return host;
};
