package com.tef.serviceProvided.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServicoDTO
{
	private String descricao;
	private String preco;
	private String data;
	private Integer idCliente;

}
