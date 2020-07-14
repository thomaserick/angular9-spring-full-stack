package com.tef.serviceProvided.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    @NotEmpty(message="{campo.login.obrigatorio}")
    private String username;

    @Column
    @NotEmpty(message="{campo.password.obrigatorio}")
    private String password;



}
