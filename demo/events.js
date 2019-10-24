const EventEmmiter = require('events');

// const emmiter = new EventEmmiter()
//
// emmiter.on('any', data =>{
//     console.log('On: any', data);
// })
//
// emmiter.emit('any', {a: 1});
//
// setTimeout(() =>{
//     emmiter.emit('any', {c: 3});
// }, 500)

class Dispatcher extends EventEmmiter{
    subscribe(eventName, callback){
        console.log('[Subscribe]')
        this.on(eventName,callback)
    }
    dispatch(eventName,data){
        console.log('[Dispatching]')
        this.emit(eventName,data)
    }
}

const dis = new Dispatcher();

dis.subscribe('aa', data =>{
    console.log("ON: aa", data)
})

dis.dispatch('aa', {aa: 22});