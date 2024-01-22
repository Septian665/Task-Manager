# FrontEnd By Youtube freeCodeCamp
source : https://www.youtube.com/@freecodecamp
# Installation Package

```
$ npm install nodemon
```

```
$ npm install sequelize
```

```
$ npm install mysql2
```

```
$ npm install express
```

```
$ npm install dotenv
```

```
$ npm install cors
```

## Create Task API
Endpoint : POST /api/task/

Request Body
```json
{
   "name" : "Mengerjakan Tugas Sekolah"
}
```

Response Body Success
```json
{
   "data" : {
      "id" : 1,
      "name" : "Mengerjakan Tugas Sekolah"
   }
}
```
Response Body Error
```json
{
   "error" : "Name is required"
}
```

## Get Task API
Endpoint : GET /api/task/:id

Response Body Success
```json
{
   "data" : {
      "id" : 1,
      "name" : "Mengerjakan Tugas Sekolah",
      "completed" : false
   }
}
```
Response Body Error
```json
{
   "error" : "Task is not found"
}
```

## List Task API
Endpoint : GET /api/task/

Response Body Success
```json
{
   "data" : [
      {
         "id" : 1,
         "name" : "Mengerjakan Tugas Sekolah",
         "completed" : false
      },
      {
         "id" : 2,
         "name" : "Mempersiapkan Buku Sekolah",
         "completed" : true
      },
   ]
}
```
Response Body Error
```json
{
   "error" : "Task is not found"
}
```

## Update Task API
Endpoint : PATCH /api/task/:id

Request Body
```json
{
   "name" : "Mengerjakan Tugas Sekolah",
   "completed" : "false"
}
```

Response Body Success
```json
{
   "data" : {
      "id" : 1,
      "name" : "Mengerjakan Tugas Sekolah",
      "completed" : false
   }
}
```
Response Body Error
```json
{
   "error" : "Task is not found"
}
```

## Remove Task API
Endpoint : DELETE /api/task/:id

Response Body Success
```json
{
   "data" : "OK"
}
```
Response Body Error
```json
{
   "errors" : "Task is not found"
}
```
