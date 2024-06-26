package io.kraparesh.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.kraparesh.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
