    Back-end (Node.js):

[x] данные представляют собой список пользователей (файл users.json) и статистику пользования сайтом (файл users_statistic.json)
[x] разработать функционал выборки списка пользователей и информации о них (файл users и файл users_statistic (для выгрузки информации total_clicks и total_page_views)) с постраничной навигацией (количество пользователей и текущая страница приходит в запросе с Front-end)
[x] разработать функционал выборки данных статистики (файл users_statistic) по id пользователя с возможностью фильтрации по дате (“от” и “до” приходит в запросе)
[x] перед выборкой данных должна выполняться проверка на существование пользователя в файле users

    Front-end (React):

Главная страница:
[] сверстать главную страницу приложения по макету (ссылка ниже)
Страница списка пользователей:
создать страницу списка пользователей, на которой будет размещена таблица со списком пользователей и информацией о них, полученная с API (поля которые должны быть в таблице: id, first_name, last_name, email, gender, ip_address, total_clicks, total_page_views)
[] на странице должна быть реализована постраничная навигация
[] максимальное количество пользователей на странице 50
[] при нажатии на строку в таблице происходит переход на страницу пользователя (пример роута /user/:id)
Страница пользователя:
[] на странице пользователя должна отображаться две диаграммы со статистикой пользователя по полям page_views и clicks
[] статистика пользователя должна отображаться в виде линейной диаграммы.
[] если в данных пользователя отсутствует значение за какую-то дату, это значит page_views и clicks отсутствовали в этот день и они равны 0
[] по умолчанию выводится статистика за неделю, но должна быть предусмотрена возможность выбора промежутка “от” и “до”.
