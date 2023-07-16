---
title: 'Creating a Node.js and MongoDB-Based Authentication System — Enhancing Security and Scalability'
description: 'Defending user data and preserving confidentiality is'
header: https://cdn.discordapp.com/attachments/883739697665417247/1101934374133436456/image.png
createdAt: 2023-04-27T19:03:24.368Z
related:
special: false
---

<blog-notification icon="😟">
  Yes, this post is relativly dense, but it is a great resource for anyone looking to build a secure authentication system. I would recommend reading it through once, and then coming back to it when you need to implement a system like this
</blog-notification>

<blog-separator> </blog-separator>

Defending user data and preserving confidentiality is of utmost significance in the dynamic world of web development. A robust authentication and authorization framework serves as the shield against potential vulnerabilities, ensuring the protection of user accounts and enabling precise control over application access. In this comprehensive guide, we explore the intricate process of crafting an impregnable authentication and authorization system by harnessing the power of Node.js, Express.js, and MongoDB. Immerse yourself in the depths of this article as we uncover the essential steps and components required to fortify your web application's security posture.

But before we dive into the implementation details, let's take a moment to grasp the key concepts of authentication and authorization, as well as the important role played by JSON Web Tokens ( JWT ). This preliminary understanding will allow us to fully comprehend the essential steps and components required to enhance the security of your web application.


## Grasping the Concept of Authentication and Authorization

Before diving into implementation, I think it's necessary to highlight the difference between these two concepts. Authentication and authorization are fundamental concepts in the realm of security and access control within web applications. Authentication refers to the process of verifying the identity of a user, ensuring they are who they claim to be. It involves the collection and validation of credentials, such as usernames and passwords, to grant access to specific resources or functionalities. On the other hand, authorization deals with determining what actions or resources a user is allowed to access based on their authenticated identity and assigned permissions. It involves defining and enforcing access control policies to protect sensitive data and maintain the integrity of the system. Together, authentication and authorization form a vital duo, safeguarding user accounts and providing the necessary controls to manage access effectively in web applications.

## J W ... T ?

Yes, JWT, which stands for <u>J</u>SON <u>W</u>eb <u>T</u>oken, is indeed a token employed for the purpose of exchanging security-related information between two entities, predominantly a client and a server. This particular token is widely utilized for the facilitation of authentication and authorization processes within web applications as well as API services.

To summarize simply:

- A JWT is a token used for sharing security information between parties.
- It is commonly used for authentication and authorization in web applications and APIs.
- A JWT consists of three parts: the header, the claims, and the signature.
- The header contains metadata about the token, such as the encryption algorithm used.
- The claims are specific pieces of information about the user or additional data.
- The signature is used to verify the integrity of the token and authenticate the issuer.

To learn more about JWT, you can consult the following resources:

- [JWT.io]( https://jwt.io/introduction/ ): A website that provides a comprehensive introduction to JWT, as well as a debugging tool to decode, verify, and generate JWT.
- [RFC 7519]( https://datatracker.ietf.org/doc/html/rfc7519 ): The official specification for JWT.
- [Auth0 - JSON Web Tokens]( https://auth0.com/learn/json-web-tokens ): A detailed guide on JWT with usage examples.
- [Google Cloud - Authenticating Users with JWT]( https://cloud.google.com/api-gateway/docs/authenticating-users-jwt ): A guide on user authentication with JWT in Google Cloud.


## Preparing the Development Environment

Before we embark on building our authentication system, let's ensure our development environment is properly set up. Here are the key steps to get started:

1. Install Node.js: Head over to the official Node.js website and download the latest stable version compatible with your operating system. Follow the installation instructions to set up Node.js on your machine.

2. Initialize a Project: Create a new directory for your authentication system project. Open a terminal or command prompt, navigate to the project directory, and run the command `npm init` to initialize a new Node.js project. Follow the prompts to set up your project's details and generate a `package.json` file.

3. Install Dependencies: In this project, we'll be using Express.js and MongoDB. Install them as project dependencies by running the following commands in your terminal or command prompt:

```bash
npm install express mongoose bcrypt jsonwebtoken
```

4. Set Up MongoDB: Install MongoDB on your machine and ensure it's running. Create a new database to store user information and authentication-related data.

#  Building the Express Application


Before we dive into the implementation details, let me provide an overview of the project's directory structure to aid understanding.

```bash
.
├── app.js
├── controllers
│   └── auth.js
├── models
│   └── user.js
├── package.json
├── package-lock.json
├── routes
│   └── auth.js
└── utils
    └── auth.js
```

Now that we have our development environment set up, let's start building our Express application. We'll begin by creating a new file named `app.js` in the project directory. This file will serve as the entry point of our application. Open the file and add the following code:

```js
// app.js

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```






Defending user data and preserving confidentiality is of utmost significance in the dynamic world of web development.
A robust authentication and authorization framework serves as the shield against potential vulnerabilities, ensuring the
protection of user accounts and enabling precise control over application access. In this comprehensive guide, we explore
the intricate process of crafting an impregnable authentication and authorization system by harnessing the power of Node.js,
Express.js, and MongoDB. Immerse yourself in the depths of this article as we uncover the essential steps and components required
to fortify your web application's security posture.

## Grasping the Concept of Authentication and Authorization
Before diving into implementation, I think it's necessary to highlight the difference between these two concepts.

Authentication and authorization are fundamental concepts in the realm of security and access control within web applications. Authentication refers to the process of verifying the identity of a user, ensuring they are who they claim to be. It involves the collection and validation of credentials, such as usernames and passwords, to grant access to specific resources or functionalities. On the other hand, authorization deals with determining what actions or resources a user is allowed to access based on their authenticated identity and assigned permissions. It involves defining and enforcing access control policies to protect sensitive data and maintain the integrity of the system. Together, authentication and authorization form a vital duo, safeguarding user accounts and providing the necessary controls to manage access effectively in web applications.

## Preparing the Development Environment

Before we embark on building our authentication system, let's ensure our development environment is properly set up. Here are the key steps to get started:

1. Install Node.js: Head over to the official Node.js website and download the latest stable version compatible with your operating system. Follow the installation instructions to set up Node.js on your machine.

2. Initialize a Project: Create a new directory for your authentication system project. Open a terminal or command prompt, navigate to the project directory, and run the command `npm init` to initialize a new Node.js project. Follow the prompts to set up your project's details and generate a `package.json` file.

3. Install Dependencies: In this project, we'll be using Express.js and MongoDB. Install them as project dependencies by running the following commands in your terminal or command prompt:
``` 
npm install express mongoose bcrypt jsonwebtoken
```

4. Set Up MongoDB: Install MongoDB on your machine and ensure it's running. Create a new database to store user information and authentication-related data.

## Creating the Express.js Server

Now that we have our development environment set up, let's create the Express.js server. Create a new file named `server.js` in the project's root directory and add the following code:
²



## Creating the User Model

The first step in building our authentication system is to create a user model. The user model will serve as the blueprint for storing user information in the database. It will also provide the necessary methods for performing CRUD operations on user data. Let's create a new file named `User.js` in the project's root directory and add the following code:


@patrikfurda9119
il y a 3 ans (modifié)
I MANAGED TO FIX THIS TO WORK ON JAVA EDITION!

Now that I have your attention, first just let me say hello to all of you strugglers :) So, there are a few issues you need to fight if you're building this on Java Edition but somehow I just found some quite simple solutions so here's a list of the issues you have to fight and how to solve them:
1.) When you get to 2:22 of the video, you'll find out that even though you time the repeaters right, the top set of pistons will be lifted and the build won't work... This has a simple solution, all you need to do is to put an immovable block at the top of the top two sticky pistons (obsidian works fine, but furnaces are also immovable and cheaper and easier to handle).
2.) When you get to 3:30 of the video, you'll realize the two pistons at the very front won't extend - this is due to weird Java redstone mechanics. To solve this issue, dig one block down the original place of the piston and place a sticky piston down there so that the sticky piston is next to the block powered by the redstone line. Afterwards you'll need to put a slime/honey block at the top of the sticky piston to reach the desired height. Now this will cause problems with the blocks placed at 6:09 (because of the slime/honey block you used) so you need to make sure these two blocks (from 6:09) are also immovable (obsidian or again a furnace, I prefer furnaces - they look similar to stone blocks from the top).
3.) When you have all the setup done with the stairs retraction mechanism and the trapdoors (7:45), the machine will just destroy itself if you try to run it and you'll need to do quite a lot of repairing to restore the damage it has caused. The problem to this are the pistons placed at 4:30 which due to some really shady redstone mechanics just go crazy. To make these pistons work properly, you need to turn them 90° to the side, so the won't be pushing the block towards the entrance of your base but they will push the block to the desired place from the side. So just rotate the piston to the side and take the redstone pulse from the redstone torch placed at 3:58 (you won't need the torches placed at 4:02 any more). Another thing you need to do is to place the redstone torch placed at 7:45 differently, because of the changes we have done earlier. So instead of placing the repeater where it is placed at 7:31, you need to place it next to the block so it will be going to the side of the build, put a block behind this repeater, then put a redstone torch to the side of the placed block and make a redstone line from the torch to connect it to the place which is powered in the video (if you placed the redstone torch at the same place as is shown in the video, this torch wold be now powering the piston above it which you don't want)
4.) At this point the whole build is fully functional. However, I don't know whether it's just my case or it's again a Java problem, but the hopper-dropper T-Flip-Flop does not work for me, so I recommend to use another type of the T-Flip-Flop circuit (I used a circuit with an observer moved by a sticky piston with this observer giving a pulse to another sticky piston after expanding and the second sticky piston pushing/pulling a redstone block which works just fine) .

I build this on a survival server, so YES it does work on survival and YES it works on servers. Hope I helped, have fun engineering. :)


```js

const mongoose  = require( "mongoose" )
    , bcrypt    = require( "bcrypt" )
    , jwt       = require( "jsonwebtoken" );

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    minlength: 6,
  },
});

// Fire a function before doc saved to db
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Static method to login user

```


