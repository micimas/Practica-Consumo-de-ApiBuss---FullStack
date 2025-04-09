package com.buses.config;

import com.buses.models.Bus;
import com.buses.models.Marca;
import com.buses.repository.BusRepository;
import com.buses.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import jakarta.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.InputStream;

@Service
public class LoadData {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private MarcaRepository marcaRepository;

    @PostConstruct
    public void loadBusDataFromCsv() {
        System.out.println("Iniciando carga de datos desde el CSV...");

        try {
            // Verificar si los repositorios están siendo inyectados correctamente
            if (busRepository == null || marcaRepository == null) {
                System.out.println("Error: Los repositorios no están siendo inyectados correctamente.");
                return;
            }

            InputStream inputStream = new ClassPathResource("data/buses.csv").getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            br.readLine();

            while ((line = br.readLine()) != null) {
                String[] fields = line.split(",");

                String numeroBus = fields[0];
                String placa = fields[1];
                String caracteristicas = fields[2];
                String marcaNombre = fields[3];
                boolean activo = Boolean.parseBoolean(fields[4]);

                //verificar si existe
                Marca marca = marcaRepository.findByNombre(marcaNombre)
                        .orElseGet(() -> {
                            Marca newMarca = new Marca(marcaNombre);
                            return marcaRepository.save(newMarca);
                        });

                Bus existingBus = busRepository.findByPlaca(placa).orElse(null);
                if (existingBus != null) {
                    System.out.println("El bus con placa " + placa + " ya existe. Se omitirá la carga.");
                    continue;
                }
                Bus bus = new Bus(numeroBus, placa, caracteristicas, marca, activo);
                busRepository.save(bus);
            }
            System.out.println("Datos de buses cargados desde el archivo CSV.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
