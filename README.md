PokAPI
===

## Prerequisites

> **Docker**: *1.13.0* or later (with docker-compose 3.0)

To install Docker Desktop click [**here**](https://docs.docker.com/desktop/)

## Usage

1. Run `docker-compose up -d --build` in terminal
2. Navigate to the [**website**](http://localhost:5000) hosted locally (localhost:5000)
3. Local Pokemon search endpoint has CORS origin set to `"*"` and is available at `http://localhost:5000/pokemon/:pokemon_name` 

## Development

#### Structure
* Both `client` and `server` are stand-alone node application roots
* Both use the same `npm` scripts to build the project
* Both use the same `npm` script to bring up the development server
* `client` is available at [localhost:1234](http://localhost:1234)
* `server` available at [localhost:5000](http://localhost:5000)

#### Run development servers
1. Go to directory `cd ./[client|server]`
2. Install and build `npm install` (or `npm ci`)
3. Run `npm run start:dev`

#### Mocks

Searching for `butterfree` and `wormadam` can be mocked from the UI, more info at `client/src/ts/http.ts#[3]`
