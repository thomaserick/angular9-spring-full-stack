package com.tef.serviceProvided;

import com.tef.serviceProvided.model.entity.Cliente;
import com.tef.serviceProvided.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class ServiceProvidedApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceProvidedApplication.class, args);
    }
}

