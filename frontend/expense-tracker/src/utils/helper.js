import moment from "moment";
import { data } from "react-router-dom";

export const validateEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const addThousandsSeparator = (num) =>{
    if(num == null || isNaN(num) ) return "";

    const [integerPart , fractionaPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

    return fractionaPart
    ?`${formattedInteger}.${fractionaPart}`
    : formattedInteger;
}


export const prepareExpenseChartData = (data = []) => {
  return data
    .filter((item) => item.type === "expense")
    .map((item) => ({
      category: item.item || item.category,
      amount: item.amount
    }));
};

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  return sortedData.map((item) => ({
    category: moment(item?.date).format("DD MMM YYYY"), 
    amount: item?.amount,                               
  }));
};


export const prepareIncomePieChartData = (data = []) => {
  return data.map((item) => ({
    name: item?.source,
    amount: item?.amount
  }));
};


export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('DD MM YYYY'),
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};

