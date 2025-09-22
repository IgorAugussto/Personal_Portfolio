package com.igoraugusto.portfolio.api_email.service;

import com.igoraugusto.portfolio.api_email.DTO.ContactFormDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;


public class EmailServiceTeste {

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private EmailService emailService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSendEmail_Success() {
        // Arrange: Preparar dados de entrada
        ContactFormDTO form = new ContactFormDTO();
        form.setFirstName("João");
        form.setLastName("Silva");
        form.setEmail("joao@example.com");
        form.setSubject("Teste");
        form.setMessage("Olá, isso é um teste.");

        // Act: Executar o método
        emailService.sendEmail(form);

        // Assert: Verificar se o e-mail foi "enviado" corretamente
        ArgumentCaptor<SimpleMailMessage> messageCaptor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(mailSender).send(messageCaptor.capture());

        SimpleMailMessage capturedMessage = messageCaptor.getValue();
        assertEquals("seuemail@dominio.com", capturedMessage.getTo()[0]);
        assertEquals("Nova mensagem de contato: Teste", capturedMessage.getSubject());
        assertEquals(
                "Nome: João Silva\nEmail: joao@example.com\n\nMensagem:\nOlá, isso é um teste.",
                capturedMessage.getText()
        );
    }

    @Test
    void testSendEmail_EmptyFields() {
        // Arrange: Dados incompletos para testar resiliência
        ContactFormDTO form = new ContactFormDTO();
        form.setFirstName("");
        form.setLastName("");
        form.setEmail("");
        form.setSubject("");
        form.setMessage("");

        // Act: Executar
        emailService.sendEmail(form);

        // Assert: Verificar se ainda envia, mas com campos vazios (não quebra)
        ArgumentCaptor<SimpleMailMessage> messageCaptor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(mailSender).send(messageCaptor.capture());

        SimpleMailMessage capturedMessage = messageCaptor.getValue();
        assertEquals("seuemail@dominio.com", capturedMessage.getTo()[0]);
        assertEquals("Nova mensagem de contato: ", capturedMessage.getSubject());
        assertEquals("Nome:  \nEmail: \n\nMensagem:\n", capturedMessage.getText());
    }
}
