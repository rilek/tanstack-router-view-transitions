import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/folders/$folder/')({
  component: () => <div>Hello /$folder/!</div>
})