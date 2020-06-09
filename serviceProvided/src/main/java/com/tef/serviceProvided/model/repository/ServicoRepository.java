package com.tef.serviceProvided.model.repository;

import com.tef.serviceProvided.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico,Integer> {
}
