package com.tef.serviceProvided.model.entity;



import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,length = 150)
    private String name;

    @Column(nullable = false ,length = 11)
    private String cpf;

    @Column
    @JsonFormat( pattern = "dd/MM/yyyy")
    private Date dateCreate;

    @PrePersist
    public void prePersist(){
        setDateCreate(new Date());
    }

}
