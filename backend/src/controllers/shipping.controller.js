/**
 *
 * Endpoint methods
 */
const ObjectId = require("mongoose").Types.ObjectId;
const { Shipping } = require("../models/Shipping");
const axios = require("axios");
const xml2js = require("xml2js");

// Cost Shipping
async function costShipping(req, res) {
  let data = req.body;

  const queryString = new URLSearchParams();

  queryString.append("cuit", "30-53625919-4");
  queryString.append("operativa", 64665);
  queryString.append("pesototal", data.weight);
  queryString.append("volumentotal", data.volume_total);
  queryString.append("codigopostalorigen", data.cp_origin);
  queryString.append("codigopostaldestino", data.cp_destination);
  queryString.append("valordeclarado", data.declared_value);
  queryString.append("cantidadpaquetes", data.quantity);

  try {
    /*   Example
  const xmlBody = {
      cuit: "30-53625919-4",
      operativa: 64665,
      PesoTotal: 0.7,
      volumentotal: 1,
      codigopostalorigen: 1408,
      codigopostaldestino: 1410,
      cantidadpaquetes: 1,
      valordeclarado: 1500,
    }; */

    await axios
      .post(
        "http://webservice.oca.com.ar/ePak_tracking/Oep_TrackEPak.asmx/Tarifar_Envio_Corporativo?wsdl",
        queryString,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        xml2js.parseString(res.data, { mergeAttrs: true }, (err, result) => {
          // ...
          console.log(
            result.DataSet["diffgr:diffgram"][0].NewDataSet[0].Table[0]
              .Precio[0]
          );
          data = {
            precio:
              result.DataSet["diffgr:diffgram"][0].NewDataSet[0].Table[0]
                .Precio[0],
            plazoEntrega:
              result.DataSet["diffgr:diffgram"][0].NewDataSet[0].Table[0]
                .PlazoEntrega[0],
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error, "error");
    return res.status(404).json(error);
  }
}

async function newShipping(req, res) {
  let data = req.body;

  try{
    return res.status(200).json("Aceptado");

  } catch(e){
    console.log(e)
  }
}

async function getLabel(req, res) {
  let data = req.body;

  try{
    return res.status(200).json("Aceptado");

  } catch(e){
    console.log(e)
  }
}

async function cancelShipping(req, res) {
  let data = req.body;

  try{
    return res.status(200).json("Aceptado");

  } catch(e){
    console.log(e)
  }
}


async function statuShipping(req, res) {
  let data = req.body;

  try{
    return res.status(200).json("Aceptado");

  } catch(e){
    console.log(e)
  }
}

async function historyShipping(req, res) {
  let data = req.body;

  try{
    return res.status(200).json("Aceptado");

  } catch(e){
    console.log(e)
  }
}

module.exports = {
  costShipping,
  newShipping,
  getLabel,
  cancelShipping,
  statuShipping,
  historyShipping
};
