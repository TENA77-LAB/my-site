@echo off
chcp 65001 >nul
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo.
  echo [Ошибка] Команда npm не найдена. Установите Node.js с https://nodejs.org/
  echo Затем снова запустите этот файл.
  echo.
  pause
  exit /b 1
)

echo.
echo Устанавливаю зависимости (при необходимости)...
call npm install
if errorlevel 1 (
  echo Ошибка npm install
  pause
  exit /b 1
)

echo.
echo Собираю сайт в папку "site"...
call npm run build
if errorlevel 1 (
  echo Ошибка сборки
  pause
  exit /b 1
)

echo.
echo Открываю site\index.html в браузере...
start "" "%~dp0site\index.html"

echo Готово. В следующий раз можно просто открывать site\index.html двойным щелчком.
echo.
pause
