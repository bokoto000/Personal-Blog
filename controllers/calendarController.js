const Event = require ('../models/event');
var eventUtils = require ('../utils/utils.js');

module.exports = {
    getCount:(req,res) =>{
        let gcount=0;
        Event
            .count()
            .then(count=>{
                this.gcount=count;    
                res.render('count',{count,title:'Count',layout:"calendar"})
            })

    },
    getAll:(req,res) =>{

        today=new Date();
        currYear=today.getFullYear();
        currMonth=today.getMonth(); 

        startOfMonth=new Date(currYear,currMonth,1);
        endOfMonth=new Date(currYear,currMonth,daysInMonth(currYear,currMonth));
        Event
            .find({date:
                 {"$gte": startOfMonth,
                  "$lt": endOfMonth}})
            .then(events=>{ 
                newEvents=eventUtils.transformEvents(events);
                events=newEvents;
                console.log(currMonth+ "....." +currYear);
                res.render('calendar',{events,title:'HOME',month:currMonth+1,year:currYear,layout:"calendar"})
            })
    },
    addEvent:(req,res) =>{
        let event = req.body;
        Event.create(event).then(()=>{
            res.redirect('/calendar');
        });
    },
    getEvents:(req,res)=>{

            date=req.query.day;
            today=new Date();
            currYear=today.getFullYear();
            currMonth=today.getMonth();
            startOfDay=new Date(currYear,currMonth,date,0,0,0);
            endOfDay=new Date(currYear,currMonth,date,23,59,59);

            console.log(startOfDay+";;;;;;;;;" +endOfDay);

            Event
                .find({date:
                    {"$gte": startOfDay,
                    "$lt": endOfDay}})
                .then(events=>{ 
                    console.log(events);
                    res.render('event',{events,title:'Event',day:date,month:today.getMonth()+1,year:today.getFullYear(),layout:"calendar"});
                })
            
    },
    removeEvent:(req,res)=>{

        id=req.query.id;
        day=req.query.day;
        console.log(day);
        Event
            .remove({_id:id})
            .then(()=>{
                res.redirect('../events/?day='+day);
            });
    }
}

function daysInMonth (year, month) {
    return new Date(year, month+1, 0).getDate();
}
