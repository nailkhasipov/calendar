import React from 'react';

export const NewEvent = () => {
  const date = formatDate(new Date().getTime() );
  return (
    <div className="new-event">
      <div className="new-event-form">
        <form className="event-form">
        <h2 className="event-form__title">New Event</h2>
        <label className="event-form__label">Event name</label>
        <input className="event-form__name" type="text" name="name" placeholder="New event"/>
        <label className="event-form__label">Starts</label>
        <input className="event-form__date" type="date" name="startDate" value={date} />
        <input className="event-form__time" type="time" name="startTime" value="12:00" />
        <label className="event-form__label">Ends</label>
        <input className="event-form__date" type="date" name="endDate" value={date} />
        <input className="event-form__time" type="time" name="endTime" value="12:30" />
        <label className="event-form__label">Comment</label>
        <textarea className="event-form__comment"></textarea>
        <input className="event-form__submit" type="submit" value="Create"/>
        </form>
      </div>

      <div className="fade"></div>
    </div>
  )
};

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}