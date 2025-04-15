
# Day 33 of Internship

This is my day 33 of intern. In this day I learn about Observable, constructors, subscribe(), unsubscribe(), pipe(). Then I learn these things with some real-world examples.

## Observable:

Observable is a stream of data that can emit multiple values over time. It's a powerful tool for handling asynchronous operations and data streams, particularly useful for HTTP requests, event handling, and real-time data. Then it is very useful for fetching real-time data. I give some code examples for observable.

```typescript
getForexRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
}
```

See this line observable fetching real-time data from `apiUrl`.

## Now I talk about some Observable terms, I learn about some important terms in Observable I mention below.

### Subscribe():
Observables are declarative. You define a function for publishing values the source, but that function is not executed until a consumer subscribes to the observable by calling the observable's subscribe method. I Explain what is understand in simple what subscribe does? It waits for data from Observable.

Example:

```typescript
getForex() {
    this.forexService.getForex()
    .subscribe(
        forex => this.forex = forex,
        error => this.errorMessage = <any>error
    );
}
```

This is the example for subscribe term.

### Unsubscribe():
Whenever the component is about to be destroyed, the method will be unsubscribing the current subscription. We can use `ngOnDestroy()` method to create a unsubscribe. Just call the variable we have created and then use the `unsubscribe()` function.

Example syntax for unsubscribe:

```typescript
ngOnDestroy() {
    this.sub.unsubscribe();
}
```

### Pipe():
Pipes are a special operator in Angular template expressions that allows to transform data declaratively in your template. We can change data in between from observable to subscribe. I learn with some examples in cricket. If you bowl, you have more variation in bowling like example you are the spinner you have off-spinner, googly, leg-spinner, etc. If you bowl the ball to the batsman, then spin variation changes in between of bowler and batsman. In this, The bowler is the Observable he delivers the ball (data). The batsman is the subscriber he reacts to the delivery. The spin variation (off-spin, googly, leg-spin) is like a pipe, it modifies the delivery before the batsman faces it.
