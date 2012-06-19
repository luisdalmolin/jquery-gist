# jQuery Gist

O padrão do carregamento de um gist do Github, é utilizando o `documento.write` do javascript. Isso quer dizer que enquanto o `gist` carrega, todo o resto do seu site PARA.

Pra contornar a situação, criei o `jquery.gist`, que é um plugin muito simples pra carregar esses gists por ajax.

```html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="https://gist.github.com/stylesheets/gist/embed.css" type="text/css" />

    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.gist.js"></script>
</head>
<body>
    <div data-gist="2951945"></div>

    <script type="text/javascript">
    (function() {
        $().loadGists();
    })();
    </script>
</body>
</html>
```

Por [Luís Dalmolin](https://plus.google.com/118015701305507171424/posts).