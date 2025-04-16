package com.example.springboot_assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloControllerr {
    @Autowired
    private GreetingService greetingService;

    @GetMapping("/api/hello")
    public String sayHello() {
        return greetingService.getGreeting();
    }
}
