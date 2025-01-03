const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
sidebar.classList.toggle("collapsed");
document.querySelector("main").classList.toggle("collapsed");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  document.querySelector("main").classList.toggle("collapsed");
});

// Toggle Statistik
document.getElementById("toggle-statistics").addEventListener("click", () => {
  const statisticsSection = document.getElementById("statistics-section");
  const mapsSection = document.querySelector(".webgis-content");

  statisticsSection.classList.toggle("collapsed");

  if (statisticsSection.classList.contains("collapsed")) {
    mapsSection.style.flex = "1";
  } else {
    mapsSection.style.flex = "0.25";
  }
});

// get element
var suhu1 = document.getElementById("suhu-titik1");
var suhu2 = document.getElementById("suhu-titik2");
var suhu3 = document.getElementById("suhu-titik3");
var suhu4 = document.getElementById("suhu-titik4");
var suhu5 = document.getElementById("suhu-titik5");
var suhu6 = document.getElementById("suhu-titik6");
var suhu7 = document.getElementById("suhu-titik7");
var suhu8 = document.getElementById("suhu-titik8");
var suhu9 = document.getElementById("suhu-titik9");

var kelembaban1 = document.getElementById("kelembaban-titik1");
var kelembaban2 = document.getElementById("kelembaban-titik2");
var kelembaban3 = document.getElementById("kelembaban-titik3");
var kelembaban4 = document.getElementById("kelembaban-titik4");
var kelembaban5 = document.getElementById("kelembaban-titik5");
var kelembaban6 = document.getElementById("kelembaban-titik6");
var kelembaban7 = document.getElementById("kelembaban-titik7");
var kelembaban8 = document.getElementById("kelembaban-titik8");
var kelembaban9 = document.getElementById("kelembaban-titik9");

// fetch data
function fetchData() {
  var apiUrl =
  "https://api.thingspeak.com/channels/2796682/feeds/last.json?timezone=Asia%2FJakarta&api_key=K8FSLU271NV6B31C";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);
      suhu1.innerText = parseFloat(data.field4).toFixed(2);
      kelembaban1.innerText = parseFloat(data.field3).toFixed(2);
      document.getElementById("coordinate1").innerText = data.field1 + " | " + data.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data.field1}&lon=${data.field2}&format=json`
      )
        .then((response) => response.json())
        .then((dataLoc) => {
          
          document.getElementById("type1").innerText = dataLoc.type;
          document.getElementById("address1").innerText = dataLoc.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl2 =
  "https://api.thingspeak.com/channels/2796685/feeds/last.json?timezone=Asia%2FJakarta&api_key=2ZWSARYU16BMI5SG";

  fetch(apiUrl2)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu2.innerText = parseFloat(data2.field4).toFixed(2);
      kelembaban2.innerText = parseFloat(data2.field3).toFixed(2);
      document.getElementById("coordinate2").innerText = data2.field1 + " | " + data2.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data2.field1}&lon=${data2.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc2) => {
          
          document.getElementById("type2").innerText = dataLoc2.type;
          document.getElementById("address2").innerText = dataLoc2.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl3 =
    "https://api.thingspeak.com/channels/2796686/feeds/last.json?timezone=Asia%2FJakarta&api_key=F3D91183ZRGSTVIJ";

  fetch(apiUrl3)
    .then((response3) => response3.json())
    .then((data3) => {
      console.log("Response JSON:", data3);

      suhu3.innerText = parseFloat(data3.field4).toFixed(2);
      kelembaban3.innerText = parseFloat(data3.field3).toFixed(2);
      document.getElementById("coordinate3").innerText = data3.field1 + " | " + data3.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data3.field1}&lon=${data3.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc3) => {
          document.getElementById("type3").innerText = dataLoc3.type;
          document.getElementById("address3").innerText = dataLoc3.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));

    var apiUrl4 =
    "https://api.thingspeak.com/channels/2784707/feeds/last.json?timezone=Asia%2FJakarta&api_key=ZCDJCJMU2H2S60PI";
  
  fetch(apiUrl4)
    .then((response4) => response4.json())
    .then((data4) => {
      console.log("Response JSON:", data4);
  
      // Update suhu, kelembaban, dan koordinat berdasarkan data dari API
      suhu4.innerText = parseFloat(data4.field4).toFixed(2);
      kelembaban4.innerText = parseFloat(data4.field4).toFixed(2);
      document.getElementById("coordinate4").innerText = data4.field1 + " | " + data4.field2;
  
      // Lakukan fetch ke Nominatim untuk data lokasi
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data4.field1}&lon=${data4.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc4) => {
          // Update lokasi dan tipe lokasi
          document.getElementById("type4").innerText = dataLoc4.type;
          document.getElementById("address4").innerText = dataLoc4.display_name;
  
          // Update link ke Google Maps
          document.getElementById("go-to-maps4").href =
            `https://www.google.com/maps?q=${data4.field1},${data4.field2}`;
        })
        .catch((error) => console.error("Error fetching location data:", error));
    })
    .catch((error) => console.error("Error fetching data:", error));  
  
      // API URL Titik 5
    var apiUrl5 = "https://api.thingspeak.com/channels/2796689/feeds/last.json?timezone=Asia%2FJakarta&api_key=RWKR6XO4VQPD01PU";

    fetch(apiUrl5)
      .then((response5) => response5.json())
      .then((data5) => {
        console.log("Response JSON:", data5);

        suhu5.innerText = parseFloat(data5.field4).toFixed(2);
        kelembaban5.innerText = parseFloat(data5.field3).toFixed(2);
        document.getElementById("coordinate5").innerText = data5.field1 + " | " + data5.field2;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data5.field1}&lon=${data5.field2}&format=json`
        )
          .then((response2) => response2.json())
          .then((dataLoc5) => {
            document.getElementById("type5").innerText = dataLoc5.type || "Unknown";
            document.getElementById("address5").innerText = dataLoc5.display_name || "Unknown";
            document.getElementById("go-to-maps5").href =
              `https://www.google.com/maps?q=${data5.field1},${data5.field2}`;
          })
          .catch((error) => console.error("Error fetching location data:", error));
      })
      .catch((error) => console.error("Error fetching data:", error));

    // API URL Titik 6
    var apiUrl6 = "https://api.thingspeak.com/channels/2796691/feeds/last.json?timezone=Asia%2FJakarta&api_key=CTZUFD46VRFHH7UG";

    fetch(apiUrl6)
      .then((response6) => response6.json())
      .then((data6) => {
        console.log("Response JSON:", data6);

        suhu6.innerText = parseFloat(data6.field4).toFixed(2);
        kelembaban6.innerText = parseFloat(data6.field3).toFixed(2);
        document.getElementById("coordinate6").innerText = data6.field1 + " | " + data6.field2;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data6.field1}&lon=${data6.field2}&format=json`
        )
          .then((response2) => response2.json())
          .then((dataLoc6) => {
            document.getElementById("type6").innerText = dataLoc6.type || "Unknown";
            document.getElementById("address6").innerText = dataLoc6.display_name || "Unknown";
            document.getElementById("go-to-maps6").href =
              `https://www.google.com/maps?q=${data6.field1},${data6.field2}`;
          })
          .catch((error) => console.error("Error fetching location data:", error));
      })
      .catch((error) => console.error("Error fetching data:", error));

    // API URL Titik 7
    var apiUrl7 = "https://api.thingspeak.com/channels/2796692/feeds/last.json?timezone=Asia%2FJakarta&api_key=5445YLSO4B28BWAA";

    fetch(apiUrl7)
      .then((response7) => response7.json())
      .then((data7) => {
        console.log("Response JSON:", data7);

        suhu7.innerText = parseFloat(data7.field4).toFixed(2);
        kelembaban7.innerText = parseFloat(data7.field3).toFixed(2);
        document.getElementById("coordinate7").innerText = data7.field1 + " | " + data7.field2;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data7.field1}&lon=${data7.field2}&format=json`
        )
          .then((response2) => response2.json())
          .then((dataLoc7) => {
            document.getElementById("type7").innerText = dataLoc7.type || "Unknown";
            document.getElementById("address7").innerText = dataLoc7.display_name || "Unknown";
            document.getElementById("go-to-maps7").href =
              `https://www.google.com/maps?q=${data7.field1},${data7.field2}`;
          })
          .catch((error) => console.error("Error fetching location data:", error));
      })
      .catch((error) => console.error("Error fetching data:", error));

    // API URL Titik 8
    var apiUrl8 = "https://api.thingspeak.com/channels/2796693/feeds/last.json?timezone=Asia%2FJakarta&api_key=W2Z3WH4YSW3IUVLX";

    fetch(apiUrl8)
      .then((response8) => response8.json())
      .then((data8) => {
        console.log("Response JSON:", data8);

        suhu8.innerText = parseFloat(data8.field4).toFixed(2);
        kelembaban8.innerText = parseFloat(data8.field3).toFixed(2);
        document.getElementById("coordinate8").innerText = data8.field1 + " | " + data8.field2;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data8.field1}&lon=${data8.field2}&format=json`
        )
          .then((response2) => response2.json())
          .then((dataLoc8) => {
            document.getElementById("type8").innerText = dataLoc8.type || "Unknown";
            document.getElementById("address8").innerText = dataLoc8.display_name || "Unknown";
            document.getElementById("go-to-maps8").href =
              `https://www.google.com/maps?q=${data8.field1},${data8.field2}`;
          })
          .catch((error) => console.error("Error fetching location data:", error));
      })
      .catch((error) => console.error("Error fetching data:", error));

    // API URL Titik 9
    var apiUrl9 = "https://api.thingspeak.com/channels/2796705/feeds/last.json?timezone=Asia%2FJakarta&api_key=L25N9NVPQ02EBJ7Q";

    fetch(apiUrl9)
      .then((response9) => response9.json())
      .then((data9) => {
        console.log("Response JSON:", data9);

        suhu9.innerText = parseFloat(data9.field4).toFixed(2);
        kelembaban9.innerText = parseFloat(data9.field3).toFixed(2);
        document.getElementById("coordinate9").innerText = data9.field1 + " | " + data9.field2;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data9.field1}&lon=${data9.field2}&format=json`
        )
          .then((response2) => response2.json())
          .then((dataLoc9) => {
            document.getElementById("type9").innerText = dataLoc9.type || "Unknown";
            document.getElementById("address9").innerText = dataLoc9.display_name || "Unknown";
            document.getElementById("go-to-maps9").href =
              `https://www.google.com/maps?q=${data9.field1},${data9.field2}`;
          })
          .catch((error) => console.error("Error fetching location data:", error));
      })
      .catch((error) => console.error("Error fetching data:", error));
}

fetchData();