!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=10)}({0:function(e,t,a){"use strict";a.r(t),a.d(t,"renderEvent",(function(){return o})),a.d(t,"today",(function(){return l})),a.d(t,"renderDay",(function(){return c})),a.d(t,"renderView",(function(){return s})),a.d(t,"eventRepositioned",(function(){return u})),a.d(t,"eventDateChange",(function(){return f})),a.d(t,"eventDurationChange",(function(){return p})),a.d(t,"eventClick",(function(){return m})),a.d(t,"getDayViewLink",(function(){return v})),a.d(t,"getEvents",(function(){return h})),a.d(t,"closeAllQTips",(function(){return C})),a.d(t,"enableQTips",(function(){return g})),a.d(t,"getSpinner",(function(){return y}));var n=a(1);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i=$("#solspace-calendar"),d=null,o=function(e,t){if(e.allDay&&t.addClass("fc-event-all-day"),e.end){if(e.multiDay||e.allDay)t.addClass("fc-event-multi-day");else{t.addClass("fc-event-single-day");var a=$("<span />").addClass("fc-color-icon").css("background-color",e.backgroundColor).css("border-color",e.borderColor);$(".fc-content",t).prepend(a)}e.enabled||t.addClass("fc-event-disabled"),t.addClass("fc-color-"+e.textColor),Object(n.buildEventPopup)(e,t)}},l=new moment,c=function(e,t){var a=t.parents(".fc-bg:first").siblings(".fc-content-skeleton").find("thead > tr > td:eq("+t.index()+")"),n=v(e),r=$("<a />").attr("href",n).html(a.html());a.html(r)},s=function(e,t){var a=t.parents("#solspace-calendar"),n=new moment(a.data("current-day"));"agendaWeek"===e.name&&$(".fc-day-header.fc-widget-header",t).each((function(){var e=$(this).html(),t=e.split(" ");e=t[0]+" <span>"+t[1]+"</span>";var a=new moment($(this).data("date")),r=v(a),i=$("<a />").attr("href",r).html(e);n.format("YYYYMMDD")===a.format("YYYYMMDD")&&i.addClass("fc-title-today"),$(this).html(i)}));$(".fc-localeButton-button",i).addClass("menubtn btn"),"agendaDay"===e.name&&$("thead.fc-head",t).remove()},u=function(e,t,a,n){$.ajax({url:Craft.getCpUrl("calendar/events/api/modify-"+e),type:"post",dataType:"json",data:r({eventId:t.id,siteId:t.site.id,isAllDay:t.allDay,startDate:t.start.toISOString(),endDate:t.end?t.end.toISOString():null,deltaSeconds:a.as("seconds")},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(e){e.error?n():t.repeats&&$calendar.fullCalendar("refetchEvents")},error:function(){n()}})},f=function(e,t,a){u("date",e,t,a)},p=function(e,t,a){u("duration",e,t,a)},m=function(e){window.location.href=Craft.getCpUrl("calendar/events/"+e.id+"/"+e.site.handle)},v=function(e){if(e.isValid()){var t=e.format("YYYY"),a=e.format("MM"),n=e.format("DD");return Craft.getCpUrl("calendar/view/day/"+t+"/"+a+"/"+n)}return""},h=function(e,t,a,n){y().fadeIn("fast");var i=$("ul.calendar-list"),d="*";i.length&&(d=$("input:checked",i).map((function(){return $(this).val()})).get().join());var o=$("#solspace-calendar").data().currentSiteId;$.ajax({url:Craft.getCpUrl("calendar/month"),data:r({rangeStart:e.toISOString(),rangeEnd:t.toISOString(),calendars:d,siteId:o},Craft.csrfTokenName,Craft.csrfTokenValue),type:"post",dataType:"json",success:function(e){for(var t=0;t<e.length;t++){var a=e[t];a.allDay&&(e[t].end=moment(a.end).add(2,"s").utc().format())}n(e),y().fadeOut("fast")}})},C=function(){window.qTipsEnabled=!1,$("div.qtip:visible").qtip("hide")},g=function(){window.qTipsEnabled=!0},y=function(){return d||(i.find(".fc-right").prepend('<div id="solspace-calendar-spinner" class="spinner" style="display: none;"></div>'),d=$("#solspace-calendar-spinner")),d}},1:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t),a.d(t,"showEventCreator",(function(){return i})),a.d(t,"buildEventPopup",(function(){return d})),a.d(t,"createDateAsUTC",(function(){return o}));var r=!1,i=function(e,t){r||(r=!0,$("<div />").qtip({content:{text:$("#event-creator"),title:Craft.t("calendar","New Event")},position:{my:"center",at:"center",target:$(window)},show:{ready:!0,modal:{on:!0,blur:!0}},hide:!1,style:{classes:"qtip-bootstrap dialogue",width:500},events:{render:function(a,r){var i=r.elements.content;$("ul.errors",i).empty();var d=e.utc().format("HHmmss"),l=t.utc().format("HHmmss"),c=!1;d===l&&"000000"===l&&(t.subtract(1,"seconds"),c=!0);var s=o(e.toDate()),u=o(t.toDate()),f=$("#event-creator"),p=$('input[name="startDate[date]"]',f),m=$('input[name="startDate[time]"]',f),v=$('input[name="endDate[date]"]',f),h=$('input[name="endDate[time]"]',f);f.addClass("shown"),p.datepicker("setDate",s),v.datepicker("setDate",u),m.timepicker("setTime",s),h.timepicker("setTime",u);var C=$("input[name=allDay]"),g=C.parents(".lightswitch:first");$("input",g).val(c?1:""),c?(g.data("lightswitch").turnOn(),$(".timewrapper",f).hide()):(g.data("lightswitch").turnOff(),$(".timewrapper",f).show()),setTimeout((function(){$("input[name=title]:first",i).val("").focus().bind("keypress",(function(e){13===(e.which?e.which:e.keyCode)&&$("button.submit",i).trigger("click")}))}),100);var y=m.timepicker("option","timeFormat").replace("h","hh").replace("H","HH").replace("G","H").replace("g","h").replace("A","a").replace("i","mm");$("button.submit",i).unbind("click").click((function(e){var t=$(this),a=$("input[name=title]",i).val(),d=$("select[name=calendarId]",i).val(),o=moment(p.datepicker("getDate")),l=moment(m.val().replace(/(a|p)\.(m)\./gi,"$1$2"),y),c=moment(v.datepicker("getDate")),s=moment(h.val().replace(/(a|p)\.(m)\./gi,"$1$2"),y);t.prop("disabled",!0).addClass("disabled"),t.text(Craft.t("app","Saving...")),$.ajax({url:Craft.getCpUrl("calendar/events/api/create"),type:"post",dataType:"json",data:n({startDate:o.format("YYYY-MM-DD")+" "+l.format("HH:mm:ss"),endDate:c.format("YYYY-MM-DD")+" "+s.format("HH:mm:ss"),allDay:C.val(),event:{title:a,calendarId:d}},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(a){if(a.error)$("ul.errors",i).empty().append($("<li />",{text:a.error}));else if(a.event){var n=a.event;n.allDay&&(n.end=moment(n.end).add(2,"s").utc().format()),$("*[data-calendar-instance]").fullCalendar("renderEvent",n),$("*[data-calendar-instance]").fullCalendar("unselect"),r.hide(e)}t.prop("disabled",!1).removeClass("disabled"),t.text(Craft.t("app","Save"))},error:function(){Craft.cp.displayNotification("error",JSON.parse(message)),t.prop("disabled",!1).removeClass("disabled"),t.text(Craft.t("app","Saving..."))}})})),$("button.delete",i).unbind("click").click((function(){r.hide()}))},hide:function(e,t){$("#event-creator").removeClass("shown").insertAfter($("#solspace-calendar")),$("*[data-calendar-instance]").fullCalendar("unselect"),r=!1,t.destroy()}}}))},d=function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e.calendar){var i=$("<div>",{class:"buttons"}),d=$("<div>"),o=$("<div>",{class:"calendar-data",html:'<span class="color-indicator" style="background-color: '+e.backgroundColor+';"></span> '+e.calendar.name}),l=moment(e.start),c=moment(e.end),s="dddd, MMMM D, YYYY";if(e.allDay)c.subtract(1,"days");else{var u="H:i"===a?"HH:mm":"h:mma";s=s+" [at] "+u}var f=$("<div>",{class:"event-date-range separator",html:'<div style="white-space: nowrap;"><label>'+Craft.t("calendar","Starts")+":</label> "+l.format(s)+'</div><div style="white-space: nowrap;"><label>'+Craft.t("calendar","Ends")+":</label> "+c.format(s)+"</div>"}),p="";e.repeats&&(p=$("<div>",{class:"event-repeats separator",html:"<label>"+Craft.t("calendar","Repeats")+":</label> "+e.readableRepeatRule})),e.editable&&(i.append($("<a>",{class:"btn small submit",href:Craft.getCpUrl("calendar/events/"+e.id+(r?"/"+e.site.handle:"")),text:Craft.t("calendar","Edit")})),i.append($("<a>",{class:"btn small delete-event",href:Craft.getCpUrl("calendar/events/api/delete"),text:Craft.t("calendar","Delete"),data:{id:e.id}})),e.repeats&&i.append($("<a>",{class:"btn small delete-event-occurrence",href:Craft.getCpUrl("calendar/events/api/delete-occurrence"),text:Craft.t("calendar","Delete occurrence"),data:{id:e.id,date:e.start.toISOString()}}))),t.qtip({content:{title:e.title,button:!0,text:d.add(o).add(f).add(p).add(i)},style:{classes:"qtip-bootstrap qtip-event",tip:{width:30,height:15}},position:{my:"right center",at:"left center",adjust:{method:"shift flip"}},show:{solo:!0,delay:500},hide:{fixed:!0,delay:300},events:{show:function(e){window.qTipsEnabled||e.preventDefault()},render:function(t,a){$("a.delete-event-occurrence",a.elements.content).click((function(){var e=$(this).attr("href"),t=$(this).data("id"),r=$(this).data("date");return confirm(Craft.t("calendar","Are you sure?"))&&$.ajax({url:e,type:"post",dataType:"json",data:n({eventId:t,date:r},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(e){if(!e.error)return $("*[data-calendar-instance]").fullCalendar("refetchEvents"),void a.destroy();console.warn(e.error)}}),!1})),$("a.delete-event",a.elements.content).click((function(){var t=$(this).attr("href"),r=$(this).data("id");return confirm(Craft.t("calendar","Are you sure you want to delete this event?"))&&$.ajax({url:t,type:"post",dataType:"json",data:n({eventId:r},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(t){if(!t.error)return $("*[data-calendar-instance]").fullCalendar("removeEvents",e.id),void a.destroy();console.warn(t.error)}}),!1}))}}})}},o=function(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds())}},10:function(e,t,a){"use strict";a.r(t);var n=a(0);document.querySelectorAll("*[data-mini-cal]").forEach((function(e){var t=(e=$(e)).data(),a=t.overlapThreshold,i=void 0===a?5:a,d=t.firstDayOfWeek,o=void 0===d?0:d,l=t.locale,c=void 0===l?"en":l,s=t.currentDay,u=void 0===s?new moment:s;e.fullCalendar({now:new moment,defaultDate:u,defaultView:"month",nextDayThreshold:"0"+i+":00:01",fixedWeekCount:!1,eventLimit:1,firstDay:o,lang:c,height:"auto",columnFormat:"dd",viewRender:r,windowResize:r,eventClick:n.eventClick,dayClick:function(e){window.location.href=Craft.getCpUrl("calendar/view/day/"+e.format("YYYY/MM/DD"))},events:function(t,a){var n,r,i;$.ajax({url:Craft.getCpUrl("calendar/month"),data:(n={rangeStart:t.toISOString(),rangeEnd:a.toISOString(),nonEditable:!0,calendars:e.data("calendars"),siteId:e.data("siteId")},r=Craft.csrfTokenName,i=Craft.csrfTokenValue,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n),type:"post",dataType:"json",success:function(e){$(".fc-content-skeleton .fc-day-top.fc-has-event").removeClass("fc-has-event");for(var t=0;t<e.length;t++)for(var a=e[t],n=moment(a.start).utc(),r=moment(a.end).utc();n.isBefore(r);)$(".fc-content-skeleton .fc-day-top[data-date="+n.utc().format("YYYY-MM-DD")+"]").addClass("fc-has-event"),n.add(1,"days")}})},header:{left:"prev",center:"title",right:"next"}})}));var r=function(e,t){var a=$(".fc-content-skeleton",t);$(".fc-day-number",t).css({textAlign:"center",padding:0,minHeight:a.height()+"px",lineHeight:a.height()+"px"})}}});