import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import MultiStepForm from "./MultiStepForm.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MultiStepForm />
  </StrictMode>
)
