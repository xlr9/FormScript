@echo off
chcp 65001 >nul
title FormScript - AI Clarification Bridge

echo.
echo ========================================================
echo       🚀 Starting FormScript (AI Form Bridge)
echo ========================================================
echo.

:: 1. Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not found in PATH!
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: 2. Check if node_modules exists, install dependencies if missing
if not exist "node_modules\" (
    echo [INFO] Dependencies not found. Installing packages with npm...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
    echo [SUCCESS] Dependencies installed successfully!
)

:: 3. Open browser automatically after a short delay in background
start "" /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"

:: 4. Start Node.js server
echo.
echo [INFO] Starting FormScript server on http://localhost:3000 ...
echo [INFO] Press Ctrl+C in this window anytime to stop the server.
echo.

node server.js

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Server stopped with an error!
    pause
)
