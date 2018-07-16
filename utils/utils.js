/*
var transformEvents = function ( events) {
    events.forEach(element => {
        console.log(element.name);
    });
}

module.export= transformEvents;
*/

module.exports = {
    transformEvents: function(events) {
        let newEvents=[];

        events.sort(compare);
        numEvents=events.length;
        dateIndex=0;
        
        combinedEvents=[];
        combinedEventsSize=0;

        if(numEvents>0){
            combinedEvents.push({
                date: events[0].date,
                day: events[0].date.getDate(),
                month: events[0].date.getMonth(),
                eventsDataAndDesc: [{
                    name: events[0].name,
                    description: events[0].description
                }]
            })
            combinedEventsSize++;
        }

        for(eventIndex=1; eventIndex < numEvents; eventIndex++){

            if(events[eventIndex].date.getTime()==events[eventIndex-1].date.getTime()){

                combinedEvents[combinedEventsSize-1].eventsDataAndDesc.push({
                    name: events[eventIndex].name,
                    description: events[eventIndex].description
                })
            }
            else{
                combinedEvents.push({
                    date: events[eventIndex].date,
                    day: events[eventIndex].date.getDate(),
                    month: events[eventIndex].date.getMonth(),
                    eventsDataAndDesc: [{
                        name: events[eventIndex].name,
                        description: events[eventIndex].description
                    }]
                });
                combinedEventsSize++;
            }
            
        }
        for(i=1 ; i<=31;){

            currEvent=combinedEvents[dateIndex];
            if(currEvent!==undefined){
                currEventDate=currEvent.date.getDate();
                currEventMonth=currEvent.date.getMonth();
                currEventYear=currEvent.date.getFullYear();
            }

            if(currEvent!==undefined){
                if(currEventDate>i){
                    newEvent=createNoEvent(i);
                    newEvents.push(newEvent);
                    i++;

                } else{

                    newEvents.push(combinedEvents[dateIndex]);
                    dateIndex++;
                    i++;
                }
            } else {
                newEvent=createNoEvent(i);
                newEvents.push(newEvent);
                i++;
            }
        }
        return newEvents;
    }
  }


function createNoEvent(i,currEventYear,currEventMonth){
    newEventDate=new Date(currEventYear,currEventMonth,i);
         newEvent={
                date: newEventDate,
                day:i,
                month:currEventMonth,
                eventsDataAndDesc:[]
                }
    return newEvent;
}



function compare(a,b)
{
    if(a.date<b.date)
        return -1;
    if(a.date>b.date)
        return 1;
    return 0;
}
