'use client'

const GetFireBaseData = async (DBEvento) => {
    try {
      if (!DBEvento || typeof DBEvento !== "string") {
        throw new Error("Invalid DBEvento parameter");
      }
  
      const collectionRef = db.collection(`${DBEvento}`);
      const querySnapshot = await collectionRef.limit(100).get(); // Limit to 100 records
  
      if (querySnapshot.empty) {
        throw new Error(`Sin registros para el evento: ${DBEvento}`);
      }
  
      const records = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((record) => record.EventoEstado !== "eliminado");
  
      records.sort((a, b) => a.Rut.localeCompare(b.Rut));
  
      return records;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error to be caught by the caller
    }
  };

export default GetFireBaseData;