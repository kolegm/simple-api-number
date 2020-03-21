# simple-api-number
Simple API - receives as an input an integer number

URL: http://localhost:3000/input/:number

### Specifications:
1. Given a web endpoint "/GET", create an API that will receive as an input an integer number.
2. If the integer is a multiple of 3, it should return "P",
3. If the integer is a multiple of 5, it should return "E",
4. If the integer is a multiple of both 3 and 5, then both "PE" should be displayed.
otherwise the provided integer should be returned.
5. If the value sent is not an integer return an appropriate response
6. The output of the API should be in JSON.

### Examples
```curl
curl http://localhost:3000/input/300
```
Idempotent result: {"outcome":"PE","requested":"300","message":"Success! You have provided number: 300"}

```curl
curl http://localhost:3000/input/0
```
Idempotent result: {"outcome":"PE","requested":"0","message":"Success! You have provided number: 0"}


Availability test
```curl
culr http://localhost:3000/ping
```
Idempotent result: {"message":"ping > pong"}

You can call as well
```curl
culr http://localhost:3000
```
Redirecting to <a href="/input">/input</a>
