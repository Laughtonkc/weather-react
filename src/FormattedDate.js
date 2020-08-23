

export default function FormattedDate(props) {
  let days = [
    "Monday",
    "Tueday",
    "Wedneday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();
  return (
      `${day}, ${month} ${date}, ${year}`
      );
}
