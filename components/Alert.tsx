import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertTitle,
} from "../components/ui/alert"

export function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Copied to clipboard!</AlertTitle>
    </Alert>
  )
}
