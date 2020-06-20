package com.tef.serviceProvided.rest;

import com.tef.serviceProvided.model.entity.Cliente;
import com.tef.serviceProvided.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("http://localhost:4200")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente insert(@Valid @RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @GetMapping("{id}")
    public Cliente findById(@PathVariable(value = "id") Integer id) {
        return clienteRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente não encontrado!"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") Integer id) {
        clienteRepository
                .findById(id)
                .map(cliente -> {
                    clienteRepository.delete(cliente);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente não encontrado!"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@Valid @PathVariable(value = "id") Integer id, @RequestBody Cliente clienteUpdate) {
        clienteRepository.findById(id).map(cliente -> {
           cliente.setName(clienteUpdate.getName());
           cliente.setCpf(clienteUpdate.getCpf());
            return clienteRepository.save(clienteUpdate);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente não encontrado!"));

    }


}
