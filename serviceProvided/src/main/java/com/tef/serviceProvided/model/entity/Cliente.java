package com.tef.serviceProvided.model.entity;



import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
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
    @NotEmpty(message = "{campo.name.obrigatorio}")
    private String name;

    @Column(nullable = false ,length = 11)
    @NotNull(message = "{campo.cpf.obrigatorio}")
    @CPF(message = "{campo.cpf.invalid}")
    private String cpf;

    @Column(updatable = false)
    @JsonFormat( pattern = "dd/MM/yyyy")
    private Date dateCreate;

    @PrePersist
    public void prePersist(){
        setDateCreate(new Date());
    }

}
