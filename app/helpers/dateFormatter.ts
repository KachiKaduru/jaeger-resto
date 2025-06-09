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

// lib/utils/formatDate.ts

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // in seconds

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;

  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}
