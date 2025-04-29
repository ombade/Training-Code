package com.example.EmailSender.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class SechuleService {

    @Autowired
    private EmailService emailService;

    @Scheduled(cron = "0 0 9 * * *")
    public void sendDailyMail() {
        emailService.sendDailyEmail("ombade365@gmail.com");
    }
}
