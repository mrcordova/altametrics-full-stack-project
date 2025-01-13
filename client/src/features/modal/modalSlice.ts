import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

interface ModalState {
  isOpen: boolean
  invoiceId: number | null
  data: any
}

const initialState: ModalState = {
  isOpen: false,
  invoiceId: null,
  data: null,
}

export const fetchInvoice = createAsyncThunk(
  "invoice/fetchInvoice",
  async ({ id, token }: { id: number; token: string }) => {
    const response = await fetch(`http://localhost:3000/invoices/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch invoice data")
    }

    const data = response.json()

    return data
  },
)

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.invoiceId = action.payload
    },
    closeModal: state => {
      state.isOpen = false
      state.invoiceId = null
      state.data = null
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchInvoice.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
