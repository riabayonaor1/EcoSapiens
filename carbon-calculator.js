
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculator-form').addEventListener('submit', function(e) {
        e.preventDefault();
    
        // Obtener los valores del formulario
        var transport = document.getElementById('transport').value;
        var energyConsumption = document.getElementById('energy-consumption').value;
        var consumptionHabits = document.getElementById('consumption-habits').value;
    
        // Implementar la lógica de cálculo de la huella de carbono
        var carbonFootprint = calculateCarbonFootprint(transport, energyConsumption, consumptionHabits);
        var tips = generateTips(carbonFootprint);
    
        // Mostrar los resultados y consejos
        document.getElementById('results').innerText = 'Tu huella de carbono es: ' + carbonFootprint + ' kg de CO2 al año. ' + tips;
    });
    
    function calculateCarbonFootprint(transport, energy, habits) {
        var carbonFootprint = 0;
        var transportEmissions = {
            car: 0.21, // kg de CO2 por km
            publicTransport: 0.05, // kg de CO2 por km
            bike: 0,
            walk: 0
        };
        var dailyDistance = 10; // km
        carbonFootprint += dailyDistance * 365 * transportEmissions[transport]; // kg de CO2 al año
        
        var energyEmissionsFactor = 0.233; // kg de CO2 por kWh
        carbonFootprint += energy * 12 * energyEmissionsFactor; // consumo mensual
        
        var habitsFactor = {
            low: 0.9,
            average: 1,
            high: 1.1
        };
        carbonFootprint *= habitsFactor[habits];
        
        return Math.round(carbonFootprint * 100) / 100;
    }
    
    function generateTips(carbonFootprint) {
        var tips = "";
        if (carbonFootprint > 2000) {
            tips = "Considera utilizar más el transporte público y reducir el uso del coche. También podrías invertir en energías renovables para tu hogar.";
        } else if (carbonFootprint > 1000) {
            tips = "Buen trabajo, pero aún hay margen de mejora. Intenta reducir el consumo de energía en tu hogar con electrodomésticos de bajo consumo.";
        } else {
            tips = "¡Estás haciendo un gran trabajo en mantener baja tu huella de carbono! Mantén tus hábitos sostenibles y promueve acciones verdes entre amigos y familiares.";
        }
        return tips;
    }
    
});


