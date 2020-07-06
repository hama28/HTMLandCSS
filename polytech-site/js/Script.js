var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["HTML&CSS", "JavaScript", "Linux", "PHP", "Java"],
        datasets: [{
            label: 'apples',
            backgroundColor: "rgba(153,255,51,0.4)",
            borderColor: "rgba(153,255,51,1)",
            data: [25, 25, 25, 25, 25]
        }]
    },
    options: {
        title: {
            fontSize: 18,
            text: "タイトル"
        },
        layout: {
            padding: {
                left: 100,
                right: 100,

            }
        }
    }
});


var ctx = document.getElementById("canvas").getContext("2d");
var myBar = new Chart(ctx, {
    type: 'bar',                           //◆棒グラフ
    data: {                                //◆データ
        labels: ['A','B','C','D','E'],     //ラベル名
        datasets: [{                       //データ設定
            data: [5,20,11,2,30],          //データ内容
            backgroundColor: ['#FF4444', '#4444FF', '#44BB44', '#FFFF44', '#FF44FF']   //背景色
        }]
    },
    options: {                             //◆オプション
        responsive: true,                  //グラフ自動設定
        legend: {                          //凡例設定
            display: false                 //表示設定
        },
        title: {                           //タイトル設定
            display: true,                 //表示設定
            fontSize: 18,                  //フォントサイズ
            text: 'タイトル'                //ラベル
        },
        scales: {                          //軸設定
            yAxes: [{                      //y軸設定
                display: true,             //表示設定
                scaleLabel: {              //軸ラベル設定
                   display: true,          //表示設定
                   labelString: '縦軸ラベル',  //ラベル
                   fontSize: 18               //フォントサイズ
                },
                ticks: {                      //最大値最小値設定
                    min: 0,                   //最小値
                    max: 30,                  //最大値
                    fontSize: 18,             //フォントサイズ
                    stepSize: 5               //軸間隔
                },
            }],
            xAxes: [{                         //x軸設定
                display: true,                //表示設定
                barPercentage: 0.4,           //棒グラフ幅
                categoryPercentage: 0.4,      //棒グラフ幅
                scaleLabel: {                 //軸ラベル設定
                   display: true,             //表示設定
                   labelString: '横軸ラベル',  //ラベル
                   fontSize: 18               //フォントサイズ
                },
                ticks: {
                    fontSize: 18             //フォントサイズ
                },
            }],
        },
        layout: {                             //レイアウト
            padding: {                          //余白設定
                left: 100,
                right: 50,
                top: 0,
                bottom: 0
            }
        }
    }
});

particlesJS("particles-js", {"particles":{"number":{"value":5,"density":{"enable":true,"value_area":1183.721462448409}},"color":{"value":"#545872"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":120,"random":true,"anim":{"enable":true,"speed":14.617389821424212,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;