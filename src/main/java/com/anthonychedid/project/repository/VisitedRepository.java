package com.anthonychedid.project.repository;

import com.anthonychedid.project.model.Visited;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitedRepository extends JpaRepository<Visited, Long> {
}
