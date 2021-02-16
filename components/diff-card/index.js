import React from "react";
import StoreContext from "../../store";
import Card from "../card";
import {
  differenceInCalendarDays,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { tr } from "date-fns/locale";

export default function DiffCard() {
  const { applicationDate } = React.useContext(StoreContext);
  const [days, setDays] = React.useState("");
  const [duration, setDuration] = React.useState("");

  React.useEffect(() => {
    if (applicationDate) {
      setDiffInCalendarDays(applicationDate);
      setDurationInWords(applicationDate);
    }
  }, []);

  const setDiffInCalendarDays = (applicationDate) => {
    const _diffInCalendarDays = differenceInCalendarDays(
      new Date(),
      new Date(applicationDate)
    );
    setDays(_diffInCalendarDays);
    localStorage.setItem("differenceInCalendarDays", _diffInCalendarDays);
  };

  const setDurationInWords = (applicationDate) => {
    const durationInWords = formatDuration(
      intervalToDuration({
        start: new Date(applicationDate),
        end: new Date(),
      }),
      { locale: tr }
    );
    setDuration(durationInWords);
    localStorage.setItem("durationInWords", durationInWords);
  };

  return (
    <Card>
      <h3>
        {days} Gün!{" "}
        {days < 15 ? (
          <span>😇</span>
        ) : days < 30 ? (
          <span>😎</span>
        ) : days < 60 ? (
          <span>🤔</span>
        ) : days < 90 ? (
          <span>😕</span>
        ) : days < 120 ? (
          <span>😔</span>
        ) : days < 150 ? (
          <span>😤</span>
        ) : days < 180 ? (
          <span>😡</span>
        ) : (
          <span>🤬</span>
        )}
      </h3>
      <p>
        Başvurunuzu yapalı <mark>{duration}</mark> olmuş.
      </p>
    </Card>
  );
}
