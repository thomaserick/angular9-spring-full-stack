package com.tef.serviceProvided.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.util.Date;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,length = 150)
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;

    private BigDecimal price;

    private LocalDate date;

    @Column(updatable = false)
    @JsonFormat( pattern = "dd/MM/yyyy")
    private Date dateCreate;

    @PrePersist
    public void prePersist(){
        setDateCreate(new Date());
    }
}
