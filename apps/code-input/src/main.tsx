import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import CodeInput from "./CodeInput.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CodeInput />
  </StrictMode>
)
