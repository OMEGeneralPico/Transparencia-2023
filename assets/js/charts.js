function isScrolledIntoView(elem) {


    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if ($(elem).offset()) {

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    } else {
        return false
    }

}


var chartpresupuestosecre = {}
var inViewpresupuestosecre = false;

function animarpresupuestosecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "presupuestosecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestosecre[idElement]) { continue }
            chartpresupuestosecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestosecre) { return; }
            inViewpresupuestosecre = true;
            return new Chart(ctx, {
                type: 'doughnut',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Asfalto y Caminos', 'No programaticos'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [5.19,5.28,16.91,11.48,28.33,16.71,8.67,5.09,2.35],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                                'rgba(221, 227, 146, 0.2)',
                                'rgba(254, 228, 64, 0.2)',
                                'rgba(53, 20, 49, 0.2)',
                                'rgba(101, 76, 79, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                                'rgba(221, 227, 146, 1)',
                                'rgba(254, 228, 64, 1)',
                                'rgba(53, 20, 49, 1)',
                                'rgba(101, 76, 79, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            anchor: 'end', // remove this line to get label in middle of the bar

                            formatter: (val) => (`${val}%`),
                            labels: {
                                value: {
                                    color: 'blue'
                                }
                            }

                        },

                        title: {
                            display: true,
                            text: 'Presupuesto ejecutado 2023 (%)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewpresupuestosecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpresupuestosecre();

});

$(window).load(function () {


    animarpresupuestosecre();

});


var chartrecursossecre = {}
var inViewrecursossecre = false;

function animarrecursossecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "recursossecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartrecursossecre[idElement]) { continue }
            chartrecursossecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewrecursossecre) { return; }
            inViewrecursossecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Recursos propios', 'Coparticipación', 'Rec. de capital', 'Aportes no reint.'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [1708.47, 2168.28, 19.65, 0],
                            fill: true,
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],
                            borderWidth: 1,
                            borderColor: [
                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Ingresos en 2022 (en millones $ )',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewrecursossecre = false;
        }
    }
}
$(window).scroll(function () {

    animarrecursossecre();

});

$(window).load(function () {


    animarrecursossecre();

});


var chartpersonalsecre = {}
var inViewppersonalsecre = false;

function animarpersonalsecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "personalsecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpersonalsecre[idElement]) { continue }
            chartpersonalsecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewppersonalsecre) { return; }
            inViewppersonalsecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [37,35,174,47,265,199,90,23],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Empleados por secretaría',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpersonalsecre();

});

$(window).load(function () {


    animarpersonalsecre();

});
















var chartsayudas = {}
var inViewayudas = false;






function animarAyuda() {
    for (var i = 0; i < 1; i++) {
        var idElement = "intervencionViolencia";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsayudas[idElement]) { continue }
            chartsayudas[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewayudas) { return; }
            inViewayudas = true;
            return myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                   
                    /* labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], */
                    labels: ['Reincidencia de Casos', 'Derivacion de Instituciones Comunidad', 'Fiscalias de Genero y O.A.V.y.T', 'Demandas Espontaneas', 'Defensoria Civil y Casos de Familia',"Unidad Local y derivacion interna Desarrollo Social"],
                    datasets: [
                        {
                            label: 'Niños y niñas',
                            tension: 0.1,
                            fill: false,

                            data: [23,4,13,3,110,10],
                            borderColor: [

                                'rgba(105, 190, 190, 1)'
                            ],
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(215, 90, 218, 0.2)'],
                            borderWidth: 1
                        },
                     
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                     
                     
                        datalabels: {
                          display: 'auto',
                          formatter: function (value) {
                            return  Math.round((value*10))/10 + '%';
                          },
                          color: 'black',
                          font: {
                             
                           
                            family: 'Raleway'
                          }
                        },
                      
                      title: {
                        display: true,
                        text: 'Casos Enero-Junio 2023',
              
                        align: 'start',
                        font: {
                          family: 'Titillium Web',
                          size: 20,
                        },
                        padding: {
                          top: 10,
                          bottom: 30,
                        },
                      },
                      legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } }
                      }
                    }
                  }
            });

        } else {
            inViewayudas = false;
        }
    }
}

$(window).scroll(function () {

    animarAyuda();

});

$(window).load(function () {


    animarAyuda();

});





var chartsInfantes = {}
var inViewInfantes = false;






function animarInfantes() {
    for (var i = 0; i < 1; i++) {
        var idElement = "infanciatotal";
      
       
        if (isScrolledIntoView('#' + idElement)) {
            console.log(idElement);
            if (chartsInfantes[idElement]) { continue }
            chartsInfantes[idElement] = true;

            var ctx = document.getElementById(idElement);
          
            if (inViewInfantes) { return; }
            inViewInfantes = true;
         
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Arco Iris', 'Frutillitas', 'Burbujitas', 'Mi Infancia','Rebeca'],
                    datasets: [
                        {
                            data: [64,55,58,78,102],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: '',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewInfantes = false;
        }
    }
}

$(window).scroll(function () {

    animarInfantes();

});

$(window).load(function () {


    animarInfantes();

});



var chartsAmbiente = {}
var InViewAmbiente = false;




function animarAmbiente() {
    for (var i = 0; i < 1; i++) {
        var idElement = "materialesAmbiente";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsAmbiente[idElement]) { continue }
            chartsAmbiente[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewAmbiente) { return; }
            InViewAmbiente = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Quirofano Movil', 'Refugio Canino', 'Colegio Veterinario'],
                    datasets: [
                        {
                            data: [366, 376, 1332],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        legend: false,
                        title: {
                            display: true,
                            text: 'Castraciones Realizadas',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });

        } else {
            InViewAmbiente = false;
        }
    }
}

$(window).scroll(function () {

    animarAmbiente();

});

$(window).load(function () {


    animarAmbiente();

});


var chartsGobierno = {}
var InViewGobierno = false;

function animarGobierno() {
    for (var i = 0; i < 1; i++) {
        var idElement = "inspeccionesGobierno";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsGobierno[idElement]) { continue }
            chartsGobierno[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewGobierno) { return; }
            InViewGobierno = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                    datasets: [

                        {
                           
                            data: [11826, 28471, 31477, 38033, 15734, 792],
                            backgroundColor: 'rgba(71, 123, 168, 0.2)',
                            borderColor:'rgba(71, 123, 168, 1)',
                            borderWidth: 1
                        },
                      
                        

                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Chequeos realizados',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewGobierno = false;
        }
    }
}

$(window).scroll(function () {

    animarGobierno();

});

$(window).load(function () {


    animarGobierno();

});

var chartsGobiernove = {}
var InViewGobiernove = false;

function animarGobiernoVehiculo() {
    for (var i = 0; i < 1; i++) {
        var idElement = "inspeccionesGobiernoVe";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsGobierno[idElement]) { continue }
            chartsGobierno[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewGobierno) { return; }
            InViewGobierno = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre ', 'Diciembre'],
                    datasets: [

                        {
                           
                            data: [16629, 18309, 19081, 17954, 17467, 9414],
                            backgroundColor: 'rgba(71, 123, 168, 0.2)',
                            borderColor:'rgba(71, 123, 168, 1)',
                            borderWidth: 1
                        },
                      
                        

                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Chequeos realizados',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewGobierno = false;
        }
    }
}

$(window).scroll(function () {

    animarGobiernoVehiculo();

});

$(window).load(function () {


    animarGobiernoVehiculo();

});


var chartsGobiernoex = {}
var InViewGobiernoex = false;

function animarGobiernoExcentos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "inspeccionesGobiernoEx";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsGobiernoex[idElement]) { continue }
            chartsGobiernoex[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewGobiernoex) { return; }
            InViewGobiernoex = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Frentistas', 'Periodistas', 'Discapacidad', 'Veteranos de Guerra'],
                    datasets: [

                        {
                           
                            data: [137, 66, 158, 14],
                            backgroundColor: 'rgba(63,248,43, 0.2)',
                            borderColor:'rgba(63,248,43, 1)',
                            borderWidth: 1
                        },
                      
                        

                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Dominios Excentos',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewGobiernoex = false;
        }
    }
}

$(window).scroll(function () {

    animarGobiernoExcentos();

});

$(window).load(function () {


    animarGobiernoExcentos();

});
var chartsGobiernoinf = {}
var InViewGobiernoinf = false;

function animarGobiernoInfracciones() {
    for (var i = 0; i < 1; i++) {
        var idElement = "inspeccionesGobiernoInf";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsGobiernoinf[idElement]) { continue }
            chartsGobiernoinf[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewGobiernoinf) { return; }
            InViewGobiernoinf = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre','Diciembre'],
                    datasets: [

                        {
                           
                            data: [1286, 1140, 1049, 984,943,450],
                            backgroundColor: 'rgba(191,44,33, 0.2)',
                            borderColor:'rgba(191,44,33, 1)',
                            borderWidth: 1
                        },
                      
                        

                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                            position: 'top',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Infracciones Realizadas',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    }
                }
            });
        } else {
            InViewGobiernoinf = false;
        }
    }
}

$(window).scroll(function () {

    animarGobiernoInfracciones();

});

$(window).load(function () {


    animarGobiernoInfracciones();

});

var chartsIntendencia = {}
var InViewIntendencia = false;

function animarIntendencia() {
    for (var i = 0; i < 1; i++) {
        var idElement = "legalesIntendencia";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsIntendencia[idElement]) { continue }
            chartsIntendencia[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewIntendencia) { return; }
            InViewIntendencia = true;


            return new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Resoluciones', 'Disposiciones', 'Proyectos de ordenanzas', 'Ordenanzas Promulgadas'],
                    datasets: [

                        {
                            data: [3514, 83 , 50 , 51 ],
                            backgroundColor: [
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(105, 190, 190, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(153, 070, 135,0.2)',
                                'rgba(240, 150, 145,0.2)',
                                'rgba(35, 145, 200,0.2)',],
                                borderColor: [
                                    'rgba(71, 123, 168, 1)',
                                    'rgba(105, 190, 190, 1)',
                                    'rgba(215, 90, 218, 1)',
                                    'rgba(153, 070, 135,1)',
                                    'rgba(240, 150, 145,1)',
                                    'rgba(35, 145, 200,1)',],
                            borderWidth: 1
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Actividades de Asesoría Legal',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                align: 'middle',
                                labels: { font: { family: 'Raleway' } }
                            }
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } },
                        },

                        scales: {
                            xAxes: [{
                                grid: {
                                    display: false,
                                },
                            }]
                        }
                    }
                }
            });

        } else {
            InViewIntendencia = false;
        }
    }
}

$(window).scroll(function () {

    animarIntendencia();

});

$(window).load(function () {


    animarIntendencia();

});

var chartscordones = {}
var inViewcordones = false;
var inViewcordones2 = false;
function animarcordones() {
    for (var i = 0; i < 1; i++) {
        var idElement = "cordones";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartscordones[idElement]) { continue }
            chartscordones[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewcordones) { return; }
            inViewcordones = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['OBRA NUEVA', 'AMPLIACIÓN', 'OBRA Y RELEVAMIENTO', 'TOTAL '],
                    datasets: [
                        {
                            data: [6420.12, 3918.75, 20345.12, 30683.99],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'DISCRIMINACIÓN SEGÚN USOS DE LA CANTIDAD DE METROS CUADRADOS APROBADOS',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewayudas = false;
        }
    }
}
$(window).scroll(function () {

    animarcordones();

});

$(window).load(function () {


    animarcordones();

});


function animarcordones2() {
    for (var i = 0; i < 1; i++) {
        var idElement = "cordones2";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartscordones[idElement]) { continue }
            chartscordones[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewcordones2) { return; }
            inViewcordones2 = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Bacheos Ciudad', 'Vendidos a terceros', 'TOTAL '],
                    datasets: [
                        {
                            data: [84, 349, 433],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Material de Bacheo (toneladas)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewayudas = false;
        }
    }
}
$(window).scroll(function () {

    animarcordones2();

});

$(window).load(function () {


    animarcordones2();

});

var chartseconomiacreditos = {}
var inVieweconomiacreditos = false;

function animareconomiacreditos() {
    for (var i = 0; i < 1; i++) {
        var idElement = "economiacreditos";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartseconomiacreditos[idElement]) { continue }
            chartseconomiacreditos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inVieweconomiacreditos) { return; }
            inVieweconomiacreditos = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Linea Municipal', '2870','2461','Galpón PYM'],
                    datasets: [
                        {
                            data: [13950000.00

                                , 7200000.00,2900000.00, 1600000.00
                            ],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Monto total créditos por tipo ($)',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inVieweconomiacreditos = false;
        }
    }
}
$(window).scroll(function () {

    animareconomiacreditos();

});

$(window).load(function () {


    animareconomiacreditos();

});



var chartsCreditosSector = {}
var inViewCreditosSector = false;

function animarCreditosSector() {
    for (var i = 0; i < 1; i++) {
        var idElement = "CreditosSector";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsCreditosSector[idElement]) { continue }
            chartsCreditosSector[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewCreditosSector) { return; }
            inViewCreditosSector = true;
            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'bar',
                data: {

                    labels: ['Comercio', 'Produccion', 'Servicios'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [26+4,4+2,8+1+3],
                            fill: true,
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Monto total créditos por Sector',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inViewCreditosSector = false;
        }
    }
}
$(window).scroll(function () {

    animarCreditosSector();

});

$(window).load(function () {


    animarCreditosSector();

});
var chartscreditosPorcentaje = {}
var inViewcreditosPorcentaje = false;

function animarCreditosPorcen() {
    for (var i = 0; i < 1; i++) {
        var idElement = "creditosPorcentaje";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartscreditosPorcentaje[idElement]) { continue }
            chartscreditosPorcentaje[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewcreditosPorcentaje) { return; }
            inViewcreditosPorcentaje = true;
            return new Chart(ctx, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: {

                    labels: ['Hombres', 'Mujeres'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [20+7+1,14+2+3],
                            fill: true,
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Porcentaje total créditos por Genero',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: true
                        },
                    }
                }
            });
        } else {
            inViewcreditosPorcentaje = false;
        }
    }
}
$(window).scroll(function () {

    animarCreditosPorcen();

});

$(window).load(function () {


    animarCreditosPorcen();

});

var chartambientezoo = {}
var inViewambientezoo = false;

function animarambientezoo() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ambientezoo";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartambientezoo[idElement]) { continue }
            chartambientezoo[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewambientezoo) { return; }
            inViewambientezoo = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Enero ', 'Febrero ', 'Marzo ','Abril', 'Mayo', 'Junio'],
                    datasets: [
                        {
                            data: [533, 400, 420,697,468,400],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)',
                                'rgba(71, 123, 168, 0.2)',
                                'rgba(215, 90, 218, 0.2)',
                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',

                            ],
                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Cuadras que recibieron mantenimiento',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        },
                        legend: {
                            display: false
                        },
                    }
                }
            });
        } else {
            inVieweconomiacreditos = false;
        }
    }
}
$(window).scroll(function () {

    animarambientezoo();

});

$(window).load(function () {


    animarambientezoo();

});



var chartplanifobras = {}
var inViewplanifobras = false;
var inViewplanifobras2 = false;

function animarplanifobras() {
    for (var i = 0; i < 1; i++) {
        var idElement = "planifobras";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartplanifobras[idElement]) { continue }
            chartplanifobras[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewplanifobras) { return; }
            inViewplanifobras = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ["Obra nueva y ampliación","Estado de obras","Reclamos","Mejoras sin declarar","Usos de suelo","Renuncias y Asignaciones"," Planos escaneados","Obras en Infracción","Antecedentes solicitados","Residencias para ancianos"],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [215,278,7,331,334,20,423,8,453,21],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(215, 90, 218, 0.2)', 'rgba(210, 80, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Inspecciones realizadas',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarplanifobras();

});

$(window).load(function () {


    animarplanifobras();

});

function animarplanifobras2() {
    for (var i = 0; i < 1; i++) {
        var idElement = "planifobras2";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartplanifobras[idElement]) { continue }
            chartplanifobras[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewplanifobras2) { return; }
            inViewplanifobras2 = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ["Obra nueva y ampliación","Estado de obras","Reclamos","Mejoras sin declarar","Usos de suelo","Renuncias y Asignaciones"," Planos escaneados","Obras en Infracción","Antecedentes solicitados","Residencias para ancianos"],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [215,278,7,331,334,20,423,8,453,21],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(215, 90, 218, 0.2)', 'rgba(210, 80, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Inspecciones realizadas',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarplanifobras2();

});

$(window).load(function () {


    animarplanifobras2();

});

var chartmicro = {}
var inviewmicro = false;

function animarmicro() {
    for (var i = 0; i < 1; i++) {
        var idElement = "violenciaDesarrollo";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartmicro[idElement]) { continue }
            chartmicro[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inviewmicro) { return; }
            inviewmicro = true;
            return new Chart(ctx, {
                type: 'doughnut',
                data: {

                    labels: ['Entrevistas', 'Evaluaciones', 'Seguimiento'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [360, 60, 171],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(215, 90, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [
                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Actividades de microcréditos',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarmicro();

});

$(window).load(function () {


    animarmicro();

});
var chartCredit = {}
var inviewCredit = false;

function animarmCreditosDS() {
    for (var i = 0; i < 1; i++) {
        var idElement = "creditosdesarrollo";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartCredit[idElement]) { continue }
            chartCredit[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inviewCredit) { return; }
            inviewCredit = true;
            return new Chart(ctx, {
                type: 'doughnut',
                data: {

                    labels: ['Microcréditos', 'Créditos de recupero', 'Programa Banco de Materiales','Banco de insumos'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [14967973.02
                                , 1700000, 14981330.03,6500000],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(215, 90, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [
                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Actividades de microcréditos ($)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarmCreditosDS();

});

$(window).load(function () {


    animarmCreditosDS();

});
var chartatraques = {}
var InViewatraques = false;

function animaratraques() {
    for (var i = 0; i < 1; i++) {
        var idElement = "atraques";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartatraques[idElement]) { continue }
            chartatraques[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewatraques) { return; }
            InViewatraques = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    /*labels: ['Jurisd. Comunal', 'Otras Jurisd.', 'Ant. Coparticipación', 'Rec. de capital', 'Aportes no reint.'],*/
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'],
                    datasets: [
                        {
                            label: 'Larga distancia',
                            tension: 0.2,
                            fill: false,

                            data: [371, 379, 360, 313, 271, 70],

                            backgroundColor: [

                                'rgba(105, 190, 190, 0.2)'
                            ],

                        },
                        {
                            label: 'Corta y media distancia',
                            tension: 0.2,
                            fill: false,

                            data: [354, 351, 429, 365, 330, 166],

                            backgroundColor: [

                                'rgba(71, 123, 168, 0.2)'
                            ],
                            borderWidth: 1

                        }



                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Atraques en Terminal de Ómnibus ',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });
        } else {
            InViewatraques = false;
        }
    }
}
$(window).scroll(function () {

    animaratraques();

});

$(window).load(function () {


    animaratraques();

});



var chartactcomercio = {}
var inViewactcomercio = false;

function animaractcomercio() {
    for (var i = 0; i < 1; i++) {
        var idElement = "actcomercio";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartactcomercio[idElement]) { continue }
            chartactcomercio[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewactcomercio) { return; }
            inViewactcomercio = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Bajas comerciales', 'Altas comerciales'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [91, 113],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 0.2)', 'rgba(105, 190, 190, 0.2)', 'rgba(105, 170, 180, 0.2)', 'rgba(215, 90, 218, 0.2)',



                                'rgba(240, 150, 145, 0.2)',
                                'rgba(35, 145, 200, 0.2)',
                            ],


                            borderWidth: 1,
                            borderColor: [

                                'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(105, 170, 180, 1)', 'rgba(215, 90, 218, 1',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],

                        }
                    ]
                },
                options: {
                    scales: {
                        y: { ticks: { font: { family: 'Raleway' } } },
                        x: { ticks: { font: { family: 'Raleway' } } }
                    },
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Actividades Dirección de Comercio',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewactcomercio = false;
        }
    }
}
$(window).scroll(function () {

    animaractcomercio();

});

$(window).load(function () {


    animaractcomercio();

});