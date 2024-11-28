import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/cart');
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    setIsModalVisible(true); // Show the confirmation modal
  };

  const closeModal = () => {
    setIsModalVisible(false); // Hide the modal
    navigate('/');
  };

  return (
    <div className="checkout-page">
        <PageHeader title='Checkout' image_url={'/checkout-bg.jpg'}/>
        <div className="checkout-content">
            <h2 className="page-title"> Checkout Page </h2>
            <div className="question-section">
              <h2>Are You Sure You Want To Purchase?</h2>
              <div className="buttons-cont">
                <button className="secondary" onClick={handleBack}>No, I'm Not Sure</button>
                <button onClick={handleConfirmation}>Yes, I'm Sure</button>
              </div>
            </div>
        </div>
        {/* Conditional rendering of the modal */}
      {isModalVisible && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <h2>Order Has Been Placed!</h2>
            <h3>Thank you for shopping at Be Ba Bo Hair Studio</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
