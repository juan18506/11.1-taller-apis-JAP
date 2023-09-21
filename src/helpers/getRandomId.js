const MAX_ID = 1281;

export const getRandomId = () => {
  const randomId = Math.round( Math.random() * MAX_ID );

  return randomId;
}