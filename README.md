# simple-api-number
Simple API - receives as an input an integer number

URL: http://localhost:3000/input/:number

Example 2 of usage
```curl
curl http://localhost:3000/input/300
```
Idempotent result: {"outcome":"PE","requested":"300","message":"Success! You have provided number: 300"}


Example 2 of usage
```curl
curl http://localhost:3000/input/0
```
Idempotent result: {"outcome":"PE","requested":"0","message":"Success! You have provided number: 0"}


Simple test of availability
```curl
culr http://localhost:3000/ping
```
Idempotent result: {"message":"ping > pong"}
