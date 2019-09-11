package com.stackroute.recommendedqueryservice.service;

import com.stackroute.recommendedqueryservice.domain.Domain;
import com.stackroute.recommendedqueryservice.domain.Idea;
import com.stackroute.recommendedqueryservice.domain.IdeaHamster;
import com.stackroute.recommendedqueryservice.domain.SubDomain;
import com.stackroute.recommendedqueryservice.repository.IdeaRecommendationRepository;
import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class RecommendedIdeaServiceImpl implements RecommendedIdeaService {
    private IdeaRecommendationRepository ideaRecommendationRepository;

    @Autowired
    public RecommendedIdeaServiceImpl(IdeaRecommendationRepository ideaRecommendationRepository) {
        this.ideaRecommendationRepository = ideaRecommendationRepository;
    }

    @Override
    public List<Idea> findBySkill(String name) {
       return ideaRecommendationRepository.findBySkill(name);
    }

    @Override
    public List<Idea> findByRole(String ideaName) {
        return ideaRecommendationRepository.findByRole(ideaName);
    }

    @Override
    public List<Idea> findByWorkedOnIdea(String name, String rname) {
        return ideaRecommendationRepository.findByWorkedOnIdea(name, rname);
    }

    @Override
    public List<Idea> findByAppliedOnIdea(String name, String rname) {
        return ideaRecommendationRepository.findByAppliedOnIdea(name, rname);
    }


}
