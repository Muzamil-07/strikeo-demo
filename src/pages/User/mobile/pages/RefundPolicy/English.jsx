import React from "react";
import DenseTable from "./Table";
import { Box, Link, Typography } from "@mui/material";

const English = () => {
  const columns = [
    { Header: "Payment Method", accessor: "PaymentMethod" },
    { Header: "Refund Option", accessor: "RefundOption" },
    { Header: "Refund Time", accessor: "RefundTime" },
  ];

  const rows = [
    {
      PaymentMethod: "Debit or Credit Card",
      RefundOption: "Debit or Credit Card Payment Reversal",
      RefundTime: "7-10 business days",
    },
    {
      PaymentMethod: "PayPal",
      RefundOption: "PayPal",
      RefundTime: "5 business days",
    },
    {
      PaymentMethod: "Equated Monthly Installments",
      RefundOption: "Debit or Credit Card",
      RefundTime: "7-10 business days",
    },
    {
      PaymentMethod: "bKash",
      RefundOption: "Mobile Wallet Reversal / bkash",
      RefundTime: "7-10 business days",
    },
    {
      PaymentMethod: "Nagad",
      RefundOption: "Mobile Wallet Reversal / Nagad",
      RefundTime: "7-10 business days",
    },
    {
      PaymentMethod: "DBBL Nexus (Online Banking)",
      RefundOption: "Card Payment Reversal (Nexus)",
      RefundTime: "7-10 business days",
    },
    {
      PaymentMethod: "Rocket (Wallet DBBL)",
      RefundOption: "Mobile Wallet Reversal /Rocket",
      RefundTime: "7-10 business days",
    },
    {
      PaymentMethod: "Cash on Delivery (COD)",
      RefundOption: "Bank Deposit",
      RefundTime: "7-10 business days",
    },
    {
      PaymentMethod: "StrikeO Voucher",
      RefundOption: "StrikeO Refund Voucher",
      RefundTime: "3 business days",
    },
  ];
  const columns2 = [
    { Header: "Modes of Refund", accessor: "Mode" },
    { Header: "Description", accessor: "Description" },
  ];
  const rows2 = [
    {
      Mode: "Bank Deposit",
      Description:
        "The bank account details provided must be accurate and name must match. The account must be active. In some instances, bank usually requires the account holder to have minimal balance to process the refund.",
    },
    {
      Mode: "PayPal",
      Description:
        "The PayPal account must match. Please note that unauthorised transactions will be reported and refunds may be put on hold.",
    },
    {
      Mode: "Debit Card or Credit Card",
      Description:
        "Refunds are issued to the same debit/credit card. Please contact your bank immediately if the refunded amount is not reflected in your card statement after the refund is issued by StrikeO.",
    },
    {
      Mode: "bKash / Rocket / Nagad Mobile/Wallet",
      Description:
        "Similar to a bank deposit, the amount will be refunded to the same mobile account details that you inserted at the time of purchase. In case of any refund, the received cashback amount, if any, will be adjusted with the refund amount.",
    },
    {
      Mode: "Refund Voucher/Gift Card",
      Description:
        "Vouchers will be sent to the customer's registered email ID/phone and can be redeemed against the same user profile. The voucher discount code can only be applied once. The leftover amount will be reflected on your StrikeO account and can be used for the next purchase within the validity of the voucher. Please note that unauthorised transactions/ attempts will be reported and may result in temporary or permanent ban on using StrikeO.",
    },
  ];
  return (
    <Box mt={3} px={3}>
      <Box>
        <Typography fontSize={14}>
          At StrikeO, we hope every product delights you. However, should you
          need to return an item, we make the process straightforward. Please
          first contact our Support Team at{" "}
          <Link href={"mailto:support@strikeo.com"}> support@strikeo.com</Link>{" "}
          and write “Return – Order Number” so we can start your return right
          away and get you back on the road.
        </Typography>
        <Typography fontSize={14} py={1} fontWeight="bold">
          Return Guidelines
        </Typography>
        <ul className="info-page-list">
          <li>
            Unworn items returned within 30 days of delivery qualify for a
            refund. Please note any usage, defects or missing tags may impact
            refund value.
          </li>
          <li>
            Start the return process within 7-10 days of requesting a Return
            Merchandise Authorization (RMA) number from our team. Returns
            without an RMA may be rejected.
          </li>
          <li>
            Return items in original condition and packaging whenever possible.
            Reuse or replace packaging to prevent damage.
          </li>
          <li>
            Clearly label return shipments with your order details and RMA
            number to reach our warehouse successfully. Keep the tracking number
            handy.
          </li>
        </ul>
      </Box>
      <Box>
        <Typography fontSize={14} py={1} fontWeight="bold">
          Refund Method
        </Typography>
        <Typography fontSize={14}>
          Once returned items reach us, they undergo inspection (up to 72 hours)
          before refunds are initiated. Refunds are generally credited within
          7-10 business days after the returned items are approved. Here is the
          method:
        </Typography>
        <DenseTable columns={columns} rows={rows} />
        <Typography fontSize={14}>
          Note: Maximum refund timeline excludes weekends, public holidays,
          unavoidable situations, and social, political & environmental
          catastrophes
        </Typography>
        <Typography fontSize={14}>
          Please allow additional time for the refund to fully reflect in your
          account based on your bank’s processing procedure.
        </Typography>
        <DenseTable columns={columns2} rows={rows2} />
      </Box>
      <Box>
        <Typography fontSize={14} py={1} fontWeight="bold">
          Bearing Shipping Charges
        </Typography>
        <Typography fontSize={14}>
          We cover return shipping fees if goods arrive at you damaged or wrong
          product have been shipped. In other cases, customers bear return
          shipping charges. Reimbursements for return shipping may be provided
          on a case basis out of goodwill. Please get in touch with details.
        </Typography>
      </Box>
      <Box>
        <Typography fontSize={14} py={1} fontWeight="bold">
          Sale, Discount and Personalized Items
        </Typography>
        <Typography fontSize={14} pb={1}>
          Custom merchandise and engraved/printed items cannot be returned or
          refunded as they are made to order. Sale items are final purchase but
          you may begin the returns process if they arrive damaged or faulty.
        </Typography>
        <Typography fontSize={14}>
          We trust these policies deliver convenience and assurance as you shop
          with StrikeO. We always aim to optimize our service standards further.
          Please send any feedback to{" "}
          <Link href="mailto:support@strikeo.com">support@strikeo.com</Link> Now
          let’s get you ready to ride on!
        </Typography>
      </Box>
    </Box>
  );
};

export default English;
