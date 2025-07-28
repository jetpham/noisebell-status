import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface StatusProps {
  status: 'open' | 'closed'
}

export function Status({ status }: StatusProps) {
  const isOpen = status === 'open'
  
  const statusConfig = {
    open: {
      title: 'Open',
      description: "It's time to start hacking.",
      image: 'https://raw.githubusercontent.com/jetpham/noisebell/refs/heads/webhooks/media/open.png',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    closed: {
      title: 'Closed',
      description: "We'll see you again soon.",
      image: 'https://raw.githubusercontent.com/jetpham/noisebell/refs/heads/webhooks/media/closed.png',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  }

  const config = statusConfig[status]

  return (
    <Card className={`${config.bgColor} ${config.borderColor} border-2 inline-block w-fit min-w-[300px]`}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex-1">
          <CardTitle className={`text-2xl font-bold ${config.color}`}>
            {config.title}
          </CardTitle>
          <CardDescription className="text-base">
            {config.description}
          </CardDescription>
        </div>
        <div className="flex-shrink-0 ml-4 flex items-center">
          <img 
            src={config.image} 
            alt={`A knife switch in the ${config.title} position`}
            className="h-full max-h-[60px] w-auto object-contain"
          />
        </div>
      </CardHeader>
    </Card>
  )
} 