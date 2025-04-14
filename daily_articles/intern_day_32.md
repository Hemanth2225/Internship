
# Day 32 of Internship

Hello

This is my day 32 of intern. In this day I learn about how to integrate with API for my trading website I searched about real time APIS then I use one forex free API for my trading website. Then I use angular service for API integration I create a service with the help of this command `ng global service`. Now I still working on API integration.

## Angular Service:

Service is a broad category encompassing any value, function, or feature that an application needs. In angular component should use services for tasks that don't involve the view or application logic. Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console. We define such processing tasks in an injectable service class, you make those tasks available to any component.

Then I learn about Injectable, We can add the `@Injectable()` decorator to a service class so that Angular can inject it into a component as a dependency the optional argument tells Angular where to register this class by default.

### Example for Injectable:

```typescript
@Injectable({ providedIn: 'root' })
export class ForexService {

}
```

When We creates a new instance of a component class, it determines which services or other dependencies that component needs by looking at the constructor parameter types. For example the constructor of `ForexListComponent` needs `ForexService`.

### Example:

```typescript
constructor(private service: ForexService) { }
```

## Researching:

Now I come to researching part of my trading website project. From the beginning of internship to now, I research it about lot of new things, and I gain some knowledge from researching new things. Then I also improving my researching skill little bite better. In this day I research it about What are the free APIs for forex trading website then I searched about how to integrate the API in my website Then I learn about how to display values in dynamic.

## Copy Writing:

I read and wrote about another half part of *Extreme Ownership* chapter 3. What I am learn and wrote from chapter 3, A leader must first believe in the mission to inspire belief in others. Jocko Willink emphasizes that true leadership begins with conviction. If a leader doesn't believe in the purpose of a directive whether in business, they will struggle to get their team to buy in. But when a leader truly understands and embraces the why behind a mission, they can communicate it clearly and passionately, helping others see its importance and commit fully.
