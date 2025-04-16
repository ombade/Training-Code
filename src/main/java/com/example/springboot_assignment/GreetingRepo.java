package com.example.springboot_assignment;

import org.springframework.stereotype.Repository;

@Repository
public class GreetingRepo {
    public String sayHello(){
        return "Hello, World!";
    }
}