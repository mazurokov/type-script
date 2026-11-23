const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const message = "TypeScript works in the browser!";
  app.textContent = message;
  console.log(message);
}
