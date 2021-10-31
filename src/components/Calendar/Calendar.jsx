import { Calendar } from "@fullcalendar/core";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGrid from "@fullcalendar/daygrid";
import React, { useEffect } from "react";
import "../../content/fullcalendar.css";
import { useState } from "react";
import config from "../../config.json";
import Contact from "components/Contact/Contact";
import { scollToBottomOfEl } from "modules/functions";

export default function EventCalendar() {
  var cal;
  const [availableTimes, setAvailableTimes] = useState([]);
  const [preFilledMessage, setPrefilledMessge] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const eventClick = (e) => {
    if (availableTimes?.length) return;
    let events = cal.getEvents();
    let day = parseInt(e.target.firstChild.data);
    let month = cal.getDate().getMonth();
    let filteredEvents = events.map((event) => {
      if (
        event.extendedProps.dayMonth &&
        event.extendedProps.dayMonth[0] === day &&
        event.extendedProps.dayMonth[1] === month
      ) {
        return { event };
      }
      return null;
    });
    setAvailableTimes((prevState) =>
      filteredEvents.filter((x) => {
        return x !== undefined && x !== null;
      })
    );
    scollToBottomOfEl("divTimes");
  };
  useEffect(() => {
    let calendarEl = document.getElementById("cal");
    cal = new Calendar(calendarEl, {
      plugins: [googleCalendarPlugin, dayGrid],
      height: "auto",
      googleCalendarApiKey: config.googleCalendar.googleCalendarApiKey, //browser key
      eventSources: [
        {
          googleCalendarId: config.googleCalendar.calendar,
        },
      ],
      windowResize: () => {
        cal.render();
      },
      eventDidMount: (arg) => {
        if (arg.event.start > new Date()) {
          arg.el.parentElement.parentElement.parentElement.firstChild.style.background =
            "rgb(153, 217, 234, 0.55)";
          arg.el.parentElement.parentElement.parentElement.firstChild.firstChild.onclick =
            eventClick;
          arg.event.setExtendedProp("dayMonth", [
            arg.event.start.getDate(),
            arg.event.start.getMonth(),
          ]);
        }
      },
    });
    cal.render();
  }, []);
  return (
    <div>
      <div className="col-sm-7 px-2 offset-sm-1 mb-4 mt-2">
        <span className="fade-in-text">
          Below are days a dev is available to speak with you. Select a day that
          is highligthed in blue, pick a time, and a prefilled message will
          show. Fill in your name/email and anything else you would like to
          include and we will be able to talk to you then!
        </span>
      </div>
      <div className="form-row">
        <div className="col-md-6 offset-md-2 fade-in-text" id="cal"></div>
        {availableTimes?.length ? (
          <div id="divTimes" className="col-md-4 fade-in-text">
            <div
              style={{
                border: "solid",
                borderWidth: "1px",
                borderColor: "grey",
                borderRadius: "5%",
                padding: "7%",
              }}
            >
              <div className="form-row form-group">
                <span className="col-md-12">
                  {availableTimes[0].event?.start?.toLocaleString("en-Us", {
                    dateStyle: "medium",
                  })}
                </span>
              </div>
              {availableTimes
                .sort((a, b) => {
                  return a.event.start - b.event.start;
                })
                .map((e) => {
                  return (
                    e && (
                      <div className="form-row">
                        <div className="col-md-12">
                          <span
                            className="btn-link"
                            onClick={() => {
                              setModalOpen((prevState) =>
                                modalOpen ? false : true
                              );
                              setPrefilledMessge(
                                () =>
                                  `Hello, I am looking to meet with a developer on ${e.event.start.toLocaleString(
                                    "en-Us",
                                    {
                                      dateStyle: "medium",
                                    }
                                  )} at ${e.event.start.toLocaleTimeString(
                                    "en-Us",
                                    {
                                      timeZone: "EST",
                                    }
                                  )} through ${e.event?.end?.toLocaleTimeString(
                                    "en-Us",
                                    {
                                      timeZone: "EST",
                                    }
                                  )}\r\n \r\n --`
                              );
                            }}
                          >
                            {e.event?.start?.toLocaleTimeString("en-Us", {
                              timeZone: "EST",
                            })}
                            -
                            {e.event?.end?.toLocaleTimeString("en-Us", {
                              timeZone: "EST",
                            })}
                          </span>
                        </div>
                      </div>
                    )
                  );
                })}
              <div className="form-row mt-2">
                <span
                  className="btn-link col"
                  onClick={() => {
                    setAvailableTimes([]);
                  }}
                >
                  Close
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {modalOpen ? (
        <div class="modal" id="contactModal" style={{ display: "block" }}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div
                  className="form-row"
                  onClick={() => {
                    setAvailableTimes((prevState) => []);
                    setModalOpen((prevState) => (modalOpen ? false : true));
                  }}
                >
                  <div className="ml-auto">X</div>
                </div>
                <Contact preFilledMessage={preFilledMessage} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
