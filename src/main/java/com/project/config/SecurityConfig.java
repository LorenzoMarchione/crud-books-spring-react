package com.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // desactiva CSRF para permitir peticiones desde el frontend
                .cors().and() // 🔥 habilita el soporte CORS dentro de Spring Security
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/books/**").permitAll() // 🔥 permite acceso sin login a /books
                        .anyRequest().authenticated()
                )
                .httpBasic(); // mantiene autenticación básica si después querés rutas seguras
        return http.build();
    }
}
