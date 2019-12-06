# code-challenge
Clone repo

<strong>To start with Docker-Compose</strong>
1. CD into repo

2. From repo root run, $ docker-compose up

3. Wait for build to respond, 'angular live development server is listening...'

4. enter localhost:4200 in browser

<strong>To Start Containers individually</strong>
1. From server dir run, $ docker build -t server:dev .

2. After build completes run, $ docker run -d --name server -p 3000:3000 server:dev

3. In another terminal open client dir run, $ docker build -t client:dev .

4. After build completes run, $ docker run -d --name client -p 4200:4200 client:dev

6. Wait for build to respond, 'angular live development server is listening...'

7. enter localhost:4200 in browser

Notes:

Client built with Angular 8

Server built with Node 12 / KOA 2

DB is AWS RDS MySQL
