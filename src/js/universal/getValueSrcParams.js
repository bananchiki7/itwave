export function getValueSrcParams(params) {
  const url = new URL(window.location.href);
  return url.searchParams.get(params);
}
