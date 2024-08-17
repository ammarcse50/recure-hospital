

exports.getAppointment = async(req,res)=>{

    const result = await appointmentCollection.find().toArray()
    res.send(result)
}

exports.saveAppointment=async (req, res) => {
    const appoint = req.body;

    const query = { email: appoint?.email };
    const exist = await appointmentCollection.findOne(query);
    if (exist) {
      res.send({ message: "appointment already  booked once!",insertedId:null });
    }
    const result = await appointmentCollection.insertOne(appoint);
    res.send(result);
  }