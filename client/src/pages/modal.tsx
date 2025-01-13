import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../app/store"
import { closeModal, fetchInvoice } from "../features/modal/modalSlice"

const Modal: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token)
  const dispatch = useDispatch<AppDispatch>()
  const { isOpen, invoiceId, data } = useSelector(
    (state: RootState) => state.modal,
  )

  useEffect(() => {
    if (invoiceId !== null) {
      dispatch(fetchInvoice({ id: invoiceId, token }))
    }
  }, [dispatch, invoiceId])

  const handleClose = () => {
    dispatch(closeModal())
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
        {data ? (
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Invoice ID:</span>
              <span className="text-gray-900">{data.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Created on</span>
              <span className="text-gray-900">
                {new Date(data.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">User ID: </span>
              <span className="text-gray-900">{data.user_id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Vendor Name:</span>
              <span className="text-gray-900">{data.vendor_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Description:</span>
              <span className="text-gray-900">{data.description}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Due Date:</span>
              <span className="text-gray-900">
                {new Date(data.due_date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Amount:</span>
              <span className="text-gray-900">${data.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Paid:</span>
              <span
                className={`text-gray-900 ${data.paid ? "text-green-600" : "text-red-600"}`}
              >
                {data.paid ? "Yes" : "No"}
              </span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Modal
