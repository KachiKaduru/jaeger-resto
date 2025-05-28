const today = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
};

export function todayDate(): string {
  const formatted = today.toLocaleDateString("en-US", options);

  const parts = formatted.split(" ");
  const weekday = parts[0].replace(",", "");
  const month = parts[1];
  const day = parts[2].replace(",", "");
  const year = parts[3];

  const getFormattedDate = (): string => {
    return `${weekday}, ${day} ${month}, ${year}`;
  };

  return `${getFormattedDate()}`;
}
