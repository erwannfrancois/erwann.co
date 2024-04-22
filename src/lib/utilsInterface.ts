export function copyMailToClipboard() {
  const textToCopy = "mail@erwann.co";
  navigator.clipboard
    .writeText(textToCopy)
    .catch((error) => console.error("Error copying text: ", error));
}
