
$("#konversi").on("click", function() {
    
    var suhu = $('#nilai_suhu').val();
    var satuan_suhu = $('#satuan_suhu').val();
    var satuan_ke = $('#satuan_ke').val();

    var hasil = 0;

    if (suhu != "") {
        suhu = parseFloat(suhu);

        // Konversi suhu ke Celsius jika satuan bukan Celsius
        if (satuan_suhu == "fahrenheit") {
            suhu = (suhu - 32) * (5/9);
        } else if (satuan_suhu == "reamur") {
            suhu = suhu * (5/4);
        } else if (satuan_suhu == "kelvin") {
            suhu = suhu - 273.15;
        }

        // Konversi suhu Celsius ke satuan tujuan
        if (satuan_ke == "kelvin") {
            hasil = suhu + 273.15;
        } else if (satuan_ke == "fahrenheit") {
            hasil = (9/5 * suhu) + 32;
        } else if (satuan_ke == "reamur") {
            hasil = (4/5 * suhu);
        } else {
            hasil = suhu;  // Jika satuan tujuan sama
        }


        $('#hasil').val(hasil.toFixed(2));
    }
});


$('#konversi').on('click', function(){
    var suhu = $('#nilai_suhu').val();
    var satuan_suhu = $('#satuan_suhu').val();
    var satuan_ke = $('#satuan_ke').val();

    var formula_suhu = "";

    if (suhu != "") {
        suhu = parseFloat(suhu);

        // Formula Celcius
        if (satuan_suhu == "celsius") {
            if (satuan_ke == "kelvin") {
                formula_suhu = "Kelvin = Suhu Celcius + 273,15";
            } else if (satuan_ke == "fahrenheit") {
                formula_suhu = "Fahrenheit = (9/5) * Suhu Celcius + 32";
            } else if (satuan_ke == "reamur") {
                formula_suhu = "Reamur = (4/5) * Suhu Celcius";
            }
        } 
        // Formula Kelvin
        else if (satuan_suhu == "kelvin") {
            if (satuan_ke == "fahrenheit") {
                formula_suhu = "Fahrenheit = (9/5) * (Kelvin - 273.15) + 32";
            } else if (satuan_ke == "celsius") {
                formula_suhu = "Celcius = Kelvin - 273.15";
            } else if (satuan_ke == "reamur") {
                formula_suhu = "Reamur = (4/5) * (Kelvin - 273.15)";
            }
        } 
        // Formula Fahrenheit
        else if (satuan_suhu == "fahrenheit") {
            if (satuan_ke == "celsius") {
                formula_suhu = "Celcius = (5/9) * (Fahrenheit - 32)";
            } else if (satuan_ke == "kelvin") {
                formula_suhu = "Kelvin = (5/9) * (Fahrenheit - 32) + 273.15";
            } else if (satuan_ke == "reamur") {
                formula_suhu = "Reamur = (4/9) * (Fahrenheit - 32)";
            }
        } 
        // Formula Reamur
        else if (satuan_suhu == "reamur") {
            if (satuan_ke == "celsius") {
                formula_suhu = "Celcius = (Reamur / 0.8)";
            } else if (satuan_ke == "kelvin") {
                formula_suhu = "Kelvin = (Reamur / 0,8) + 273,15";
            } else if (satuan_ke == "fahrenheit") {
                formula_suhu = "Fahrenheit = (Reamur * 2,25) + 32";
            }
        }

        $('#formula_suhu').val(formula_suhu);
    }
});


    // Fungsi Reset
    $('#reset').click(function() {
 
        $('#nilai_suhu').val('');
        $('#hasil').val('');
        $('#formula_suhu').val('');
    });

    // Fungsi Reverse Satuan Suhu dengan Konversi Ke 
    $('#reverse').on('click', function(){
        var satuan_suhu = $('#satuan_suhu').val();
        var satuan_ke = $('#satuan_ke').val();
    

        $('#satuan_suhu').val(satuan_ke);
        $('#satuan_ke').val(satuan_suhu);
    });
    

    
    
    


