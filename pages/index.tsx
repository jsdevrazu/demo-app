import { Button, Timer, Modal} from "@/app/components";
import { useState } from "react";

export default function Home() {

  const [open, setOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  function handlePrev() {
    if (step == 2) {
      setStep(1)
      setIsEnd(false)
    }
    else if (step == 3) {
      setStep(2)
      setIsEnd(false)
    }
  }

  function handleNext() {
    if (step == 1) {
      setStep(2)
      setIsEnd(false)
    }
    else if (step == 2) {
      setStep(3)
      setIsEnd(true)
    }
  }

  function closeModal() {
    setOpen(!open)
    setStep(1)
    setIsEnd(false)
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Button title="Open Modal" onClick={() => setOpen(true)} />
      {open && <Modal onClose={closeModal}>
        {step == 1 && <h1 style={{ textAlign: "center" }}>this is popup step 1</h1>}
        {step == 2 && <Timer />}
        {step == 3 && <h1 style={{ textAlign: "center" }}>The assignment is complete!</h1>}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
          {step != 1 && <Button title="Prev" onClick={handlePrev} />}
          {!isEnd ? <Button title="Next Step" onClick={handleNext} /> : <Button title="Close Modal" onClick={closeModal} />}
        </div>
      </Modal>}
    </div>
  )
}


