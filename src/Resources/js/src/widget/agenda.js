"use strict";function _defineProperty(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function initiateAgenda(e){var a=e;a.fullCalendar({defaultView:a.data("view"),nextDayThreshold:"0"+calendarOverlapThreshold+":00:01",fixedWeekCount:!1,eventLimit:3,lang:calendarLocale,views:viewSpecificOptions,firstDay:calendarFirstDayOfWeek,height:500,scrollTime:moment().format("HH:mm:ss"),eventClick:eventClick,eventRender:function(e,a){if(e.allDay&&a.addClass("fc-event-all-day"),e.end){if(e.multiDay||e.allDay)a.addClass("fc-event-multi-day");else{a.addClass("fc-event-single-day");var t=$("<span />").addClass("fc-color-icon").css("background-color",e.backgroundColor).css("border-color",e.borderColor);$(".fc-content",a).prepend(t)}e.enabled||a.addClass("fc-event-disabled"),a.addClass("fc-color-"+e.textColor)}},events:function(e,t,n,r){$.ajax({url:Craft.getCpUrl("calendar/month"),data:_defineProperty({rangeStart:e.toISOString(),rangeEnd:t.toISOString(),nonEditable:!0,calendars:a.data("calendars")},Craft.csrfTokenName,Craft.csrfTokenValue),type:"post",dataType:"json",success:function(e){r(e)}})},customButtons:{refresh:{text:Craft.t("calendar","Refresh"),click:function(){a.fullCalendar("refetchEvents")}}},header:{right:"prev,today,next",left:"title"}})}var viewSpecificOptions={week:{columnFormat:"ddd D",timeFormat:"LT",slotLabelFormat:"LT"},day:{columnFormat:"",timeFormat:"LT",slotLabelFormat:"LT"}};