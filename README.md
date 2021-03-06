![alt text](https://raw.github.com/danielfeelfine/ivmostra-app/master/icon.png "IV Mostra") IV Mostra
============
### [Iniciando](#iniciando)  &nbsp; [Como testar](#como-testar)  &nbsp; [Reportar Bugs](https://github.com/ABS-org/ivmostra-app/search?q=&type=Issues)

> Aplicativo Mobile da 4º edição da Mostra de Atenção Básica à Saúde.


| **Devices**            | **Inches**    | **Resolution**  | **PPI** | **Pixel Ratio** | **Ok?** |
| ---------------------- |:-------------:|:---------------:|:-------:|:---------------:|:-------:|
| iPhone 3GS             | 3.5           | 320 x 480       | 163     | 1               |√        |
| iPod Touch 4           | 3.5           | 640 x 960       | 326     | 2               |√        |
| iPod Touch 5           | 4             | 640 x 1136      | 326     | 2               |√        |
| iPhone 4               | 3.5           | 640 x 960       | 326     | 1.5             |√        |
| iPhone 4S              | 3.5           | 640 x 960       | 326     | 2               |√        |
| iPhone 5               | 4             | 640 x 1136      | 326     | 2               |√        |
| iPhone 5C              | 4             | 640 x 1136      | 326     | 2               |√        |
| iPhone 5S              | 4             | 640 x 1136      | 326     | 2               |√        |
| iPad Mini 1            | 7.9           | 768 x 1024      | 163     | 1               |√        |
| iPad Mini 2            | 7.9           | 1536 x 2048     | 264     | 2               |√        |
| iPad 1                 | 9.7           | 768 x 1024      | 132     | 1               |√        |
| iPad 2                 | 9.7           | 768 x 1024      | 132     | 1               |√        |
| iPad 3                 | 9.7           | 1536 x 2048     | 264     | 2               |√        |
| iPad Air               | 9.7           | 1536 x 2048     | 264     | 2               |√        |
| Galaxy S Plus (I9001)  | 4             | 480 x 800       | 233     | 1.5             |√        |
| Galaxy SII (I9100)     | 4.27          | 480 x 800       | 219     | 1.5             |√        |
| Galaxy SIII (I9300)    | 4.8           | 720 x 1280      | 306     | 2               |√        |
| Galaxy Nexus           | 4.65          | 720 x 1280      | 316     | 2               |√        |
| Galaxy S4 (I9500)      | 5             | 1080 x 1920     | 441     | 3               |√        |
| LG Nexus 4 E960        | 4.7           | 768 x 1280      | 318     | 2               |√        |
| Galaxy Ace             | 3.5           | 320 x 480       | 164     | 1               |√        |
| Galaxy Gio (GT-S5660)  | 3.2           | 320 x 480       | 180     | 1               |√        |
| Galaxy Y (S5360)       | 3.0           | 240 x 320       | 133     | 1               |√        |

*Veja [aqui](http://mobile.smashingmagazine.com/2013/03/21/responsive-web-design-with-physical-units/) ou [aqui](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density) o tamanho de tela do seu device e adicione-o!*


## Iniciando

1. Instale os pacotes do [Node.js](http://nodejs.org/)
2. Instale as dependências do [Bower](http://bower.io/)
3. Compile as sources com o [Grunt](http://gruntjs.com/)

```
$ npm install
$ bower install
$ grunt
```

*Após qualquer modificação nas sources, é feita compilação automática e refresh com LiveRealod.*


## Como testar

É possível renderizar o App direto no browser, executando o ```www/index.html```
Para testar no device, é preciso antes fazer o ```build``` para a plataforma desejada.

Adicione a(s) plataforma(s):

iOS ```$ cordova platform add ios```
Android ```$ cordova platform add android```

Adicione os plugins:

[Geolocation](https://cordova.apache.org/docs/en/3.0.0/cordova_geolocation_geolocation.md.html)
```$ cordova plugin add org.apache.cordova.geolocation```

[Camera](https://cordova.apache.org/docs/en/3.0.0/cordova_camera_camera.md.html)
```$ cordova plugin add org.apache.cordova.camera```

[InAppBrowser](http://cordova.apache.org/docs/en/3.0.0/cordova_inappbrowser_inappbrowser.md.html)
```$ cordova plugin add org.apache.cordova.inappbrowser```

Faça o Build: ```$ cordova build```


## Copyright

© ABS-org - [IV Mostra](http://www.mostrasaude.net/)
