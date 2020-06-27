package com.tef.serviceProvided.rest;

import com.tef.serviceProvided.model.entity.Cliente;
import com.tef.serviceProvided.model.entity.Servico;
import com.tef.serviceProvided.model.repository.ClienteRepository;
import com.tef.serviceProvided.model.repository.ServicoRepository;
import com.tef.serviceProvided.rest.dto.ServicoDTO;
import com.tef.serviceProvided.util.BigDecimalConverter;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("api/servicos")
@RequiredArgsConstructor
public class ServicoController
{

	private final ClienteRepository clienteRepository;
	private final ServicoRepository servicoRepository;
	private final BigDecimalConverter bigDecimalConverter;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Servico insert(@RequestBody ServicoDTO servicoDTO){
		LocalDate date = LocalDate.parse(servicoDTO.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
		Integer idCliente = servicoDTO.getIdCliente();
		//Pode existir ou não
		Cliente cliente = clienteRepository
			.findById(idCliente)
			.orElseThrow(() -> new ResponseStatusException(
			HttpStatus.BAD_REQUEST,"Cliente inexistente"));

		Servico servico = new Servico();
		servico.setDescricao(servicoDTO.getDescricao());
		servico.setDate(date);
		servico.setCliente(cliente);
		servico.setPrice(bigDecimalConverter.converter(servicoDTO.getPreco()));

		return servicoRepository.save(servico);

	}
}
