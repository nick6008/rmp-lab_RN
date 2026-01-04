package com.example.labAS  // заменить на ваш пакет

data class OpenMeteoResponse(
    val latitude: Double,  // Широта запроса
    val longitude: Double,  // Долгота запроса
    val generationtime_ms: Double,  // Время генерации ответа (мс)
    val utc_offset_seconds: Int,  // Смещение UTC (сек)
    val timezone: String,  // Часовой пояс (например, "Europe/Minsk")
    val timezone_abbreviation: String,  // Аббревиатура (например, "MSK")
    val elevation: Double,  // Высота над уровнем моря (м)
    val current_weather: CurrentWeather  // Вложенный объект с текущей погодой
)

data class CurrentWeather(
    val temperature: Double,  // Температура (°C)
    val windspeed: Double,  // Скорость ветра (км/ч)
    val winddirection: Double,  // Направление ветра (градусы)
    val weathercode: Int,  // Код погоды (0=ясно, 1=малооблачно и т.д.)
    val time: String  // Время измерения (ISO8601)
)

