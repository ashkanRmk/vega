# Vega :car:
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]()

An open-source sample vehicle dealer Single Page Application (SPA).

## Frameworks - Tools - Libraries
- ASP.NET Core 2.0 and C# for cross-platform server-side code
- Entity Framework Core 2.0 as ORM
- Angular 4 and TypeScript for client-side code
- Webpack for building and bundling client-side resources
- Automapper, A convention-based object-object mapper
- DotNet watcher tools for file changing detection
- Bootstrap for layout and styling
- Font-Awesome for pictographic icons

## Architecture

* Full architecture with responsibility separation concerns, SOLID and Clean Code
* Domain Driven Design (Layers and Domain Model Pattern)
* Unit of Work
* Repository and Generic Repository

## To run the project:

`$ npm install`

`$ dotnet restore`

`$ dotnet user-secrets set ConnectionStrings:Default "<YOUR CONNETION STRING>"`

`$ webpack --config webpack.config.vendor.js`

`$ webpack`

`$ dotnet ef database update`

`$ dotnet watch run`

## LICENSE
`MIT License`

Copyright (c) 2017 Ashkan Rahmani