# Test project

Создано с использованием этих технологий
<table>
    <tr>
        <td>
            <a href="https://laravel.com"></a>
        </td>
        <td>
            <a href="https://vuejs.org/"></a>
        </td>
        <td>
            <a href="https://tailwindcss.com/"></a>
        </td>
    </tr>
</table>


## Установка

#### Backend
1. Клонировать проект
2. Перейдите в корневой каталог проекта
3. Установить зависимости Run `composer install`
4. Создать БД
5. Скопируйте `.env.example` в файл `.env` и настройте параметры
6. Миграция БД
    - php artisan migrate;
    - php artisan db:seed
7. Запустите `php artisan serve`, чтобы запустить проект по адресу http://localhost:8000

#### Frontend
1. Перейдите в папку `vue` с помощью терминала
2. Запустите `npm install`, чтобы установить зависимости проекта vue.js
3. Скопируйте `vue/.env.example` в `vue/.env` и укажите URL API
4. Запустите frontend, запустив `npm run dev`
5. Открыть http://localhost:3000

