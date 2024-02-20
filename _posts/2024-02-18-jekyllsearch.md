---
layout: post
tags: [jekyll, javascript]
title: Как реализовать простой поиск в своем блоге Jekyll?
description: Существует множество способов включения поиска на ваш веб-сайт Jekyll. Некоторые из них сложны в реализации, другие просты. Одним из таких инструментов является Simple Jekyll Search.
---
Существует множество способов включения поиска на ваш веб-сайт Jekyll. Некоторые из них сложны в реализации, другие просты. Одним из таких инструментов является Simple Jekyll Search.

### Преимущества
- Легкий вес
- Отображает мгновенные результаты поиска
- Легко реализовать
- Простой процесс отладки

### Предварительные условия
- JSON-файл, например [search.json](https://github.com/gautriv/gautriv.github.io/blob/main/search.json) .
- HTML-элементы для панели поиска, например [search.html](https://github.com/gautriv/gautriv.github.io/blob/main/_includes/search.html) .
- Файл JavaScript, например, [search-script.js](https://github.com/gautriv/gautriv.github.io/blob/main/js/search-script.js) .

### Процедуры
1. Добавьте search.json к себе в корневую директорию. Место, где находится файл index.html.
2. Добавьте search-script.js в папку js, если он у вас есть, в противном случае добавьте его в свой домашний каталог.
3. Добавьте search.html в свою папку _includes.

<span class="uk-label"> Примечание.</span> Обновите файл search.html , указав точное расположение файлов search.json и search-script.js .

Добавьте search.html в то место, где вы хотите, чтобы ваша система отображала панель поиска или функциональные возможности.
