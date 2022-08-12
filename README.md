<p align="center"><img src="https://yifgzyyqlpgydlzwcsaj.supabase.in/storage/v1/object/sign/calm-stream/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWxtLXN0cmVhbS9sb2dvLnBuZyIsImlhdCI6MTY0NzYwMDU0NywiZXhwIjoxOTYyOTYwNTQ3fQ.x5u9JALHIA9z3cD9AXOk8BzBQYIAAjqs546G3uqNKlg" height="80"/></p>

<h1 align="center">Calm Stream API</h1>

<h2 align="center"> A REST api for Calm Stream App having authentication using JWT, CRUD functionalities.</h2>

<p align="center">
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
<img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
</p>

```

```

# Documentation

## Signup User

### Request

`POST` `https://localhost:3000/v1/signup` <br>
Body:

```
{
	"username": "saurabh21suthar",
	"email": "saurabh21suthar@gmail.com",
	"password": "qwerty1234"
}
```

### Response

```
{
	"message": "User created successfully",
	"body": {
		"userData": {
			"_id": "62f40e341232226682194584",
			"username": "saurabh21suthar"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY0MGUzNDEyMzIyMjY2ODIxOTQ1ODQiLCJpYXQiOjE2NjAxNjE1ODgsImV4cCI6MTY2MDI0Nzk4OH0.7U9dF1NAxR7yxzKy2h-6m-nC7lNZptEgWZuEvCH6g2E"
	}
}
```

## Login User

### Request

`POST` `http://localhost:3000/v1/login` <br>
Body:

```
{
    "email": "launchpad5682@gmail.com",
    "password": "qwerty1234"
}
```

### Response <br>

```
{
	"message": "Successfully authenticated",
	"body": {
		"userData": {
			"_id": "62f0b70da479bcb412945aaf",
			"username": "launchpad5682"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYwYjcwZGE0NzliY2I0MTI5NDVhYWYiLCJpYXQiOjE2NjAxNTAzMTQsImV4cCI6MTY2MDIzNjcxNH0.phHbB7zwEBoBc2ut4TaxTJ4ziHmaLtB6nOCayeDLqXM"
	}
}
```

## Get All Todos

### Request

`GET` `http://localhost:3000/v1/todos/:username`<br>
Header: <br>

```
authorization: "add_token_here"
```

Body:

```

```

### Response

```

```

## Add Todo

### Request

`POST` `http://localhost:3000/v1/todo`<br>
Header: <br>

```
authorization: "add_token_here"
```

Body:

```

```

### Response

```

```

## Update Todo

### Request

`PUT` `http://localhost:3000/v1/todo` <br>
Header: <br>

```
authorization: "add_token_here"
```

Body:

```

```

### Response

```

```

## Delete Todo

### Request

`DELETE` `http://localhost:3000/v1/todo` <br>
Header: <br>

```
authorization: "add_token_here"
```

Body:

```
{
    "_id": "todo_id"
}
```

### Response

```
{
    "message": "Successfully deleted"
}
```

## Development Mode

- Clone the project.
- Use `npm install` to install all the required packages.
- Start project in `dev mode` with live server and hot-reload using `npm run dev`.

## Production mode

- Add the github link to any service provider like Heroku or while deploying using bare metal like AWS EC2 then add the following environment variables to the project.

```
JWT_SECRET="add secret here"
JWT_EXPIRES_IN="add expiration here"
MONGODB_URI="add mongoose uri here"
```
