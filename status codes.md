# Status Codes

Status codes waa lambaro uu server-ku soo celiyo marka request la diro.

Si fudud:
- `2xx` waxay ka dhigan tahay wax walba way shaqeeyeen
- `4xx` waxay ka dhigan tahay qalad user ama request-ka
- `5xx` waxay ka dhigan tahay qalad server-ka

## Status Codes-ka Ugu Badan

### 200 OK

Wax walba waa sax.

Tusaale:
- data waa la helay
- update waa shaqeeyay

### 201 Created

Wax cusub ayaa la sameeyay.

Tusaale:
- user cusub ayaa la daray
- assignment cusub ayaa la sameeyay

### 204 No Content

Request-ku wuu shaqeeyay, laakiin wax data ah lama soo celin.

Tusaale:
- delete wuu shaqeeyay, laakiin response body ma jiro

### 400 Bad Request

Request-ka si sax ah looma dirin.

Tusaale:
- body-ga waa khalad
- field loo baahnaa maqan

### 401 Unauthorized

User-ku ma uusan login-gareyn ama token ma hayo.

### 403 Forbidden

User-ku waa la yaqaan, laakiin fasax uma haysto.

### 404 Not Found

Waxa la raadinayay lama helin.

Tusaale:
- `id`-ga la diray ma jiro

### 500 Internal Server Error

Server-ka dhexdiisa ayaa qalad ka dhacay.

### 502 Bad Gateway

Server kale oo lala xiriiro ayaa si khaldan uga jawaabay.

### 503 Service Unavailable

Server-ku hadda diyaar ma aha.

Tusaale:
- server-ku wuu mashquulsan yahay
- maintenance ayuu ku jiraa

## Kuwa Project-kan Hadda Isticmaalo

Project-kan hadda waxa uu si toos ah u isticmaalayaa:
- `200 OK`
- `404 Not Found`

