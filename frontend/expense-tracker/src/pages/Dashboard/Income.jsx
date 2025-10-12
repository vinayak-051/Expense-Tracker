import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import IncomeOverView from '../../components/Income/IncomeOverView';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import Modal from '../../components/Income/Modal';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import toast from 'react-hot-toast';
import IncomeList from '../../components/Income/IncomeList';
import DeleteAlert from '../../components/DeleteAlert';


const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch income details:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddIncome = async (income) => {
    const { source, amount, date, icon } = income;

    if (!source.trim()) {
      toast.error("Source is required.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be greater than 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        source,
        amount,
        date,
        icon,
      });
      setOpenAddIncomeModal(false);
      toast.success("Income added successfully.");
      fetchIncomeDetails();
    } catch (error) {
      console.error("Error adding income:", error.response?.data?.message || error.message);
      toast.error("Failed to add income. Please try again.");
    }
  };

const deleteIncome = async (id) => {
  try {
    await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));

    setOpenDeleteAlert({ show: false, data: null });
    toast.success("Income details deleted");
    fetchIncomeDetails();
  } catch (error) {
    console.error(
      "Error deleting income:",
      error.response?.data?.message || error.message
    );
  }
};

  const handleDownloadIncomeDetails = async () => {
    
  };

  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <IncomeOverView
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
          />
        </div>

        <IncomeList
         transactions={incomeData}
         onDelete={(id) => {
          setOpenDeleteAlert({ show : true , data:id});
         }}
         onDownload={handleDownloadIncomeDetails}
         />

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome} />
        </Modal>

        {openDeleteAlert.show && openDeleteAlert.data && (
  <Modal
    isOpen={true}
    onClose={() => setOpenDeleteAlert({ show: false, data: null })}
    title="Delete Income"
  >
    <DeleteAlert
      contents={"Are you sure , you want to delete income detail"}
      onDelete={() => deleteIncome(openDeleteAlert.data)}
    />
  </Modal>
)}

      </div>
    </DashboardLayout>
  );
};

export default Income;


