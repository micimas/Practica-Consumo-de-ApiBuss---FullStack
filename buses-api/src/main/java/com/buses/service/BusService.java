package com.buses.service;


import com.buses.models.Bus;
import com.buses.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    public Page<Bus> getBuses(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return busRepository.findAll(pageable);
    }

    public Bus getBusById(Long id) {
        return busRepository.findById(id).orElse(null);
    }
}
