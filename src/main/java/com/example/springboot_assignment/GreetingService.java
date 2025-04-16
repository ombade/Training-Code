package com.example.springboot_assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GreetingService {

    @Autowired
    private GreetingRepo greetingRepo;

    public String getGreeting(){
        return  greetingRepo.sayHello();
    }

}