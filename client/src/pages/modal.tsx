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
    <div className="modal">
      <div className="modal-content">
        <button onClick={handleClose}>Close</button>
        <h2>Invoice Details</h2>
        {data ? (
          <div>
            <p>{data.vendor_name}</p>
            <p>{data.id}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Modal
