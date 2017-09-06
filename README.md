# vega
A sample vehicle dealer single-page application built with Angular 4, ASP.NET Core 2.0 and Entity Framework Core.

- ASP.NET Core and C# for cross-platform server-side code
- Angular and TypeScript for client-side code
- Webpack for building and bundling client-side resources
- Bootstrap for layout and styling


## To run the project:

`$ npm install`

`$ dotnet restore`

`$ dotnet user-secrets set ConnectionStrings:Default "<YOUR CONNETION STRING>"`

`$ webpack --config webpack.config.vendor.js`

`$ webpack`

`$ dotnet ef database update`

`$ dotnet watch run`
