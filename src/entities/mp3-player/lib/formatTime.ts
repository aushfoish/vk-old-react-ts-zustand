export const formatTime = (seconds: number) => {
    if (typeof seconds !== 'number' || Number.isNaN(seconds) || !Number.isFinite(seconds)) {
        return "0:00"
    } 
  let zero = "";
  const minutes = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);

  if (sec < 10) {
    zero = "0";
  } else if (sec > 9) {
    zero = "";
  }
  const time = `${minutes}:${zero}${sec}`;
  return time
};
