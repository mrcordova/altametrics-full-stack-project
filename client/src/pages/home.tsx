import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"

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
  const token = useSelector((state: any) => state.auth.token)
  const fetchInvoices = async (): Promise<Invoice[]> => {
    if (!token) {
      console.error("Token is missing")
      throw new Error("Token is missing ")
    }
    const response = await fetch("http://localhost:3000/invoices", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) throw new Error("Failed to fetch invoices")
    return response.json()
  }
  const { data, isLoading, error } = useQuery<Invoice[], Error>({
    queryKey: ["invoices", token],
    queryFn: fetchInvoices,
    enabled: !!token,
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
