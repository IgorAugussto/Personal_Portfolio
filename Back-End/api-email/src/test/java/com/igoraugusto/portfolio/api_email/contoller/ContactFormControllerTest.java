package com.igoraugusto.portfolio.api_email.contoller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.igoraugusto.portfolio.api_email.DTO.ContactFormDTO;
import com.igoraugusto.portfolio.api_email.controller.ContactFormController;
import com.igoraugusto.portfolio.api_email.service.EmailService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ContactFormController.class)
public class ContactFormControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean  // Substituição direta de @MockBean
    private EmailService emailService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testSendContactForm_Success() throws Exception {
        // Arrange: Preparar DTO e mockar service
        ContactFormDTO form = new ContactFormDTO();
        form.setFirstName("João");
        form.setLastName("Silva");
        form.setEmail("joao@example.com");
        form.setSubject("Teste");
        form.setMessage("Olá!");

        doNothing().when(emailService).sendEmail(form);

        // Act & Assert: Simular POST e verificar resposta
        mockMvc.perform(post("/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(form)))
                .andExpect(status().isOk())
                .andExpect(content().string("Mensagem enviada com sucesso!"));
    }

    @Test
    void testSendContactForm_InvalidJson() throws Exception {
        // Arrange: JSON inválido
        String invalidJson = "{ invalid json }";

        // Act & Assert: Verificar erro 400
        mockMvc.perform(post("/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidJson))
                .andExpect(status().isBadRequest());
    }
}
