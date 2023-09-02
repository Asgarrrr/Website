---
title       : 'x, temp & foo : Naming Things in Code'
description : "Finding the right name for a variable, a function or a class is hard, one of the hardest things in programming..."
tags        : []
related     : []
createdAt   : 2023-04-27T19:03:24.368Z
special     : false
---

One of the classic quotes in programming is:

<blog-quote 
  quote="There are only two hard things in Computer Science: cache invalidation and naming things." 
  author="Phil Karlton"
  authorinfo="Software Developer"> </blog-quote>

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

But in programming, we're not trying to be concise, we're trying to be expressive, we're trying to be clear,
and so we should avoid single letter variables. 

So, it's become obvious that we should avoid single letter variables, but what about single letter variable names
