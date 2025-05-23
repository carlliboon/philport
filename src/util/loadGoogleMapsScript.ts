export const loadGoogleMapsScript = (apiKey: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window === "undefined" || (window as any).google) return;

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  script.async = true;
  document.head.appendChild(script);
};
