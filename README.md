# Assignments Backend

Mashruucan waa backend yar oo lagu dhisay `Node.js` iyo `Express`.

Ujeedadiisu waa in lagu barto backend-ka aasaasiga ah sida:
- samaynta server
- qorista routes
- soo bandhigista data
- wax ka beddelka data
- tirtirista data

Data-da mashruucan waxa lagu hayaa array ku jira code-ka, sidaas darteed database lama isticmaalin.

## Waxa Uu Project-kan Qabtaa

Project-kan waxa uu maamulaa assignments yar yar. Assignment kasta waxa uu leeyahay:
- `id`
- `title`
- `status`
- `score`

## Sida Loo Shido

1. Ku fur project-ka terminal.
2. Ku qor:

```bash
npm install
```

3. Kadib shid server-ka:

```bash
npm run dev
```

4. Haddii uu shaqaynayo waxaad arki doontaa:

```bash
Server is running on port 8000
```

## Server Link

```text
http://localhost:8000
```

## Routes-ka Jira

### 1. Home

`GET /`

Route-kan waxa uu sheegayaa in backend-ku socdo.

Jawaabta:

```text
Assignments backend is running
```

### 2. Soo Qaado Assignments-ka

`GET /assignments`

Route-kan waxa uu soo celinayaa assignments-ka oo dhan.

### 3. Update Garee Assignment

`PATCH /assignments/:id`

Route-kan waxa uu wax ka beddelayaa assignment adigoo isticmaalaya `id`.

Tusaale body:

```json
{
  "status": "completed",
  "score": 90
}
```

### 4. Delete Garee Assignment

`DELETE /assignments/:id`

Route-kan waxa uu tirtirayaa assignment-ka aad dooratay.

## Sida Loo Tijaabiyo

Waxaad ku tijaabin kartaa:
- `Postman`
- `Thunder Client`
- browser-ka qaybta `GET`

## Fiiro Gaar Ah

Maadaama data-du ku jirto array:
- wax walba waa ku meel gaar
- haddii server-ka dib loo shido, data-dii hore way soo noqonaysaa

