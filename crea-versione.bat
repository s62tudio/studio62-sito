@echo off
title Studio62 - crea versione da pubblicare
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js non e' installato: scaricalo da https://nodejs.org
  pause
  exit /b
)
node scripts/build.js
if errorlevel 1 (
  echo.
  echo Qualcosa e' andato storto: copia il messaggio qui sopra e mandalo a Claude.
  pause
  exit /b
)
echo.
echo  Fatto. La cartella "dist" contiene il sito pronto.
echo  Trascinala su https://www.cloudflare.com/drop per avere un link da condividere.
echo.
explorer dist
start "" https://www.cloudflare.com/drop
pause
