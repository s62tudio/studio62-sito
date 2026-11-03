@echo off
title Studio62 - localhost
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo  Node.js non e' installato.
  echo  Scaricalo da https://nodejs.org ^(versione LTS^), installalo e poi riapri questo file.
  echo.
  start "" https://nodejs.org
  pause
  exit /b
)
start "" cmd /c "timeout /t 2 >nul & start http://localhost:4321"
node --watch-path=./src scripts/dev.js
pause
