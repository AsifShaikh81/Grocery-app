import React from "react";
import DeliveryBoyDashboard from "./DeliveryDashboard";
import { auth } from "@/auth";
import connectDb from "@/lib/db";
import Order from "@/model/order.model";

async function DeliveryBoy() {
  await connectDb();
  const session = await auth();
  const deliveryBoyId = session?.user?.id;
  const orders = await Order.find({
    assignedDeliveryBoy: deliveryBoyId,
    deliveryOtpVerification: true,
  });

  const today = new Date().toDateString();
  const todayOrders = orders.filter(
    (o) => new Date(o.deliveredAt).toDateString() === today
  ).length;
  const todaysEarning = todayOrders * 40;

  return (
    <>
      <DeliveryBoyDashboard earning={todaysEarning} />
    </>
  );
}

export default DeliveryBoy;
