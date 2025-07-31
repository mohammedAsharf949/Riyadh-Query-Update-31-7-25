﻿// JavaScript source code
define(["esri/layers/FeatureLayer"], function (FeatureLayer) {
  return {
    wallSearch: function (WallfeatureLaery, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      WallfeatureLaery.definitionExpression = Query;
      WallfeatureLaery.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " بئر";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    MousqesSearch: function (FeatureLayerobj, Muni, CurrentSituation) {
      var Query = "";
      if (Muni != "") {
        Query = "MUNICIPALITYARNAME=N'" + Muni + "'";
      } else {
        Query = "1=1";
      }
      if (CurrentSituation != "") {
        Query += " and CurrentSituation =N'" + CurrentSituation + "'";
      } else {
        Query += "and 1=1";
      }

      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " مسجد";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.MosqueName;
          ResaultSelect.appendChild(option);
        }
      });
    },
    GrdensSearch: function (FeatureLayerobj, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    GrdensProjectsSearch: function (GrdensProjectsFeatureLayer, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      GrdensProjectsFeatureLayer.definitionExpression = Query;
      GrdensProjectsFeatureLayer.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    GovermentSearch: function (FeatureLayerobj, Muni) {
      var Query = "";
      if (Muni != "") {
        Query = "Municipality=N'" + Muni + "'";
      } else {
        Query = "1=1";
      }

      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.NO;
          option.label = features[i].attributes.GovernmentalLocationName;
          ResaultSelect.appendChild(option);
        }
      });
    },
    EnvironmentalSearch: function (
      FeatureLayerobj,
      Muni,
      FacilityStatus,
      ActualActivity,
      MainActivity,
      Nationality
    ) {
      FeatureLayerobj.definitionExpression = "";
      FeatureLayerobj.refresh();
      var Query = "";
      if (Muni != "") {
        Query = "MUNICIPALITYARNAME=N'" + Muni + "'";
      } else {
        Query = "1=1";
      }
      if (FacilityStatus != "") {
        Query += " and FacilityStatus =N'" + FacilityStatus + "'";
      } else {
        Query += " and 1=1";
      }
      if (ActualActivity != "") {
        Query += " and ActualActivity=N'" + ActualActivity + "'";
      } else {
        Query += " and 1=1";
      }
      if (MainActivity != "") {
        Query += " and MainActivity=N'" + MainActivity + "'";
      } else {
        Query += " and 1=1";
      }
      if (Nationality != "") {
        Query += " and Nationality=N'" + Nationality + "'";
      } else {
        Query += " and 1=1";
      }

      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.FormNumber;
          option.label = features[i].attributes.NameOnThePlate;
          ResaultSelect.appendChild(option);
        }
      });
    },
    CameraSearch: function (FeatureLayerobj, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    LandfillsSearch: function (FeatureLayerobj, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    PedestrianPathsSearch: function (FeatureLayerobj, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    promotionServicesSearch: function (FeatureLayerobj, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    CemeteriesSearch: function (FeatureLayerobj, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    proposedParksSearch: function (FeatureLayerobj, Muni) {
      var Query = "Municipality=N'" + Muni + "'";
      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },
    /*  CofeeSearch: function (FeatureLayerobj, Muni, Type, Status) {
      var Query = "";
      if (Muni != "") {
        Query = "MUNICIPALITYARNAME=N'" + Muni + "'";
      } else {
        Query = "1=1";
      }
      if (Type != "") {
        Query += " and Nickname =N'" + Type + "'";
      } else {
        Query += "and 1=1";
      }
      if (Status != "") {
        Query += " and Status =N'" + Status + "'";
      } else {
        Query += "and 1=1";
      }

      FeatureLayerobj.definitionExpression = Query;
      FeatureLayerobj.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " موقع";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.Serial;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },*/
    /* TopacooShopesSearch: function (WallfeatureLaery, Muni) {
      var Query = "MUNICIPALITYARNAME=N'" + Muni + "'";
      WallfeatureLaery.definitionExpression = Query;
      WallfeatureLaery.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " محل";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.serial;
          option.label = features[i].attributes.name;
          ResaultSelect.appendChild(option);
        }
      });
    },*/
    /* TopacooCofeeSearch: function (WallfeatureLaery, Muni) {
      var Query = "MUNICIPALITYARNAME=N'" + Muni + "'";
      WallfeatureLaery.definitionExpression = Query;
      WallfeatureLaery.queryFeatures().then(function (results) {
        // prints the array of result graphics to the console
        var features = results.features;
        document.getElementById("ResultTxt").innerHTML =
          "الاجمالى " + results.features.length + " مقهى";
        let ResaultSelect = document.getElementById("ResaultSelect");
        ResaultSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "";
        option.label = "إختار";
        ResaultSelect.appendChild(option);
        for (var i = 0; i < results.features.length; i++) {
          var option = document.createElement("option");
          option.value = features[i].attributes.OBJECTID_12_13_14;
          option.label = features[i].attributes.Name;
          ResaultSelect.appendChild(option);
        }
      });
    },*/

    //-------------------------------------------------------------------
    GoTo: function (view, map, layerId, ID) {
      var layer = map.findLayerById(layerId);
      if (!layer) {
        console.error("Layer not found with ID: ", layerId);
        return;
      }
      var QueryTxt = "";
      switch (layerId) {
        case "weels": // was "0"
          QueryTxt = "OBJECTID=" + ID;
          break;
        case "mosques": // was "1"
          QueryTxt = "OBJECTID=" + ID;
          break;
        case "gardens": // was "2"
          QueryTxt = "ID=" + ID;
          break;
        case "gardensProjects": // was "3"
          QueryTxt = "OBJECTID =" + ID;
          break;
        case "government": // was "4"
          QueryTxt = "NO=" + ID;
          break;
        case "environmental": // was "5"
          QueryTxt = "FormNumber=" + ID;
          break;
        // case "6" for "GardenssurfaceProjectsFL" was missing
        case "cameras": // was "7"
          QueryTxt = "OBJECTID=" + ID;
          break;
        case "coffee": // was "8"
          QueryTxt = "Serial=" + ID;
          break;
        case "tobaccoCoffee": // was "9"
          QueryTxt = "OBJECTID_12_13_14=" + ID;
          break;
        case "tobaccoShops": // was "10"
          QueryTxt = "serial=" + ID;
          break;
        case "landfills": // was "11"
          QueryTxt = "OBJECTID=" + ID;
          break;
        case "pedestrianPaths":
          QueryTxt = "OBJECTID=" + ID;
          break;
        case "promotionServices":
          QueryTxt = "OBJECTID=" + ID;
          break;
        case "cemeteries":
          QueryTxt = "OBJECTID=" + ID;
          break;
        case "proposedParks":
          QueryTxt = "OBJECTID=" + ID;
          break;
      }

      if (!QueryTxt) {
        console.error("No query text defined for layer ID:", layerId);
        return;
      }
      // url to the layer of interest to query
      let query = layer.createQuery();
      query.where = QueryTxt;
      query.returnGeometry = true;
      layer.queryFeatures(query).then(function (response) {
        view.goTo(
          {
            target: response.features[0].geometry,
            zoom: 18,
            heading: 0,
            tilt: 45,
          },
          {
            animate: true,
          }
        );
        //   view.popup.open({
        //     location: response.features[0].geometry});
      });
    },
  };
});
