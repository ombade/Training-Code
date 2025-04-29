package com.example.EmailSender.Controller;

import com.example.EmailSender.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController

public class MailController {
@Autowired
    EmailService emailService;

    private final Map<String, String> users = Map.of(
            "ombade365@gmail.com", "password123",
            "admin@example.com", "adminpass"
    );

    @PostMapping("login")
    public String login(@RequestParam String email, @RequestParam String password) {
        if (users.containsKey(email) && users.get(email).equals(password)) {
            emailService.sendLoginNotification(email);
            return "Login successful. Email sent.";
        }
        return "Invalid credentials.";
    }

    @PostMapping("/contact")
    public String contact(@RequestParam String name,
                          @RequestParam String email,
                          @RequestParam String message) {
        try {
            emailService.sendContactForm(name, email, message);
            return "Contact form submitted. Confirmation email sent.";
        } catch (Exception e) {
            return "Error sending email.";
        }
    }
}
