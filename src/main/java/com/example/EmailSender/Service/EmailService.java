package com.example.EmailSender.Service;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;
 public  void sendLoginNotification(String email)
   {
       SimpleMailMessage message = new SimpleMailMessage();
       message.setTo(email);
       message.setSubject("Login Successful");
       message.setText("You have logged in successfully.");
       mailSender.send(message);

   }

  public void sendContactForm(String name ,String email ,String Message) throws Exception
  {
      Context context = new Context();
      context.setVariable("name" ,name);
      context.setVariable("email",email);
      context.setVariable("message",Message);
      context.setVariable("time", LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));

      String htmlContent = templateEngine.process("contact-template", context);

      MimeMessage message = mailSender.createMimeMessage();
      MimeMessageHelper helper = new MimeMessageHelper(message, true);
      helper.setTo(email);
      helper.setSubject("Contact Form Confirmation");
      helper.setText(htmlContent, true);
      mailSender.send(message);

  }

    public void sendDailyEmail() {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("recipient@example.com"); // can be dynamic
        message.setSubject("Daily Scheduled Email");
        message.setText("This is your daily email sent at 9 AM.");
        mailSender.send(message);
    }
}
