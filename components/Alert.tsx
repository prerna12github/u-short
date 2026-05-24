import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertTitle,
} from "../components/ui/alert"

export function AlertBasic() {
  return (
    <Alert className="max-w-md bg-gray-800 border-gray-700">
      <CheckCircle2Icon className="text-green-400" />
      <AlertTitle className="text-gray-200">Copied to clipboard!</AlertTitle>
    </Alert>
  )
}
