import * as express from "express";
import { db } from "../config";

const router = express.Router();

router.get("/", async (req, res) => {
  const uid = res.locals.uid;
  try {
    const userRecordRef = db.collection("users").doc(uid).collection("records");
    const snapshot = await userRecordRef.orderBy("createdAt", "desc").get();
    const records = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(records);
  } catch (error) {
    res.status(500).send({ error: "Authentication is Failed" });
  }
});

export default router;
