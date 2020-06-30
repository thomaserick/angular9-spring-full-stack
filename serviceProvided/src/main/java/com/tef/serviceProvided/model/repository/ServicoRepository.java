package com.tef.serviceProvided.model.repository;

import com.tef.serviceProvided.model.entity.Servico;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ServicoRepository extends JpaRepository<Servico,Integer> {

	@Query(" SELECT s FROM Servico s JOIN s.cliente c" +
		" WHERE UPPER(c.name) LIKE UPPER(:name) AND MONTH(s.date) = :mes ")
	List<Servico> findByNameClientMes(@Param("name") String name,@Param("mes") Integer mes);
}
