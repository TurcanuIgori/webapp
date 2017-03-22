package com.library.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.library.entity.Genre;

@Repository
public interface GenreRepository  extends JpaRepository<Genre, Long>{

	@Transactional(propagation = Propagation.SUPPORTS)
	List<Genre> findAll();
	
	@Transactional(propagation = Propagation.REQUIRED)
	Genre save(Genre genre);
	
	@Transactional(propagation = Propagation.SUPPORTS)
	Genre findGenreById(Long id);

}
