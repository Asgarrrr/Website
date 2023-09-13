---
title       : 'x, temp & foo : Naming Things in Code'
description : "Finding the right name for a variable, a function or a class is hard, one of the hardest things in programming..."
header      : https://cdn.discordapp.com/attachments/1071595350437134456/1148012712434094221/andre-benz-JnB8Gio4GZo.jpg
tags        : []
related     : [ "premature-optimization" ]
createdAt   : 2023-08-27T19:03:24.368Z
special     : false
---

One of the classic quotes in programming is...

<blog-quote author="Phil Karlton" authorinfo="Software Developer">
  There are only two hard things in Computer Science: cache invalidation and naming things.
</blog-quote>

And I don't think I've ever heard a programmer disagree with it. Finding the right name for a variable, a function or a class is hard,
one of the hardest things in programming. And it's not just about naming things,
it's about **naming things in a way that makes sense to other people, and to your future self**.

I agree that these can be challenging to get right, but they're also easy to get wrong, and we can get 80% of the way
there by following a few simple rules / avoiding bad patterns.

I want to discuss what I perceive as poor naming practices—practices that, if you steer clear of them, will naturally
lead you toward better naming. These are the classic...

## Variables with a single letter name

Mathematicians like to crystallize down to the simplest possible form, most concise way of expressing something,
and so they have been using single letter variables for centuries, they like to use `x` and `y` and `z` and so on.

But in programming, **we're not trying to be concise**, _**we're trying to be expressive**_, we're trying to be clear,
and so we should avoid single letter variables.

You don't need to edit math, but you do need to edit code. And **when you're editing code**, _you need to understand it_.

So, if you're using a single letter variable, you're forcing the reader to go and find the declaration of that variable,
and then come back to where it's being used, and then try to understand what it's doing.

Check out this example:

```js [src/index.js] {data-line="3,8-10"}
function fp( m, s, e ) {
  const o = []
      , c = []
      , h = ( a, b ) => Math.abs( a.x - b.x ) + Math.abs( a.y - b.y );

  o.push( s );

  while ( o.length > 0 ) {
    let t = o[ 0 ];
    for ( let i = 1; i < o.length; i++ )
      if ( o[ i ].f < t.f || ( o[ i ].f === t.f && o[ i ].h < t.h ) )
        t = o[ i ];

    const ti = o.indexOf( t );
    o.splice( ti, 1 );
    c.push( t );

    // [ ... ] I've deliberately omitted the rest of the function, as it's not important for the example.

  }

  return null;
}
```

Can you tell what this function does? How long did it take you to figure it out?

I intentionally picked a function that's not too complex, but it's still hard to understand.

Now, let's try to improve it by giving our variables meaningful names:

```javascript
function findPathInMaze( maze, start, end ) {
  const open = []
      , closed = []
      , heuristicCost = ( a, b ) => Math.abs( a.x - b.x ) + Math.abs( a.y - b.y );

  open.push( start );

  while ( open.length > 0 ) {
    let current = open[ 0 ];
    for ( let i = 1; i < open.length; i++ )
      if ( open[ i ].totalCost < current.totalCost || ( open[ i ].totalCost === current.totalCost && open[ i ].heuristicCost < current.heuristicCost ) )
        current = open[ i ];

    const currentIndex = open.indexOf( current );
    open.splice( currentIndex, 1 );
    closed.push( current );

    // [ ... ] I've deliberately omitted the rest of the function, as it's not important for the example.

  }

  return null;
}
```

Hooo, okay, that's much better. So, "findPathInMaze" is a function that takes a maze, a start point and an end point,
and it finds a path from the start point to the end point. We're using the A* algorithm to find the path, and we're
using the "open" and "closed" arrays to keep track of the nodes we've visited.

<blog-notification icon="🧐">

  <b style="display: block;">
    Now, I'm not saying that you should never use single letter variables...
  </b>

  ...But you should use them sparingly, and only
  when they're obvious. For example, if you're iterating over an array, you can use `i` as the index, or if you're
  iterating over an object, you can use `k` as the key.

</blog-notification>


## Abbreviations

Abbreviations rely on context, which may or may not be present, and reading code takes more time than writing it.
Therefore, compelling yourself to understand system-specific naming patterns can make delving into unfamiliar code much more challenging.

Abbreviations are often used for 2 reasons:
- It saved you typing
- and screens were ~80 characters wide

But now, we have IDEs that autocomplete, and screens are much wider, so we don't need to save characters anymore.

<smart-figure src="https://cdn.discordapp.com/attachments/1071595350437134456/1148040434950611025/423523452134258976056.png"></smart-figure>

It takes less keyboard strokes than ever to write a variable name, and we have massive 4K screens, so there's no
reason to use abbreviations.

## Don't put the type in the name

If you've edited older code on Windows, you've probably seen something called **Hungarian Notation**, which is a naming
convention that was popularized by Microsoft in the 90s. The idea is that you prefix the name of a variable with a code
that represents its type.


```csharp
int iCount;
char* szName;
bool bFound;
```

I think this goes back to the days of C, where you had to keep track of the type of a variable, because the compiler
wouldn't do it for you. But now, we have type systems, and we have IDEs that tell us the type of a variable, so we don't
need to put the type in the name.

And if you're using a language that doesn't have a type system, like JavaScript, then you should use a type system,
like TypeScript ? For python, you can use [mypy](https://mypy-lang.org/). But in any case, you have alternatives, like
JSdoc, which allows you to specify the type of variable in a comment.

## Units in your variable names

Related, it's considered good practice to put the units in your variable names.

For example, if you have a function that accepts a delay time, if the delay is in milliseconds, you should name the
variable `delayMilliseconds`, and if it's in seconds, you should name it `delaySeconds`.

This way it's clear to the user of the function what the units are, that they better be putting in seconds. And it's
clearer to someone editing the function itself what unit they're working with.

But even better than that is to have a type that removes the ambiguity completely. For example, in C# you can have a
`TimeSpan` type, or in C++ you can have a `std::chrono::duration` type, and these types have a unit associated with
them, so you don't need to put the unit in the name.

The type abstracts the user from understanding the exact underlying unit, you need to explicitly ask for a unit back,
like here, we're asking for the total number of seconds:

```csharp
void execute ( TimeSpan delay ) {
  double seconds = delay.TotalSeconds;
}
```

For dynamic languages, like Python or JavaScript, you sadly don't have types, but you can still use the name to
communicate the unit, like here, we're using the name to communicate that the delay is in seconds:

```python
class Renderer:
  def __init__ ( self, renderIntervalSeconds ):
    self.renderIntervalSeconds = renderIntervalSeconds
```

### Choosing Descriptive Function and Class Names

So far, we've talked about naming variables, but equally important is naming functions and classes.
Functions and classes are the building blocks of your code, and giving them clear,
descriptive names can significantly improve code readability and maintainability.

Consider this scenario: you have a function that calculates the average of a list of numbers. What would you name it?

```python
# Bad
def calc_avg(nums):
    # ...

# Better
def calculate_average(numbers):
    # ...
```

In the "Bad" example, it's not immediately clear what the function does. In the "Better" example, the function's purpose is clear from the name itself.

#### Avoid Generic Names

Another common pitfall is using overly generic or vague names for functions and classes. Generic names can make your codebase confusing and hinder collaboration. For instance:

```javascript
// Not ideal
function process( data ) {
    // ...

// Better
function analyzeSensorData( sensorData ) {
    // ...
```

The "process" function doesn't convey what it does with "data," whereas "analyzeSensorData" clearly indicates the function's purpose.

#### Consistent Naming Conventions

Maintaining consistency in naming conventions throughout your codebase is crucial. If you use camelCase for variables in one part of your code and snake_case in another, or if you mix different styles, it can make the code harder to read and understand.

```python
# Inconsistent
def calculateAverage( numbers ):
    # ...

# Consistent
def calculate_average( numbers ):
    # ...
```

In the "Inconsistent" example, the naming style doesn't match the rest of the codebase, causing confusion. The "Consistent" example aligns with the established convention.

#### Documentation

Finally, don't underestimate the power of documentation. Even with clear names, providing documentation for complex functions or classes can greatly aid understanding, especially for other developers who may work on your code in the future. Use comments or docstrings to explain the purpose, inputs, and expected outputs of your functions and classes.

## In Conclusion...

...naming things in code is a crucial aspect of programming that impacts code readability, maintainability, and collaboration. By adhering to descriptive and consistent naming conventions for variables, functions, and classes, you can make your code more accessible to both others and your future self. Remember that code is read more often than it's written, so investing time in choosing good names is an investment in the long-term success of your project.

<blog-notification icon="💜">
  As programmers, our ability to communicate effectively through code is paramount. By following these guidelines and avoiding common naming pitfalls, you can ensure that your code speaks clearly and concisely to both collaborators and future maintainers, making the development process smoother and more efficient.
</blog-notification>
