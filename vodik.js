// ==UserScript==
// @name         ChuhanAutoDislike
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Поможем Водику стать мИдийной личностью и почувствовать на себе эту ношу. Авто-Австралия на каждое королевское видео.
// @author       Hexakosioihexekontahexa
// @match        https://www.youtube.com/*
// @icon         https://sun6-22.userapi.com/s/v1/ig2/wodUA55VgWKHS2JgL1nUHzCw9okUJ0QTlJmQhoL0UoD8X24n-iKOjbY9kHG8lIG3uTE5Nb2aIIwhMoPKCjnIW99q.jpg?size=50x50&quality=96&crop=0,464,1008,1008&ava=1
// @grant        none
// ==/UserScript==

setInterval(function() {
    const testSleep = async () => {
        await sleep(5000);
    }
    // Проверяем содержимое элемента <a>
    var linkElement = document.querySelector('a.yt-simple-endpoint.style-scope.yt-formatted-string');

    if ((linkElement && linkElement.textContent.includes("Richi King")) || (linkElement && linkElement.textContent.includes("Ричи Кинг"))) {
        // Проверяем значение атрибута "aria-pressed" для кнопки Next
        var dislikeButton = document.querySelector('#menu .YtDislikeButtonViewModelHost button, #segmented-dislike-button button, #dislike-button button');

        var dislikeStatus = document.querySelector('#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button-view-model > button').getAttribute('aria-pressed');
        if (dislikeStatus === 'false') {
            // Нажимаем на кнопку Next
            console.log("Оказываем поддержку...");
            dislikeButton.click();
            console.log("Австралийская поддержка оказана, хя-хя!");
        } else {
            console.log("Австралийский лайк уже нажат.");
        }
    } else {
        //console.log("Это не Королевский контент/трэш за авторством Водика.");
    }
}, 10000); //Запуск скрипта каждые 10 секунд