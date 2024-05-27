export const getRandomId = () =>
  new Date().toLocaleDateString("es-ES").replace(/\//g, "") +
  new Date().getHours() +
  new Date().getMinutes() +
  new Date().getSeconds() +
  new Date().getMilliseconds();
