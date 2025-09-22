package com.igoraugusto.portfolio.api_email.controller;

import com.igoraugusto.portfolio.api_email.DTO.ContactFormDTO;
import com.igoraugusto.portfolio.api_email.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contact")
public class ContactFormController {

    private final EmailService emailService;

    public ContactFormController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<String> sendContactForm(@RequestBody ContactFormDTO form) {
        emailService.sendEmail(form);
        return ResponseEntity.ok("Mensagem enviada com sucesso!");
    }

}
