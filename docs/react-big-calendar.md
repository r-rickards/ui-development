# React Big Calendar

[react-big-calendar](https://github.com/intljusticemission/react-big-calendar)

From **/components/calendar/CodeTime/CodeTimeCalendar.js**

```javascript
<BigCalendar
    key={resizetime}
    events={events}
    startAccessor="start"
    endAccessor="end"
    defaultView="week"
    views={['week']}
    toolbar={false}
    selectable={false}
    components={{
        event: Event
    }}
    defaultDate={date.toDate()}
    min={date
        .clone()
        .hour(minTime)
        .startOf('h')
        .toDate()}
    max={max}
    formats={{
        timeGutterFormat: date => momentTz(date).format('ha'),
        dayFormat: date => momentTz(date).format('ddd M/D')
    }}
    eventPropGetter={event => {
        const {
            isPrediction,
            isHistory,
            isLowHistory,
            isProtected,
            hasConflict
        } = event;
        // console.log("event", event);
        // map classnames from /theme/calendar-events.css
        const className = cn('event', 'default', {
            protected: isProtected,
            prediction: isPrediction && !hasConflict,
            history: isHistory,
            isLowHistory: isLowHistory,
            conflict: hasConflict,
            selected: selected && event.id === selected.id
        });

        return { className };
    }}
    onSelectEvent={this.handleSelectEvent}
/>
```

## Event styles

**/theme/calendar-events.css**

imported into **theme.css**

```
@import "./calendar-events.css";
```

💡 **Tip:** From scratch

```bash
npm i --save react-big-calendar
```

Import

**react-big-calendar/lib/css/react-big-calendar.css**

into

**/theme/theme.css**

```javascript
@import "~react-big-calendar/lib/css/react-big-calendar.css";
```

In **index.js**

```
import moment from "moment-timezone";
import BigCalendar from "react-big-calendar";


BigCalendar.momentLocalizer(moment);

```

<img src="https://www.jqwidgets.com/react/images/react-scheduler.png
" />

```javascript
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
    <div>
        <BigCalendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
);
```

## Roadmap

Evaluate

https://fullcalendar.io/docs/react

https://mdbootstrap.com/plugins/react/full-calendar/

```

```
