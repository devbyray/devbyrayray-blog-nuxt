---
title: GraphQL (microservices) architecture by Apollo
description: >-
  GraphQL is fantastic! Apollo build tooling around it to make our life easier,
  to use it at scale
date: '2020-01-15T13:46:18.885Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
slug: /@devbyrayray/graphql-microservices-architecture-by-apollo-8b6eb557c5e2
image: https://cdn-images-1.medium.com/max/1200/1*toEWBcbiUAFslVsZUNyACA.jpeg
---

## Why use GraphQL and not REST

If you look from the perspective of the client (the frontend) there are a few challenges with REST API’s when getting the data.

## Challenges with REST

For years we are using REST API’s because they were more convenient than getting the data from the server and render it simultaneously with the HTML which caused in continuously reloading the page of your application.

But with all the pros of REST, there is also a couple of cons.

1.  Doing a REST call gives the client more data than needed, so more data is needed to be downloaded
2.  The data structure of a REST endpoint is not predictable in the frontend application
3.  Calling multiple endpoints to merge data before showing screens to the user

## GraphQL to the rescue

> _GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data_

In the time we heavily rely on REST API’s we learned a lot of things that could be better.

With GraphQL we describe in the client which data we want to have instead of just asking all the data.

**GraphQL query**

```
{      me {        name      }    }
```

**JSON result**

```
{      "me": {        "name": "Luke Skywalker"      }    }
```

In the backend or API gateway, we have defined our types which will form our schemas. These schemas can be used in the frontend to make the data highly predictable.

**Types**

```
type Query {      me: User    }
```

```
    type User {      id: ID      name: String    }
```

**Functions for each field type**

```
function Query_me(request) {      return request.auth.user;    }
```

```
    function User_name(user) {      return user.getName();    }
```

## What problems does GraphQL solves

1.  Giving only the data back to the client, which is asked for
2.  Only 1 request to get data from multiple data sources.
3.  No more checking which endpoint you need to have to get your data.
4.  Less data needs to be downloaded
5.  Schemas are used in the frontend application’s, which are used to generate data types for the frontend (Typescript)
6.  The data structure becomes more predictable

Well that’s quite some challenges we can tackle with GraphQL 🙌

## Apollo the default way to talk GraphQL

You can use GraphQL without a library, but most organizations will use a library to do the heavy lifting and make it much easier for developers to use GraphQL

One of the biggest or maybe the biggest is [Apollo](https://www.apollographql.com/). Apollo has a [client library](https://www.apollographql.com/docs/react/#community-integrations)for a lot of JavaScript (TypeScript) libraries and frameworks. Next to that the have [Apollo Server](https://www.apollographql.com/docs/apollo-server/) which is a tool to build an API (gateway) in NodeJS. Next to that, they build Apollo Federation to handle a single graph easier with multiple teams.

If you do a couple of Google searches you soon discover that Apollo is almost the default way to use GraphQL, so that’s why I choose to dive deeper into it.

## Apollo client

The Apollo Client is a tool that helps you use GraphQL in the frontend. It helps with writing queries as part of the UI components and lets you write the queries in a declarative style.

Next to the queries it helps with state management, which comes in very useful in big applications.

Apollo Client integrates with multiple JavaScript libraries and frameworks. React, React Native, Vue, Angular and Web components. For iOS and Android, there are also possibilities to use the Apollo Client.

The Apollo Client works with any GraphQL server, so it doesn’t have to be the Apollo Server, it just understands GraphQL.

## Apollo Server (API Gateway)

![](https://cdn-images-1.medium.com/max/800/0*l2UZCuUv0v-KIIBp.png)

To have an endpoint that understands your GraphQL queries, you need an API Gateway or a service that can handle GraphQL.

Apollo comes with the Apollo Server package for you to build that yourself. You can use it as your main API to talk directly to your database or it can function as an API Gateway.

The API Gateway is what I find interesting. If you have some (micro) services that are built on REST you can leave them as-is. Just spin up the Apollo Server, and let it talk to all your REST services.

With the Apollo Server as Gateway, you can combine multiple data sources. The server handle’s all the different requests before giving back the requested data. When all the data is resolved, Apollo Server sends it back to the client.

Via this API Gateway, no service needs to understand GraphQL. The positive side with that is, when in the future there will be a better technique than GraphQL, we only have to swap the API Gateway and the Apollo Client and build a new gateway.

Even Apollo is recommending using [Apollo Server as Gateway](https://principledgraphql.com/operations#10-separate-the-graphql-layer-from-the-service-layer).

## GraphQL native microservices

Depending on the needs of the organization and architecture, it could also be a great fit to create GraphQL (micro)services.

Depending on the language you use, there are a couple of libraries that help you build them.

*   NodeJS: [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [GraphQL.js](https://graphql.org/graphql-js/), [express-graphql](https://graphql.org/graphql-js/running-an-express-graphql-server/)
*   Python: [Graphene Python](https://graphene-python.org/)
*   PHP: [GraphQL-php](https://github.com/webonyx/graphql-php), [GraphQL-relay-php](https://github.com/ivome/graphql-relay-php), [Railt](https://github.com/railt/railt), [Lighthouse](https://github.com/nuwave/lighthouse), [GraphQLBundle (Symfony)](https://github.com/overblog/GraphQLBundle)
*   Java: [GraphQL-java](https://github.com/graphql-java/graphql-java)
*   Go: [Graphql-go](https://github.com/graphql-go/graphql)
*   .Net: [GraphQL-dotnet](https://github.com/graphql-dotnet/graphql-dotnet), [GraphQL-net](https://github.com/ckimes89/graphql-net), [Hot Chocolate](https://hotchocolate.io/)
*   .Net Core: [Entity GraphQL](https://github.com/lukemurray/EntityGraphQL), [DotNetGraphQLQueryGen](https://github.com/lukemurray/DotNetGraphQLQueryGen), [Hot Chocolate](https://hotchocolate.io/)
*   Kotlin: [GraphQL Kotlin](https://expediagroup.github.io/graphql-kotlin/docs/getting-started.html)
*   Swift: [Graphiti](https://github.com/GraphQLSwift/Graphiti)
*   Ruby: [GraphQL-ruby](https://github.com/rmosolgo/graphql-ruby)

You can find a larger list on [GrapQL.org](https://graphql.org/code/).

## GraphQL backend in a world of microservices

More and more companies choose microservices architecture for their applications for multiple reasons. It works great for scalability but comes with quite some challenges.

But what if you want to use GraphQL in microservices architecture? Apollo has a solution for that “[Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/)”, and it works with more languages than JavaScript 👍

### The challenge with GraphQL and microservices

With GraphQL you only want to have [1 graph](https://principledgraphql.com/integrity#1-one-graph) with 1 endpoint that the client can call to get the data from. But working with multiple people or even multiple teams it can be quite hard to work on the same Graph repository. I foresee great amounts of merge conflicts all over the place.

### How to have one Graph spread over multiple teams

Well, we can split our graph over the multiple domains which will eventually come together in 1 graph, so-called [Federated Implementation](https://principledgraphql.com/integrity#2-federated-implementation).

Apollo Federation comes with that solution.

### Apollo Federation Core Concepts

For example, we have 2 microservices for our imaginary application.

*   Accounts microservice
*   Reviews microservice

With these services, we have 2 types of data `User` and `Review`. But they need to share parts of their data even though they are 2 separate services.

### Type references

With Apollo federation, we can reference types that live in different schemas.

```
type User @key(fields: "id") {   id: ID!   username: String}
```

With the `@key` directive we converted the `User` type to an entity. This indicates you are allowed to share this entity in other schemas.

In the review schema, we want to show who the author is of the review by reference to the `User` entity.

```
type Review {   author: User}
```

If the client wants to get the review, the GraphQL query will look like this.

```
query GetReviews {  reviews {    author {      username    }  }}
```

With the type reference, we can separate all our schemas from each other but still share them where we need it.

### Type extensions

If you want to extend a type defined in a different service to add new fields in it, then you can do that with `extend`.

For example, we want to extend the `User` defined in the accounts service into the review services and add new fields, we can do that by defining that like this.

```
extend type User @key(fields: "id") {   id: ID! @external   reviews: [Review]}
```

Via this way, the client can request the reviews by a user via a query like this.

```
query GetReviewsByUser($userId: String!) {  user(id: $userId) {    reviews(first: 10) {        edges {        node {          id          text        }      }    }  }}
```

## Apollo Federation Architecture

![](https://cdn-images-1.medium.com/max/800/0*bDKGeD6wqSQeQ5vo.png)

To implement the Apollo Federation we need 2 components.

*   A **gateway** to expose the complete graph and execute the federated queries
*   **Federated services**, which are standalone GraphQL APIs that can connect their data by extending types and creating references.

Using Apollo Server as federation will happen in no-time. Just include `@apollo/gateway` in your Apollo Server application, and define a service list where all your federated services live.

The best thing of all is, this gives a high level of flexibility for developing the graph with multiple teams, but the GraphQL client will just see a single schema.

## Thanks

Thanks for reading all the way down to here 🙌. I hope it gave you some new knowledge on using GraphQL via [Apollo](https://medium.com/u/9360eb7d79eb).

## Read my other posts

[**Dive into GraphQL w/ Apollo Client by building a SpaceX 🚀 app in Angular 8**  
_I know that this sounds odder than it is, but using GraphQL in an Angular 8 application with Apollo Client feels like…_itnext.io](https://itnext.io/dive-into-graphql-w-apollo-client-by-building-a-spacex-app-in-angular-8-20e703c93f0a "https://itnext.io/dive-into-graphql-w-apollo-client-by-building-a-spacex-app-in-angular-8-20e703c93f0a")[](https://itnext.io/dive-into-graphql-w-apollo-client-by-building-a-spacex-app-in-angular-8-20e703c93f0a)

[**Prevent “Cannot read property ‘…’ of undefined” errors with JavaScript Classes + TypeScript**  
_Every developer who did some JavaScript has got errors like “Cannot read property ‘…’ of undefined”. There is one…_itnext.io](https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45 "https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45")[](https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45)

[**From XHR to Fetch with Async/Await on the finish line**  
_It’s been a while ago that I’ve written my latest post. I’ve been busy exploring some other skills related to my…_medium.com](https://medium.com/@devbyrayray/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b "https://medium.com/@devbyrayray/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b")[](https://medium.com/@devbyrayray/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b)