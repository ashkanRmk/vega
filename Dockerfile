FROM microsoft/aspnetcore:2.0.5-stretch

WORKDIR /vega
ENV ASPNETCORE_URLS http://localhost:5000
EXPOSE 5000
CMD dotnet /vega.dll

WORKDIR /vega

COPY ./dockerpublish .

RUN chmod -R ug+rwx /vega
