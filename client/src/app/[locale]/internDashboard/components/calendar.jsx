import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { useTranslations } from "next-intl";

const CalendarComponent = ({ eventsList }) => {
  const t = useTranslations("calendar");
  const tileClassName = ({ date }) => {
    const event = eventsList.find(
      (x) => new Date(x.date).toDateString() === date.toDateString()
    );
    return event ? "highlight1" : "";
  };

  return (
    <Calendar
      tileClassName={tileClassName}
      className="react-calendar"
      locale={t("locale")}
    />
  );
};

export default CalendarComponent;
