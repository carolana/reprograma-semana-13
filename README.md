<h1 align="center">
    <br>
    <p align="center">Semana 13 - Integração do Banco de Dados Mongo com API<p>
</h1>

Essa semana fizemos uma API sobre músicas que se comunicava diretamente com o banco de dados (usamos o MongoDB)

![gif "a boy dancing"](musicas/img/dancing.gif)

## Database 

O nosso Database utilizado essa semana foi o {reprograma-musics}

## Novos Documentos

```
db.musics.insertMany([
    {
      "id":"110908332",
      "title":"Light It Up (feat. Nyla & Fuse ODG) (Remix)",
      "artist":"Major Lazer",
      "album":"Light It Up (feat. Nyla & Fuse ODG) (Remix)",
      "duration":"166",
      "launchYear": "2015"
    },
    {
      "id":"125513414",
      "title":"Work from Home",
      "artist":"Fifth Harmony",
      "duration":"214",
      "launchYear": "2016"
    },
    {
      "id":"124550860",
      "title":"I Took A Pill In Ibiza (Seeb Remix)",
      "artist":"Mike Posner",
      "album":"At Night, Alone.",
      "duration":"197",
      "launchYear": "2016"
    },
    {
      "id":"119437608",
      "title":"This Girl (Kungs Vs. Cookin' On 3 Burners)",
      "artist":"Kungs",
      "album":"This Girl (Kungs Vs. Cookin' On 3 Burners)",
      "duration":"195",
      "launchYear": "2009"
    },
    {
      "id":"124237488",
      "title":"CAN'T STOP THE FEELING! (Original Song from DreamWorks Animation's \"TROLLS\")",
      "artist":"Justin Timberlake",
      "album":"CAN'T STOP THE FEELING! (Original Song from DreamWorks Animation's \"TROLLS\")",
      "duration":"236",
      "launchYear": "2016"
    },
    {
      "id":"123883254",
      "title":"This Is What You Came For",
      "artist":"Calvin Harris",
      "album":"This Is What You Came For",
      "duration":"222",
      "launchYear": "2016"
    },
    {
      "id":"120026876",
      "title":"Panda",
      "artist":"Desiigner",
      "album":"Panda",
      "duration":"247",
      "launchYear": "2016"
    },
    {
      "id":"115671688",
      "title":"Cheap Thrills",
      "artist":"Sia",
      "album":"Cheap Thrills",
      "duration":"210",
      "launchYear": "2016"
    },
    {
      "id":"124433692",
      "title":"This One's For You (feat. Zara Larsson) [Official Song UEFA EURO 2016]",
      "artist":"David Guetta",
      "album":"This One's For You (feat. Zara Larsson) [Official Song UEFA EURO 2016]",
      "duration":"207",
      "launchYear": "2016"
    },
    {
      "id":"124603270",
      "title":"One Dance",
      "artist":"Drake",
      "album":"Views",
      "duration":"173",
      "launchYear": "2016"
    },
    {
      "id":"60978718",
      "title":"Diamonds",
      "artist":"Rihanna",
      "album":"Diamonds",
      "duration":"225",
      "launchYear": "2012"
    },
    {
      "id":"126772735",
      "title":"Famous",
      "artist":"Kanye West",
      "album":"The Life Of Pablo",
      "duration":"196",
      "launchYear": "2016"
    }
])
```

## Rotas de consulta, criação, atualização e exclusão para serem utilizadas no Postman:


### Consulta de músicas: 

```
{GET}/musics - retorna TODAS as músicas existentes na base

{GET}/:id - retorna a músicas correspondente àquele ID
```
### Criação de músicas: 

```
{POST}/create - cria uma música

payload:
        title: String,
        artist: String,
        album: String,
        duration: String,
        launchYear: String,

response:
        id: String,
        title: String,
        artist: String,
        album: String,
        duration: String,
        launchYear: String,
```

### Exclusão de uma música: 

```
{DELETE}/delete/id
```

### Atualização de uma música: 
```
{PUT}/update/id

payload:
        title: String,
        artist: String,

response:
        title: String,
        artist: String,
```

### Atualização de um título da música: 

```
{PATCH}/id/updateTitle
```

Arrasta o sofá e vem curtir também :woman_dancing:

![gif the office dancing"](musicas/img/source.gif)