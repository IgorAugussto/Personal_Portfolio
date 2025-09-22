package com.igoraugusto.portfolio.api_email.service;

import com.igoraugusto.portfolio.api_email.DTO.ContactFormDTO;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(ContactFormDTO form) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("seuemail@dominio.com"); // destinatário
        message.setSubject("Nova mensagem de contato: " + form.getSubject());
        message.setText(
                "Nome: " + form.getFirstName() + " " + form.getLastName() + "\n" +
                        "Email: " + form.getEmail() + "\n\n" +
                        "Mensagem:\n" + form.getMessage()
        );

        mailSender.send(message);
    }
}
