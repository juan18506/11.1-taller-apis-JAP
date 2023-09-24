const MAX_ID = 386;

export const getRandomId = () => {
  const randomId = Math.round( Math.random() * MAX_ID );

  return randomId;
}