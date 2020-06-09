package com.tef.serviceProvided.model.repository;

import com.tef.serviceProvided.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
