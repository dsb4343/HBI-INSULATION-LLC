const niceInvoice = require("nice-invoice");

const invoiceDetail = {
  estimateInfo: {
    estimateNumber: 100,
    estimateDate: 09-25-2022
  },

  clientInfo: {
    name: "DAN BALAUN",
    address: "323 MISSOURI AVE.",
    city: "SALINA",
    state: "KANSAS",
    postalCode: 67401,
    phone: 785-823-3939
  },

  estimateDetails: {
    title: "DESCRIPTION",
    cost: "AMOUNT"
  },
  
  header: {

    companyName: "HBI INSULATION, LLC.",
    companyLogo: "HBI_Logo.png",
    companyAddress: "HBI INSULATION, LLC. 1708 REDWOOD DR. SALINA, KS 67401"        
  },
  footer: {
    text: "Our SprayFoam Technicians are Certified and Insured, That way you can rest easy knowing that Professionals are hard at work!"
  },
  currencySymbol: "$",
  date: {
    estimateDate: 09-25-2022,
    estimateDue_Date: 10-25-2022,
    text: "Your Estimate is good for 30 Days, if an Estimate is older than 30 Days, Prices are Subject to Change."
  },
}; 

niceInvoice(invoiceDetail, 'HBI-Estimate-100.pdf'); 