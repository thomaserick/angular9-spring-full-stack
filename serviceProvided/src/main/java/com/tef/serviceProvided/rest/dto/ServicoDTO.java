package com.tef.serviceProvided.rest.dto;

import javax.validation.constraints.NotEmpty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServicoDTO
{

	@NotEmpty(message = "{campo.descricao.obrigatorio}")
	private String descricao;

	@NotEmpty(message = "{campo.preco.obrigatorio}")
	private String preco;

	@NotEmpty(message = "{campo.data.obrigatorio}")
	private String data;

	@NotEmpty(message = "{campo.cliente.obrigatorio}")
	private Integer idCliente;

}
