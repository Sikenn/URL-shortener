# URL-shortener

A Freecode camp project for the backend certification

## User Story

1. I can POST to [project_url]/api/shorturl/new and i will receive a shortened
URL in the JSON response like `{original_url: "www.google.com", "short_url":1}`

2. If i pass an invalid URL that doesn't follow the
http(s)://www.example.com(/more/routes) format,the JSON response will contain an
error like `{error: "invalid URL"}`
**HINT:** to be sure that the submitted url points to a valid site you can use
the function `dns.lookup(host, cb)` from the  `dns` core module.

3. When i visit the shortened URL, it will redirect me to my original link.

## Application link
[url-shortener](https://url-shortener-sk.herokuapp.com/)
