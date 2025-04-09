package com.buses.models;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "buses")
@Getter
@Setter
@NoArgsConstructor
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String numeroBus;

    @Column(nullable = false, unique = true)
    private String placa;

    @Column(nullable = false)
    private LocalDateTime fechaCreacion = LocalDateTime.now();

    private String caracteristicas;

    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;

    @Column(nullable = false)
    private Boolean activo = true;

    public Bus(String numeroBus, String placa, String caracteristicas, Marca marca, Boolean activo) {
        this.numeroBus = numeroBus;
        this.placa = placa;
        this.caracteristicas = caracteristicas;
        this.marca = marca;
        this.activo = activo;
    }
    

}
