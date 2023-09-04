const intlFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function getReadableDate(date: Date): string {

  const MS_IN_DAY = 86400000;
  const today = Date.now();
  const diff = Math.floor((today - date.getTime()) / MS_IN_DAY);

  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff <= 30) return `${diff} days ago`;
  if (diff <= 90) return `${Math.floor(diff / 30)} month ago`;

  return intlFormatter.format(date);

}
