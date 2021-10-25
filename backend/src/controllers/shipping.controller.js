/**
 *
 * Endpoint methods
 */
const ObjectId = require("mongoose").Types.ObjectId;
const { Shipping } = require("../models/Shipping");
const axios = require("axios");

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
    console.log(queryString);
    await axios
      .post(
        "http://webservice.oca.com.ar/ePak_tracking/Oep_TrackEPak.asmx/Tarifar_Envio_Corporativo",
        queryString,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(typeof res.data);
        data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  costShipping,
};
