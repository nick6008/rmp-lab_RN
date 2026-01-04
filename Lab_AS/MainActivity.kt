package com.example.labAS  // заменить на ваш пакет

import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.example.labn32.databinding.ActivityMainBinding
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {

    // Инициализируем binding (современный способ вместо findViewById)
    private lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Настройка Binding
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Обработка нажатия на кнопку (например, с id buttonSubmit)
        binding.bFind.setOnClickListener {
            processForm()
        }
    }

    private fun processForm() {
        // Получаем текст из EditText (id: editCity)
        val city = binding.editCity.text.toString().trim()

        // Простая проверка на пустой ввод
        if (city.isEmpty()) {
            // Показываем предупреждение
            binding.editCity.error = "Введите название города"
            Toast.makeText(this, "Поле не может быть пустым", Toast.LENGTH_SHORT).show()
        } else {
            val titlw = getString(R.string.title)
            // Выводим результат в TextView (id: textResult)
            val resultText = "$titlw: $city"
            binding.textRes.text = resultText
            // обрабатываем запрос API
//            fetchWeather(city, 53.9, 27.5667, binding.textRes)
//            fetchWeather(city, 53.6287, 23.8942, binding.textRes)

            // Очищаем поле после ввода
            binding.editCity.text?.clear()

            // Логируем для отладки
            println("DEBUG: Данные формы обработаны успешно")

        }
    }

    private fun fetchWeather(city : String, latitude: Double, longitude: Double,
                             textRes: TextView) {
        lifecycleScope.launch {
            try {
                val response = RetrofitClient.weatherApi.getCurrentWeather(latitude, longitude)
                val weather = response.current_weather
                var tempText= "Температура: ${weather.temperature}°C\nВетер: ${weather.windspeed} км/ч"
                textRes.text="$city: \n $tempText"
            } catch (e: Exception) {
                textRes.text = "Ошибка: ${e.message}"
            }
        }
    }
}
