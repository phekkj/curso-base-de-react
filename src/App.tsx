interface ICardProps {
  title: string
  children: React.ReactNode
}
const Card = (props: ICardProps) => {
  return (
    <div className="card">
      <span>Title: {props.title}</span>

      <div>
        {props.children}
      </div>

      <div>
        Footer
      </div>

    </div>
  )
}

export function App() {
  return (
    <div>
      <h1>Olá, mundo!</h1>

      <p>Card:</p>

      <Card title='teste'>
        Abacate
      </Card>
    </div>  
  )
}
