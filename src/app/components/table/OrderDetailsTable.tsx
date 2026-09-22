import React from "react";
import { useCart } from "../cart/useCart";

const OrderDetailsTable = () => {
  const { items, subtotal } = useCart();
  const salesTax = 0;
  const total = subtotal + salesTax;

  const currency = (value: number) => `$${value.toFixed(2)}`;

  return (
    <div className="grid grid-cols-12 mb-4 mb-lg-0 mt-8">
      <div className="col-span-12">
        <h2 className="text-base md:text-lg font-semibold mb-2 text-sapphireBlue">
          Order Details
        </h2>

        <table className="w-full ">
          <thead>
            <tr>
              <th className="p-1.5 md:p-2 bg-iceBerg border text-start text-[10px] md:text-sm font-bold">
                Product Description
              </th>
              <th className="p-1.5 md:p-2 bg-iceBerg border md:text- text-start text-[10px] md:text-sm font-bold">
                Quantity
              </th>
              <th className="p-1.5 md:p-2 bg-iceBerg border  md:text-center text-start text-[10px] md:text-sm font-bold">
                Unit Price
              </th>
              <th className="p-1.5 md:p-2 bg-iceBerg border  md:text-center text-start text-[10px] md:text-sm font-bold">
                Ext Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-3 md:p-4 border text-center text-sm text-gray-600"
                >
                  No items in cart.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id}>
                  <td className="p-1.5 md:p-2 border">
                    <h2 className="text-[10px] md:text-sm font-normal text-start text-neutral-700">
                      {item.name}
                    </h2>
                  </td>
                  <td className="p-1.5 md:p-2 border">
                    <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700">
                      {item.quantity}
                    </h2>
                  </td>
                  <td className="p-1.5 md:p-2 border">
                    <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700">
                      {currency(item.unitPrice)}
                    </h2>
                  </td>
                  <td className="p-1.5 md:p-2 border">
                    <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700">
                      {currency(item.unitPrice * item.quantity)}
                    </h2>
                  </td>
                </tr>
              ))
            )}
            <tr>
              <td className="p-1.5 md:p-2">
                <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700 hidden ">
                  $29.99
                </h2>
              </td>
              <td className="p-1.5 md:p-2">
                <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700 hidden ">
                  $29.99
                </h2>
              </td>
              <td className="p-1.5 md:p-2 border">
                <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                  SubTotal:
                </h2>
              </td>
              <td className="p-1.5 md:p-2 border">
                <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                  {currency(subtotal)}
                </h2>
              </td>
            </tr>

            <tr>
              <td className="p-1.5 md:p-2">
                <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                  $29.99
                </h2>
              </td>
              <td className="p-1.5 md:p-2 ">
                <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                  $29.99
                </h2>
              </td>
              <td className="p-1.5 md:p-2 border">
                <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                  Sales Tax:
                </h2>
              </td>
              <td className="p-1.5 md:p-2 border">
                <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                  {currency(salesTax)}
                </h2>
              </td>
            </tr>

            <tr>
              <td className="p-2 ">
                <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                  $29.99
                </h2>
              </td>
              <td className="p-2">
                <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                  $29.99
                </h2>
              </td>
              <td className="p-2 border">
                <h2 className="text-[10px] md:text-sm font-bold text-end text-primary">
                  Total:
                </h2>
              </td>
              <td className="p-2 border">
                <h2 className="text-[10px] md:text-sm font-bold text-end text-primary">
                  {currency(total)}
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsTable;
