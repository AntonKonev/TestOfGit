
//Урок 1
// var stream$ = new Rx.BehaviorSubject(1);
//
//
// var subscription1 = stream$.subscribe(function (data) {
//     console.log("subscription 1 ", data);
// }, function (error) {
//     console.log('error',error)
// },function () {
//     console.log('complete')
// });
//
// stream$.next("23");
// stream$.next("24");
// stream$.complete();
//
// var subscription2 = stream$.subscribe((data) =>{
//     console.log("subscribtion 2 ", data);
// });
// stream$.next("25");


// // Урок 2
// var button = document.querySelector('button');
//
//
// var btn$ = Rx.Observable.fromEvent(button, 'click');
// btn$.subscribe(function (event) {
//     console.log(event);
// });
//
// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup').subscribe(e => {
//     console.log(e);
// })
//
// Rx.Observable.fromEvent(document, 'mousemove').subscribe(e => {
//     console.log(e);
// })

//Урок 3
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
})
    .observeOn(Rx.Scheduler.async);

console.log('just before subscribe');
observable.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
});
console.log('just after subscribe');
