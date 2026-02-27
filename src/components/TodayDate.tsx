export function TodayDate() {
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'full',
  }).format(new Date())

  return <p className="today-date">Today is {formattedDate}.</p>
}
