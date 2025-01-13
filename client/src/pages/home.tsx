import { useQuery } from "@tanstack/react-query"

interface Invoice {
  amount: number

  user_id: number

  id: number

  vendor_name: string

  due_date: Date

  created_at: Date

  description: string

  paid: boolean
}

const Home: React.FC = () => {
  const fetchInvoices = async (): Promise<Invoice[]> => {
    const response = await fetch("http://localhost:3000/invoices?user_id=3")
    if (!response.ok) throw new Error("Failed to fetch invoices")
    return response.json()
  }
  const { data, isLoading, error } = useQuery<Invoice[], Error>({
    queryKey: ["invoices"],
    queryFn: fetchInvoices,
  })
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {data?.map(invoice => <li key={invoice.id}>{invoice.vendor_name}</li>)}
      </ul>
    </div>
  )
}

export default Home
