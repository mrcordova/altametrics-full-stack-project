import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { openModal } from "../features/modal/modalSlice"
import Modal from "./modal"

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
  const dispatch = useDispatch()
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
  const showModal = async (id: number) => {
    dispatch(openModal(id))
  }
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Invoices</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Payee
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Due Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Amount
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map(invoice => (
                <tr
                  key={invoice.id}
                  className="hover:bg-gray-100"
                  onClick={() => showModal(invoice.id)}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(invoice.created_at).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {invoice.vendor_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {invoice.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(invoice.due_date).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {invoice.amount === 0
                      ? ""
                      : `$${invoice.amount.toFixed(2)}`}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {invoice.paid ? "Paid" : "Open"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal />
    </div>
  )
}

export default Home
